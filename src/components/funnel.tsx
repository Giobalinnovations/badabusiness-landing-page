'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Funnel() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/images/img-2.webp"
            alt="Marketing Package Illustration"
            width={500}
            height={500}
            layout="responsive"
            className="rounded-lg"
          />
        </div>

        {/* FAQ Section */}
        <div className="md:w-1/2">
          <FAQSection />
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const faqData = [
    {
      question: "What's included in the marketing package?",
      answer:
        'Our package comprises comprehensive guides, courses, and templates designed to streamline your marketing efforts.',
    },
    {
      question: 'How can your product benefit my business?',
      answer:
        'Our product can help improve your marketing strategies, increase efficiency, and boost your overall business performance.',
    },
    {
      question: 'Is the content regularly updated?',
      answer:
        'Yes, we regularly update our content to ensure you have access to the latest marketing trends and strategies.',
    },
    {
      question: 'Can I customize the templates?',
      answer:
        'Absolutely! Our templates are fully customizable to fit your specific business needs and branding.',
    },
  ];

  return (
    <div>
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  question,
  answer,
  isFirst,
}: {
  question: string;
  answer: string;
  isFirst: boolean;
}) {
  const [isOpen, setIsOpen] = useState(isFirst);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full p-4 bg-gray-100 rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className="flex items-center justify-center w-6 h-6 text-xl font-semibold text-gray-500 bg-white rounded-full">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-white rounded-lg">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}
