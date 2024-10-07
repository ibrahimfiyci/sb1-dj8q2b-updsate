import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virginia Painting Tips & Insights | Painters Marketplace Blog',
  description: 'Discover expert painting tips, color trends, and home improvement insights from professional painters in Virginia.',
  keywords: 'painting tips Virginia, color trends VA, home improvement Virginia, professional painting advice VA, interior design Virginia, exterior painting VA',
};

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Choosing the Right Paint Color for Your Virginia Home",
    excerpt: "Selecting the perfect paint color can be overwhelming. Here are some expert tips to help you make the right choice for your Virginia space.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "The Benefits of Hiring a Professional Painter in Virginia",
    excerpt: "While DIY painting can be fun, there are many advantages to hiring a professional in Virginia. Explore the benefits of expert painting services.",
    date: "2023-05-22",
  },
  {
    id: 3,
    title: "Preparing Your Virginia Home for a Paint Job",
    excerpt: "Proper preparation is key to a successful paint job. Learn how to get your Virginia home ready for painting with these professional tips.",
    date: "2023-05-29",
  },
  {
    id: 4,
    title: "Trending Paint Colors for Virginia Homes in 2023",
    excerpt: "Discover the hottest paint colors that are making waves in Virginia interior design this year. Stay up-to-date with the latest color trends.",
    date: "2023-06-05",
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Virginia Painting Tips & Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}