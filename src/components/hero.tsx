import Image from 'next/image';

import SectionWrapper from './ui/section-wrapper';
import HeroForm from './hero-form';

export default function Hero() {
  return (
    <section className="bg-[#2a3342] py-16 md:py-0">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="w-full md:flex-grow md:mb-0">
            <div className="relative aspect-video">
              <Image
                src="/images/hero-banner.webp"
                alt="Hero Banner"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-[400px]  flex-shrink-0">
            {' '}
            {/* Increased width from 300px to 400px */}
            <HeroForm />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
