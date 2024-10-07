import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Painters Marketplace</h3>
            <p className="text-sm">Connect with professional painters for your projects.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/find-painters">Find Painters</Link></li>
              <li><Link href="/become-a-painter">Become a Painter</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm">Email: info@paintersmarketplace.com</p>
            <p className="text-sm">Phone: (571) 485-9335</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Painters Marketplace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}