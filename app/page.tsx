import Hero from '@/components/hero';
import CustomerReviews from '@/components/customer-reviews';
import HowItWorks from '@/components/how-it-works';
import RecentBlogPosts from '@/components/recent-blog-posts';
import RequestPainter from '@/components/request-painter';
import FAQ from '@/components/faq';

// Define the structure of regionInfo
const regionInfo = {
  "northern-virginia": {
    name: "Northern Virginia",
    description: "This is Northern Virginia.",
    popularStyles: ["Modern", "Colonial"],
    image: "northern-virginia.jpg",
    localTip: "Tip for Northern Virginia.",
    featuredProject: {
      title: "Project 1",
      description: "This is project 1",
    },
  },
  "richmond-metro": {
    name: "Richmond Metro",
    description: "This is Richmond Metro.",
    popularStyles: ["Industrial", "Art Deco"],
    image: "richmond-metro.jpg",
    localTip: "Tip for Richmond Metro.",
    featuredProject: {
      title: "Project 2",
      description: "This is project 2",
    },
  },
  // Add more regions as needed
};

type Region = keyof typeof regionInfo; // Define valid keys of regionInfo as a type

// Function to generate metadata dynamically based on the region
export async function generateMetadata({ params }: { params: { region: Region } }) {
  const region = regionInfo[params.region];

  if (!region) {
    return {}; // Return an empty object or handle error if region is not found
  }

  return {
    title: region.name,
    description: region.description,
  };
}

// Main Home component to render the page
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="sr-only">Painters Marketplace – Find Top Professional Painters in Virginia</h1>
      <Hero />
      <HowItWorks />
      <CustomerReviews />
      <RequestPainter />
      <RecentBlogPosts />
      <FAQ />
    </div>
  );
}