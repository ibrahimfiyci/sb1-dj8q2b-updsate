import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, FileText, UserCheck, Paintbrush } from 'lucide-react';

const steps = [
  { icon: FileText, title: 'Submit Project Details', description: 'Provide information about your painting project.' },
  { icon: UserCheck, title: 'Receive Custom Quotes', description: 'Get personalized quotes from professional painters.' },
  { icon: Search, title: 'Compare Offers', description: 'Review and compare quotes to find the best fit.' },
  { icon: Paintbrush, title: 'Book & Get Started', description: 'Select your painter and begin your project.' },
];

export default function HowItWorks() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">How It Works</h2>
        <p className="text-xl text-center mb-8 max-w-2xl mx-auto text-white">
          Experience the #1 Painters&apos; Marketplace in the USA. Get free, personalized quotes from professional painters for your project. 
          We connect you directly with skilled professionals across Virginia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 border-[#FF6B6B] hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-center text-xl text-[#4ECDC4]">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-lg text-center mt-8 font-semibold text-white">
          Experience hassle-free home improvement with our curated network of top-rated painters in Virginia.
        </p>
      </div>
    </section>
  );
}