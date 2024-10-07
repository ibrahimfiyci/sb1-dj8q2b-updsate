import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Leaf, TrendingUp, PaintBucket } from 'lucide-react';

export default function Hero() {
  const houseImages = [
    {
      src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Modern Virginia home exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Traditional Virginia house with fresh paint"
    },
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Colorful row houses in Virginia"
    },
    {
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Virginia home interior painting project"
    }
  ];

  const features = [
    { icon: MapPin, text: "Nationwide Presence" },
    { icon: TrendingUp, text: "Rapid Expansion" },
    { icon: PaintBucket, text: "Elevating Industry Standards" },
    { icon: Leaf, text: "Eco-Friendly Practices" },
  ];

  return (
    <div className="py-8 md:py-16 text-center relative">
      <div className="mb-4 md:mb-6 flex flex-col items-center">
        <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-2">
          #1 Painters&apos; Marketplace in the USA
        </span>
        <span className="text-sm md:text-base text-[#4ECDC4] font-medium">
          Innovative Startup Revolutionizing the Painting Industry
        </span>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] text-transparent bg-clip-text px-2 md:px-4 max-w-4xl mx-auto">
        Find the Perfect Painter for Your Virginia Project
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-[#4ECDC4] px-2 md:px-4 max-w-3xl mx-auto">
        Connect with skilled local painters across Virginia and bring your vision to life.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <feature.icon className="w-8 h-8 mb-2 text-[#FF6B6B]" />
            <span className="text-sm font-medium">{feature.text}</span>
          </div>
        ))}
      </div>
      <p className="text-sm md:text-base mb-6 md:mb-8 text-gray-600 dark:text-gray-300 px-2 md:px-4 max-w-3xl mx-auto">
        Join us in our mission to transform the painting industry while actively combating climate change. 
        Our innovative approach and eco-friendly practices are setting new standards across the nation.
      </p>
      <div className="space-y-3 sm:space-y-0 sm:space-x-3 mb-6 md:mb-8">
        <Button className="btn-primary text-xs sm:text-sm md:text-base w-full sm:w-auto px-3 py-2 md:px-4 md:py-2" asChild>
          <Link href="#request-painter">Request a Virginia Painter</Link>
        </Button>
        <Button variant="outline" className="btn-secondary text-xs sm:text-sm md:text-base w-full sm:w-auto px-3 py-2 md:px-4 md:py-2" asChild>
          <Link href="/blog">Virginia Painting Tips</Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-4xl mx-auto px-2 md:px-4">
        {houseImages.map((image, index) => (
          <div key={index} className="relative h-28 sm:h-36 md:h-48 rounded-lg overflow-hidden">
            <Image 
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}