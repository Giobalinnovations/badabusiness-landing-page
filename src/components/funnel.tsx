'use client';

import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionWrapper from './ui/section-wrapper';

export default function Funnel() {
  return (
    <div className="py-14">
      <SectionWrapper>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2 lg:sticky lg:top-0 lg:self-start">
            <div className="relative aspect-square lg:aspect-auto lg:h-[calc(100vh-112px)]">
              <Image
                src="/images/img-2.webp"
                alt="Marketing Package Illustration"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="lg:w-1/2">
            <FAQSection />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

function FAQSection() {
  const faqData = [
    {
      question: 'What Is the Leadership Funnel Program?',
      answer: `The result-oriented leadership curriculum in the program Leadership Funnel is designed to take on vital business challenges. What makes this program unique is its holistic and implementable 52-framework methodology—one that addresses the key area of business. It goes from leadership development, financial planning, to product innovation—from plan to implementation, each of these being practiced from years of experience.
This program will actually enable the participant to grow revenue, operate more efficiently, build high-performance teams, and more. In the truest sense, its purpose is to generate future-ready leaders who navigate markets and deliver long-term profitability in the future.
`,
    },
    {
      question: 'The program is particularly crafted for?',
      answer: `<strong>The LFP is thoughtfully designed to help a wide cross-section of participants, including:
</strong><ul class="list-disc pl-5 space-y-2">
        <li>Entrepreneurial business people looking to grow their ventures</li>
        <li>Existing entrepreneurs looking to innovate to move ahead</li>
        <li>Corporate professionals looking to improve on their leadership and financial acumen</li>
        <li>Startups targeting sustainable growth and global expansion</li>
      </ul>
      <p class="mt-4">Whether you're starting or are an established business, the LFP offers strategies of relevance to organizations big and small and across various industries.</p>`,
    },
    {
      question: 'Plus Points from the Leadership Funnel Program',
      answer: `Attendees at LFP can take advantage of one-on-one coaching, access to confidential business documents, and the physical event in a 3-day setting. All these pieces allow the participant to become more effective in his or her leadership skills and improve the profitability of their organization. There are a few key takeaways in all of these items`,
    },
    {
      question: 'Close look into the 52 Implementable Frameworks',
      answer: `<ul class="list-disc pl-5 space-y-2">
  <li><strong>Visionary Leadership Skills:</strong> Learn how to create a future-focused vision for your business and align your team with it.</li>
  <li><strong>Product Innovation & Market Edge:</strong> You will be able to get frameworks for innovation, ensuring you stay ahead of the competition while developing a culture of continuous improvement.</li>
  <li><strong>Revenue Growth & Profit Margin Enhancement:</strong> Learn about strategic techniques for revenue growth while enhancing profitability.</li>
  <li><strong>Global Expansion Strategies:</strong> Find insights on penetration into new markets and expansion of your business across international borders.</li>
  <li><strong>High-Performance Team Building:</strong> Develop tactics within your team to build a sustainable, high-performing workforce.</li>
  <li><strong>Financial Acumen and Operations Excellence:</strong> Learn how to make informed financial decisions based on data, streamline processes for greater productivity, and more.</li>
</ul>

<p class="mt-4">The 52 frameworks the Leadership Funnel Program has to its credit are undoubtedly its biggest strength. Each of these frameworks has been specifically designed to tackle each challenge facing businesses and leaders today. These are extremely important business functions for which all these frameworks are aligned, such as:</p>

<ul class="list-disc pl-5 space-y-2 mt-4">
  <li><strong>Strategy & Purpose Development:</strong> Such frameworks as the Arrow Model and 6Ps of Strategy Formulation help leaders create a defined stance regarding their organization's mission, purpose, and strategic direction.</li>
  <li><strong>Talent Hiring & Retention:</strong> Frameworks will help guide you as to what it takes to have a productive workplace culture-structured training process, engagement strategies, and KSQPs.</li>
  <li><strong>Product Development and Market Positioning:</strong> It involves the application of tools such as the VRIO framework and customer experience models so as to ensure that your new lines of product development are indeed in line with market requirements and create brand equity.</li>
  <li><strong>Financial planning and cash flow management:</strong> Participants acquire the frameworks for monitoring and improving profitability, cash flow management, and pass-through income models.</li>
  <li><strong>Performance Optimization:</strong> Frameworks for performance evaluation, like the 7 Steps to Achieve Dreams and Execution Excellence, help leaders zero in on results while optimizing their workforce.</li>
</ul>

<p class="mt-4">These frameworks are easy to implement and have been used by more than 1500 corporations and over 100 CEOs coached by Dr. Bindra himself.</p>`,
    },
    {
      question: 'Why to opt for the Leadership Funnel Program?',
      answer: `<div>
        <p>LFP offers one-on-one coaching in the video classes and online programs, along with business manuals, business templates, and continuous support for the entire year. There are various package types depending on what kind of benefits it offers.</p>

        <p class="mt-4">These benefits include:</p>
        <ul class="list-disc pl-5 space-y-2 mt-2">
          <li>Dinners with Dr. Vivek Bindra</li>
          <li>Access to all the online courses</li>
          <li>A certificate upon completion of all assignments</li>
        </ul>

        <p class="mt-4">Preferential support through calls, WhatsApp, Google Meet, and emails is provided to all participants for their learning in and out.</p>

        <h3 class="text-2xl font-semibold mt-6 mb-4">Wrapping up</h3>
        <p>The Leadership Funnel Program by Dr. Vivek Bindra is more than just a course on leadership; it's the total transformation of your business into an actionable growth strategy. With 52 result-oriented frameworks, participants are enabled to bring profitability, innovative product development, high-performance teams, and operational excellence to the table. Whether you're an entrepreneur or a corporate leader, LFP gives you the tools and knowledge to fast-track your success and make you a visionary leader in your industry.</p>

        <p class="mt-4">If you are ready to unleash the potential of leadership and take your business to a newer high, book your spot today among thousands of leaders who benefit from this transformative program.</p>

        <h4 class="text-xl font-semibold mt-6 mb-2"><strong>Enroll Now:</strong> Leadership Funnel Program</h4>
        <p>Unlock your leadership potential today because a bright future belongs to those who lead with vision and strategy.</p>
      </div>`,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D3748] mb-4 leading-tight">
        Revamp Your Business with the{' '}
        <span className="text-primary">Leadership Funnel Program</span> by Dr.
        Vivek Bindra
      </h2>
      <p className="text-lg sm:text-xl text-[#4A5568] mb-8 leading-relaxed">
        Dr. Vivek Bindra's Leadership Funnel Program is there to revolutionize
        your business. Building visionary leadership is the cornerstone of
        sustainable success within today's competitive business environment.
        India's leading business coach, Dr. Vivek Bindra, has formulated the
        Leadership Funnel Program (LFP). LFP provides a roadmap that has been
        tested by entrepreneurs and professionals who seek to enhance business
        capabilities through systemized frameworks. Whether a businessman,
        leader, or aspiring entrepreneur, LFP will take you to the next level in
        your organization.
      </p>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <div
                className="text-gray-600 text-base sm:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
