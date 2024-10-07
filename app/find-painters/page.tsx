import { Metadata } from 'next';
import FindPaintersContent from '@/components/find-painters-content';

export const metadata: Metadata = {
  title: 'Find Painters | Get Quotes for Your Painting Project',
  description: 'Browse our network of professional painters, compare services, and get free quotes for your painting project.',
  keywords: 'find painters, painting quotes, professional painters, painting services, interior painting, exterior painting',
};

export default function FindPainters() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Painters for Your Project</h1>
      <FindPaintersContent />
    </div>
  );
}