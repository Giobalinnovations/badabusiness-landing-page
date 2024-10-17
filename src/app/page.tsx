import Header from '@/components/header';
import Hero from '@/components/hero';
import Funnel from '@/components/funnel';
import Creative from '@/components/creative';
import Footer from '@/components/footer';
import ImageWithContent from '@/components/image-with-content';
import CardsSection from '@/components/cards-section';
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Funnel />
      <ImageWithContent
        imageSrc="/images/creative/img-3.webp"
        title="What Is the Leadership Funnel Program?"
        description="<p>The result-oriented leadership curriculum in the program Leadership Funnel is designed to take on vital business challenges. What makes this program unique is its holistic and implementable 52-framework methodology—one that addresses the key area of business. It goes from leadership development, financial planning, to product innovation—from plan to implementation, each of these being practiced from years of experience.
        </p> <p>This program will actually enable the participant to grow revenue, operate more efficiently, build high-performance teams, and more. In the truest sense, its purpose is to generate future-ready leaders who navigate markets and deliver long-term profitability in the future.</p>"
        highlightedText="Leadership Funnel Program?"
      />

      <ImageWithContent
        imageOnRight={false}
        imageSrc="/images/creative/img-4.webp"
        title="The program is particularly crafted for?"
        highlightedText="program"
        description="<p><strong>The LFP is thoughtfully designed to help a wide cross-section of participants, including:</strong></p> <ul><li>Entrepreneurial business people looking to grow their ventures
</li><li>Existing entrepreneurs looking to innovate to move ahead
</li><li>Corporate professionals looking to improve on their leadership and financial acumen</li><li>Startups targeting sustainable growth and global expansion
</li></ul><p>Whether you're starting or are an established business, the LFP offers strategies of relevance to organizations big and small and by industry.
</p>"
      />
      <ImageWithContent
        imageSrc="/images/creative/img-8.webp"
        title="Plus Points from the Leadership Funnel Program"
        highlightedText="Leadership Funnel Program"
        description="<p>Attendees at LFP can take advantage of one-on-one coaching, access to confidential business documents, and the physical event in a 3-day setting. All these pieces allow the participant to become more effective in his or her leadership skills and improve the profitability of their organization. There are a few key takeaways in all of these items:</p>"
      />
      <ImageWithContent
        imageOnRight={false}
        imageSrc="/images/creative/img-11.webp"
        title="Why to opt for the Leadership Funnel Program?"
        highlightedText="Leadership Funnel Program?"
        description="<p>LFP offers one-on-one coaching in the video classes and online programs, along with business manuals, business templates, and continuous support for the entire year. There are various package types depending on what kind of benefits it offers.</p><p>These benefits include dinners with Dr. Vivek Bindra, access to all the online courses, and a certificate once all the assignments are done. Preferential support through calls, WhatsApp, Google Meet, and emails is provided to all participants for their learning in and out.</p><p> Wrapping up
The Leadership Funnel Program by Dr. Vivek Bindra is more than just a course on leadership; it's the total transformation of your business into an actionable growth strategy. With 52 result-oriented frameworks, participants are enabled to bring profitability, innovative product development, high-performance teams, and operational excellence to the table. Whether you're an entrepreneur or a corporate leader, LFP gives you the tools and knowledge to fast-track your success and make you a visionary leader in your industry.
If you are ready to unleash the potential of leadership and take your business to a newer high, book your spot today among thousands of leaders who benefit from this transformative program.

Enroll Now: Leadership Funnel Program
Unlock your leadership potential today because a bright future belongs to those who lead with vision and strategy.
</p>"
      />

      {/* <ImageWithContent
        fullWidthContent
        imageOnRight={false}
        imageSrc="/images/creative/img-5.webp"
        title="Close look into the 52 Implementable Frameworks"
        highlightedText="52 Implementable Frameworks"
        description="<ul><li>Visionary Leadership Skills: Learn how to create a future-focused vision for your business and align your team with it.</li><li>Product Innovation & Market Edge: You will be able to get frameworks for innovation, ensuring you stay ahead of the competition while undertaking a culture of continuous improvement.</li><li>Revenue Growth & Profit Margin Enhancement: Learn about strategic techniques for revenue growth while enhancing profitability.</li><li>Global Expansion Strategies: Find insights on penetration into new markets and expansion of your business across international borders.</li><li>High-Performance Team Building: Develop leaders within your team to build a sustainable, high-performing workforce.</li><li>Financial Acumen and Operations Excellence: Learn how to make informed financial decisions based on data, streamline processes for greater productivity, and more.</li></ul><p>The 52 frameworks the Leadership Funnel Program has to its credit are undoubtedly its biggest strength. Each of these frameworks has been specifically designed to tackle each challenge facing businesses and leaders today. There are extremely important business functions for which all these frameworks are aligned, such as:</p><ul><li> Strategy & Purpose Development: Such frameworks as the Arrow Model and 5Ps of Strategy Reformation help leaders take a defined stance regarding their organization's mission, purpose, and strategic direction.</li><li>Talent Hiring & Retention: Frameworks will help guide you as to what it takes to have a productive workplace culture-structured training process, engagement strategies, and ESOPs.</li><li>Product Development and Market Positioning It involves the application of tools such as the VRIO framework and customer experience models so as to ensure that your lines for product development are indeed in line with market requirements and create brand equity.</li><li>Financial planning and cash flow management: Participants acquire the frameworks for monitoring and improving profitability, cash flow management, and pass-through income models.</li><li>Performance Optimization: Frameworks for performance evaluation, like the 7 Steps to Achieve Dreams and Execution Excellence, help leaders zero in on results while optimizing the processes.</li></ul><p>These frameworks are easy to implement and have been used by more than 1500 corporations and over 100 CEOs coached by Dr. Bindra himself.</p>"
      /> */}
      <CardsSection />
      {/* <Creative /> */}
      <Footer />
    </main>
  );
}
