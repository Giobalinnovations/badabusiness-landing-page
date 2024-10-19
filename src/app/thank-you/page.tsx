import { Metadata } from 'next';
import Link from 'next/link';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Thank You | badabusiness',
  description: 'Thank you for submitting the form. We appreciate your input.',
};

export default function ThankYou() {
  return (
    <>
      <GoogleTagManager gtmId="GTM-M468BPL6" />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            We've received your submission and appreciate your input. We'll get
            back to you soon if necessary.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
