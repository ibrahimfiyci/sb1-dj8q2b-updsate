import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LocalProjectsProps {
  project: {
    title: string;
    description: string;
    image: string;
  };
  region: string;
}

export default function LocalProjects({ project, region }: LocalProjectsProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Featured Project in {region}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image 
          src={project.image} 
          alt={project.title}
          width={600}
          height={400}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p>{project.description}</p>
      </CardContent>
    </Card>
  );
}