import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const recentPosts = [
  {
    id: 1,
    title: "5 Tips for Choosing the Right Paint Color for Your Virginia Home",
    excerpt: "Discover expert advice on selecting the perfect paint colors that complement Virginia's diverse architecture and natural environment.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "The Benefits of Hiring a Professional Painter in Virginia",
    excerpt: "Learn why hiring a professional painter in Virginia can save you time, money, and ensure top-quality results for your home or business.",
    date: "2023-05-22",
  },
  {
    id: 3,
    title: "Preparing Your Virginia Home for a Paint Job",
    excerpt: "Get your Virginia home ready for a flawless paint job with these essential preparation tips tailored to the Commonwealth's unique climate and architecture.",
    date: "2023-05-29",
  },
];

export default function RecentBlogPosts() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Recent Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentPosts.map((post) => (
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
      <div className="text-center mt-8">
        <Link href="/blog" className="text-primary hover:underline">
          View all blog posts
        </Link>
      </div>
    </section>
  );
}