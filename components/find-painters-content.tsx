"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Paintbrush } from 'lucide-react';
import RequestPainterForm from '@/components/request-painter-form';

const paintingServices = [
  { id: 'interior', name: 'Interior Painting', icon: Paintbrush },
  { id: 'exterior', name: 'Exterior Painting', icon: Paintbrush },
  { id: 'commercial', name: 'Commercial Painting', icon: Paintbrush },
  { id: 'residential', name: 'Residential Painting', icon: Paintbrush },
  { id: 'specialty', name: 'Specialty Finishes', icon: Paintbrush },
];

const virginiaRegions = [
  'Northern Virginia',
  'Richmond Metro',
  'Hampton Roads',
  'Shenandoah Valley',
  'Southwest Virginia',
];

export default function FindPaintersContent() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Select a Painting Service in Virginia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paintingServices.map(service => (
            <Card 
              key={service.id} 
              className={`cursor-pointer transition-all ${selectedService === service.id ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedService(service.id)}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <service.icon className="mr-2" aria-hidden="true" />
                  {service.name}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      {selectedService && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Request a Quote from Virginia Painters</h2>
          <RequestPainterForm selectedService={selectedService} regions={virginiaRegions} />
        </div>
      )}
    </>
  );
}