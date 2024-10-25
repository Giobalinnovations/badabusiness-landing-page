import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 bg-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-600">
          &copy; {currentYear}{' '}
          <span className="font-bold text-primary">badabusiness</span>. All
          rights reserved.
          {' | '}
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
