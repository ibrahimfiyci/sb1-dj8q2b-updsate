import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LocalPaintingTipsProps {
  tip: string;
  region: string;
}

export default function LocalPaintingTips({ tip, region }: LocalPaintingTipsProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Local Painting Tip for {region}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{tip}</p>
      </CardContent>
    </Card>
  );
}