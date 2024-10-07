import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RequestPainterForm from '@/components/request-painter-form';
import LocalPaintingTips from '@/components/local-painting-tips';
import LocalProjects from '@/components/local-projects';
import UserReviews from '@/components/user-reviews';

const regions = [
  'northern-virginia',
  'richmond-metro',
  'hampton-roads',
  'shenandoah-valley',
  'southwest-virginia'
];

const regionInfo = {
  'northern-virginia': {
    name: 'Northern Virginia',
    description: 'Discover top-rated painters in Northern Virginia, serving Alexandria, Arlington, Fairfax, and surrounding areas.',
    popularStyles: ['Modern', 'Colonial', 'Contemporary'],
    image: '/images/northern-virginia-painting.jpg',
    localTip: 'Consider using weather-resistant paints to protect against the varied climate in Northern Virginia.',
    featuredProject: {
      title: 'Historic Alexandria Home Restoration',
      description: 'A meticulous exterior painting project that restored a 19th-century Alexandria home to its former glory.',
      image: '/images/alexandria-home-project.jpg'
    }
  },
  'richmond-metro': {
    name: 'Richmond Metro',
    description: 'Find expert painters in the Richmond metropolitan area, including Henrico, Chesterfield, and Hanover counties.',
    popularStyles: ['Victorian', 'Federal', 'Modern'],
    image: '/images/richmond-metro-painting.jpg',
    localTip: 'For historic homes in Richmond, use breathable paints to prevent moisture buildup in older structures.',
    featuredProject: {
      title: 'Fan District Victorian Makeover',
      description: 'A colorful transformation of a Victorian home in Richmond\'s Fan District, highlighting its architectural details.',
      image: '/images/richmond-victorian-project.jpg'
    }
  },
  'hampton-roads': {
    name: 'Hampton Roads',
    description: 'Connect with skilled painters in the Hampton Roads region, including Virginia Beach, Norfolk, and Newport News.',
    popularStyles: ['Coastal', 'Colonial', 'Contemporary'],
    image: '/images/hampton-roads-painting.jpg',
    localTip: 'Use salt-resistant and moisture-resistant paints for homes near the coast in Hampton Roads.',
    featuredProject: {
      title: 'Oceanfront Condo Refresh',
      description: 'A bright and airy repaint of a Virginia Beach oceanfront condo, bringing the coastal vibe indoors.',
      image: '/images/virginia-beach-condo-project.jpg'
    }
  },
  'shenandoah-valley': {
    name: 'Shenandoah Valley',
    description: 'Hire experienced painters in the beautiful Shenandoah Valley, serving Harrisonburg, Staunton, and Winchester.',
    popularStyles: ['Farmhouse', 'Rustic', 'Traditional'],
    image: '/images/shenandoah-valley-painting.jpg',
    localTip: 'Choose UV-resistant paints to protect against sun exposure in the Shenandoah Valley\'s open landscapes.',
    featuredProject: {
      title: 'Rustic Barn Conversion',
      description: 'Transformation of an old Shenandoah Valley barn into a modern living space, preserving its rustic charm.',
      image: '/images/shenandoah-barn-project.jpg'
    }
  },
  'southwest-virginia': {
    name: 'Southwest Virginia',
    description: 'Find professional painters in Southwest Virginia, including Roanoke, Blacksburg, and surrounding areas.',
    popularStyles: ['Mountain Lodge', 'Craftsman', 'Traditional'],
    image: '/images/southwest-virginia-painting.jpg',
    localTip: 'For mountain homes in Southwest Virginia, use durable exterior paints that can withstand temperature fluctuations.',
    featuredProject: {
      title: 'Roanoke Craftsman Home Update',
      description: 'A complete interior and exterior repaint of a classic Craftsman home in Roanoke, enhancing its architectural features.',
      image: '/images/roanoke-craftsman-project.jpg'
    }
  },
};

export async function generateStaticParams() {
  return regions.map((region) => ({
    region: region,
  }));
}

export async function generateMetadata({ params }: { params: { region: string } }): Promise<Metadata> {
  const region = regionInfo[params.region];
  
  if (!region) {
    return {
      title: 'Region Not Found',
    };
  }

  return {
    title: `Top Painters in ${region.name} | Painters Marketplace`,
    description: `Find and hire the best professional painters in ${region.name}. Get free quotes for interior and exterior painting services in ${region.name}, Virginia.`,
    keywords: `painters ${region.name}, painting services ${region.name}, interior painting ${region.name}, exterior painting ${region.name}, professional painters Virginia`,
  };
}

export default function RegionPage({ params }: { params: { region: string } }) {
  const region = regionInfo[params.region];

  if (!region) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Professional Painters in {region.name}</h1>
      <p className="mb-6">{region.description}</p>

      <Image 
        src={region.image} 
        alt={`Painting services in ${region.name}, Virginia`}
        width={800}
        height={400}
        className="rounded-lg mb-8"
      />

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Popular Painting Styles in {region.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {region.popularStyles.map((style, index) => (
              <li key={index}>{style}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <LocalPaintingTips tip={region.localTip} region={region.name} />

      <LocalProjects project={region.featuredProject} region={region.name} />

      <h2 className="text-2xl font-semibold mb-4">Request a Quote from {region.name} Painters</h2>
      <RequestPainterForm selectedService={null} regions={[region.name]} />

      <UserReviews region={region.name} />

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Explore Other Virginia Regions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((r) => (
            r !== params.region && (
              <Link key={r} href={`/virginia-regions/${r}`} className="text-primary hover:underline">
                {regionInfo[r].name}
              </Link>
            )
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Learn More About Painting in Virginia</h2>
        <Link href="/virginia-painting-guide" className="text-primary hover:underline">
          Read our comprehensive Virginia Painting Guide
        </Link>
      </div>
    </div>
  );
}