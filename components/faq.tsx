"use client"

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I choose the right painter in Virginia?",
    answer: "To choose the right painter in Virginia, consider their experience, reviews, and portfolio. Ensure they are insured. Get multiple quotes and ask about their familiarity with Virginia's climate and architectural styles."
  },
  {
    question: "What's the best time of year to paint exteriors in Virginia?",
    answer: "The best time for exterior painting in Virginia is typically late spring to early fall (May to October). This period offers milder temperatures and lower humidity, which are ideal for paint application and drying."
  },
  {
    question: "How often should I repaint my Virginia home's exterior?",
    answer: "In Virginia, exterior paint typically lasts 5-7 years, but this can vary based on the home's exposure to sun, humidity, and weather conditions. Coastal areas may require more frequent repainting due to salt exposure."
  },
  {
    question: "Are there any Virginia-specific regulations for painting contractors?",
    answer: "Yes, in Virginia, painting contractors must be licensed by the Department of Professional and Occupational Regulation if the job exceeds $1,000. Always verify your painter's license status before hiring."
  },
  {
    question: "How do I prepare my Virginia home for painting?",
    answer: "Preparation includes cleaning surfaces, repairing any damage, removing loose paint, and protecting non-painted areas. In Virginia, it's also important to consider humidity levels and plan accordingly to ensure proper paint adhesion and drying."
  }
];

export default function FAQ() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About Painting in Virginia</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}