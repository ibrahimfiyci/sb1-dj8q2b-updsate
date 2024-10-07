import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface UserReviewsProps {
  region: string;
}

const reviews = [
  { name: 'John D.', location: 'Alexandria', rating: 5, comment: 'Excellent service! The painter was professional and did a fantastic job on our home exterior.' },
  { name: 'Sarah M.', location: 'Richmond', rating: 4, comment: 'Very satisfied with the interior painting. They were punctual and paid great attention to detail.' },
  { name: 'Mike T.', location: 'Virginia Beach', rating: 5, comment: 'Outstanding work on our beach house. The paint job has held up well against the coastal weather.' },
];

export default function UserReviews({ region }: UserReviewsProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Customer Reviews in {region}</CardTitle>
      </CardHeader>
      <CardContent>
        {reviews.map((review, index) => (
          <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">{review.name}</span>
              <span className="text-sm text-gray-600">from {review.location}</span>
            </div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm">{review.comment}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}