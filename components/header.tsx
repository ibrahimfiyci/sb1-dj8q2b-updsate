"use client"

import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Painters Marketplace Logo" width={40} height={40} />
          <span className="font-bold text-xl bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] text-transparent bg-clip-text">Painters Marketplace</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/find-painters" className="text-[#4ECDC4] hover:text-[#45B7D1]">Find Painters</Link>
          <Link href="/blog" className="text-[#4ECDC4] hover:text-[#45B7D1]">Blog</Link>
          <Link href="#request-painter" className="text-[#4ECDC4] hover:text-[#45B7D1]">Request a Painter</Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}