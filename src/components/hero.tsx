import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { HeroForm } from '@/components/hero-form';

export default function Hero() {
  return (
    <section className="bg-[#2A3342] py-16 md:py-24">
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#374151] text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              Startup Launch Checklist
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-[#F59E0B]">Ultimate</span> marketing
              <br />
              checklist guide
            </h1>
            <p className="text-[#9CA3AF] text-lg mb-8">
              Streamline your marketing efforts with our
              <br />
              comprehensive guides designed for small businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                className="bg-[#F59E0B] text-[#2A3342] hover:bg-[#D97706]"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-[#2A3342]"
              >
                Book Demo
              </Button>
            </div>
          </div>
          <div>
            <HeroForm />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
