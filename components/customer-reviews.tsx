"use client"

import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Richmond, VA",
    rating: 5,
    review: "The painter I found through Painters Marketplace did an amazing job on my Richmond home. Professional, punctual, and the results exceeded my expectations!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Virginia Beach, VA",
    rating: 4,
    review: "Great experience with a local Virginia Beach painter. Skilled and efficient. My beach house looks fantastic now!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Norfolk, VA",
    rating: 5,
    review: "I couldn't be happier with the exterior paint job on my Norfolk home. The painter was meticulous, and my house looks brand new. Highly recommend!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Charlottesville, VA",
    rating: 5,
    review: "The attention to detail was impressive. My historic Charlottesville home needed special care, and the painter delivered beyond expectations.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
  },
];

export default function CustomerReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-12 bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">What Our Virginia Customers Say</h2>
        <div className="relative" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="flex-[0_0_100%] min-w-0 relative px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <Image
                      src={review.image}
                      alt={`${review.name}'s profile picture`}
                      width={64}
                      height={64}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-[#4ECDC4]">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-2" aria-label={`Rating: ${review.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating ? 'text-[#FFE66D] fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm flex-grow text-gray-600">{review.review}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <Button variant="outline" size="icon" onClick={scrollPrev} className="bg-white text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={scrollNext} className="bg-white text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}