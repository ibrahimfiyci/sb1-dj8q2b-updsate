import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Script from 'next/script';

// This is a mock database of blog posts
const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Choosing the Right Paint Color for Your Virginia Home",
    excerpt: "Selecting the perfect paint color can be overwhelming. Here are some expert tips to help you make the right choice for your Virginia space.",
    date: "2023-05-15",
    author: "John Doe",
    content: "Choosing the right paint color for your Virginia home can be a daunting task. Here are five expert tips to help you make the best decision: 1. Consider the natural light in your space. 2. Think about the mood you want to create. 3. Test colors in your actual room. 4. Coordinate with existing furnishings and decor. 5. Don't forget about the exterior! Virginia's diverse climate requires durable, weather-resistant paints.",
  },
  {
    id: 2,
    title: "The Benefits of Hiring a Professional Painter in Virginia",
    excerpt: "While DIY painting can be fun, there are many advantages to hiring a professional in Virginia. Explore the benefits of expert painting services.",
    date: "2023-05-22",
    author: "Jane Smith",
    content: "Hiring a professional painter in Virginia comes with numerous benefits: 1. Quality results that last longer. 2. Time and stress savings for you. 3. Proper preparation and cleanup. 4. Access to high-quality paints and tools. 5. Knowledge of Virginia's specific climate challenges. 6. Insurance and warranty protection. Investing in a professional can ultimately save you money and headaches in the long run.",
  },
  {
    id: 3,
    title: "Preparing Your Virginia Home for Exterior Painting",
    excerpt: "Learn how to properly prepare your Virginia home's exterior for a fresh coat of paint. Follow these steps for a long-lasting finish.",
    date: "2023-05-29",
    author: "Mike Johnson",
    content: "Preparing your Virginia home for exterior painting is crucial for a lasting finish. Follow these steps: 1. Clean the surfaces thoroughly. 2. Repair any damaged siding or trim. 3. Sand rough areas and remove old, peeling paint. 4. Prime bare wood and repaired areas. 5. Caulk gaps and joints. 6. Protect landscaping and non-painted surfaces. 7. Check the weather forecast for ideal painting conditions. Proper preparation will ensure your paint job withstands Virginia's varied climate.",
  },
  {
    id: 4,
    title: "Trending Paint Colors for Virginia Homes in 2023",
    excerpt: "Discover the hottest paint colors that are making waves in Virginia interior design this year. Stay up-to-date with the latest color trends.",
    date: "2023-06-05",
    author: "Emily Davis",
    content: "Virginia homeowners are embracing bold and nature-inspired colors in 2023. Here are the top trending paint colors for Virginia homes:\n\n1. Coastal Blue: Inspired by Virginia's beautiful coastline, this calming blue adds a touch of serenity to any room.\n\n2. Historic Williamsburg Green: A nod to Virginia's rich history, this deep green brings elegance and sophistication to interiors.\n\n3. Shenandoah Sunset: A warm, earthy orange that captures the beauty of Virginia's mountain sunsets.\n\n4. Richmond Red: A bold, statement-making red that pays homage to Virginia's capital city.\n\n5. Chesapeake Gray: A versatile neutral that complements Virginia's diverse architectural styles.\n\nWhen choosing these colors, consider your home's natural light, architecture, and your personal style. Don't be afraid to mix and match these trending colors to create a unique look that reflects your Virginia home's character.",
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts.find(post => post.id === parseInt(params.id));
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Virginia Painting Tips`,
    description: `Read expert advice on ${post.title.toLowerCase()} for your Virginia home or business. Get insights from professional painters in VA.`,
    keywords: `${post.title.toLowerCase()}, Virginia painting, VA home improvement, professional painters Virginia, ${post.title.split(' ').join(', ')}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    description: post.excerpt,
    publisher: {
      "@type": "Organization",
      name: "Painters Marketplace",
      logo: {
        "@type": "ImageObject",
        url: "https://paintersmarketplace.com/logo.png", // Replace with your actual logo URL
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/blog" className="text-primary hover:underline inline-flex items-center mb-4">
        <ChevronLeft className="mr-1" size={20} />
        Back to all posts
      </Link>
      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-8">Published on {post.date} by {post.author}</p>
        <div className="prose max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}