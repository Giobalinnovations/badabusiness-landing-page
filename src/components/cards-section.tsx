import React from 'react';
import SectionWrapper from './ui/section-wrapper';

export default function CardsSection() {
  const cardContents = [
    'Visionary Leadership Skills: Learn how to create a future-focused vision for your business and align your team with it.',
    'Product Innovation & Market Edge: You will be able to get frameworks for innovation, ensuring you stay ahead of the competition while undertaking a culture of continuous improvement.',
    'Revenue Growth & Profit Margin Enhancement: Learn about strategic techniques for revenue growth while enhancing profitability.',
    'Global Expansion Strategies: Find insights on penetration into new markets and expansion of your business across international borders.',
    'High-Performance Team Building: Develop leaders within your team to build a sustainable, high-performing workforce.',
    'Financial Acumen and Operations Excellence: Learn how to make informed financial decisions based on data, streamline processes for greater productivity, and more.',
    "Strategy & Purpose Development: Such frameworks as the Arrow Model and 5Ps of Strategy Reformation help leaders take a defined stance regarding their organization's mission, purpose, and strategic direction.",
    'Talent Hiring & Retention: Frameworks will help guide you as to what it takes to have a productive workplace culture-structured training process, engagement strategies, and ESOPs.',
    'Product Development and Market Positioning: It involves the application of tools such as the VRIO framework and customer experience models so as to ensure that your lines for product development are indeed in line with market requirements and competitive equity.',
    'Financial planning and cash flow management: Participants acquire the frameworks for monitoring and improving profitability, cash flow management, and pass-through income models.',
    'Performance Optimization: Frameworks for performance evaluation, like the 7 Steps to Achieve Dreams and Execution Excellence, help leaders zero in on results while optimizing the processes.',
  ];

  return (
    <section className="bg-gray-100 py-16">
      <SectionWrapper>
        <h2 className="max-w-4xl text-center mx-auto text-4xl md:text-5xl font-bold text-primary leading-tight capitalize mb-12">
          Close look into the 52 Implementable Frameworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardContents.map((content, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700">{content}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-600">
          The 52 frameworks the Leadership Funnel Program has to its credit are
          undoubtedly its biggest strength. Each of these frameworks has been
          specifically designed to tackle each challenge facing businesses and
          leaders today. There are extremely important business functions for
          which all these frameworks are aligned, such as those listed above.
        </p>
        <p className="mt-4 text-center text-gray-600">
          These frameworks are easy to implement and have been used by more than
          1500 corporations and over 100 CEOs coached by Dr. Bindra himself.
        </p>
      </SectionWrapper>
    </section>
  );
}
