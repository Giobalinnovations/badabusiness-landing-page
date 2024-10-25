import Header from '@/components/header';
import Hero from '@/components/hero';
import Funnel from '@/components/funnel';
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

      <CardsSection />

      <Footer />
    </main>
  );
}
