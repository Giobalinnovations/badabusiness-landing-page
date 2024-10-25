import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Privacy Policy for Bada Business
        </h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            At Bada Business, accessible from{' '}
            <Link href="https://www.badabusiness.com/">
              www.badabusiness.com
            </Link>
            , the privacy of our visitors is of extreme importance to us. This
            Privacy Policy explains what information we collect and how we use
            it when you interact with our website and services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-700">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect the following types of information to provide and improve
            our services to you.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Personal Information:</strong> When you create an account,
              enroll in courses, or otherwise communicate with us, we may
              collect personal information from you to include your name, e-mail
              address, phone number, or payment information.
            </li>
            <li>
              <strong>Collecting usage data:</strong> While we may collect data
              regarding your access and use of our website, this includes data
              about your IP address, the type of browser used, pages visited and
              viewed, and the amount of time spent on those pages.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies and similar technologies
              to monitor activity on our site and to store certain information
              about you. You can control whether or not to accept cookies by
              configuring your browser.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-700">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            We collect, use, share, and otherwise process information to run our
            services. Here's a list of some ways we use your information:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>
              To allow you to participate in interactive features when you
              choose to do so
            </li>
            <li>To provide customer support</li>
            <li>To gather analysis and improve our services</li>
            <li>
              To communicate with you about promotions, newsletters, and other
              information.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-700">
            3. Information Sharing and Disclosure
          </h2>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties.
            However, we may share your information with:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Service Providers:</strong> We use third-party companies
              and individuals to perform services on our behalf, help us analyze
              how our service is used, or provide you with Services.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may share your personal
              information if legally obligated to do so or if we, in good faith,
              believe such disclosure is necessary in connection with either a
              civil or criminal action.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-700">
            4. Data Security
          </h2>
          <p className="mb-4">
            We do regard your trust when giving us your personal information. We
            take every precaution using commercially acceptable means to protect
            your information, though recall that no method of transmission over
            the Internet or method of electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-700">
            5. Your Rights
          </h2>
          <p className="mb-4">
            Depending on where you are based, you may have one or more of the
            following rights in relation to your personal data:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Right of access, correction or deletion of information about you
              that we hold.
            </li>
            <li>
              Right to object or restrict us from processing your personal data.
            </li>
            <li>
              Right to withdraw any consent given, if we rely on consent as a
              legal ground for processing your personal data.
            </li>
          </ul>
          <p className="mb-4">
            To exercise any of the foregoing rights, please send your request
            using the information below.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-700">
            6. Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            From time to time, we may update our Privacy Policy. We reserve the
            right to do so by posting changes on this page. Check back
            frequently to see if there is anything new; we cannot guarantee
            regularity but we will notify you of important changes.
          </p>

          <p className="mt-6 font-semibold">
            Thank you for choosing Bada Business!
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
