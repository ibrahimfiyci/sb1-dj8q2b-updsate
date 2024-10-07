import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const featuredPainters = [
  { id: 1, name: 'John Doe', specialty: 'Interior Painting', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80' },
  { id: 2, name: 'Jane Smith', specialty: 'Exterior Painting', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80' },
  { id: 3, name: 'Mike Johnson', specialty: 'Mural Painting', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80' },
];

export default function FeaturedPainters() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Painters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredPainters.map((painter) => (
          <Card key={painter.id}>
            <CardHeader>
              <Image
                src={painter.image}
                alt={painter.name}
                width={256}
                height={256}
                className="rounded-full mx-auto"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">{painter.name}</CardTitle>
              <p>{painter.specialty}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}