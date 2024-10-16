import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/ui/section-wrapper';

export default function Header() {
  return (
    <header className="py-6">
      <SectionWrapper>
        <div className="flex justify-between items-center">
          <Image
            src="/images/logo.png"
            alt="badabusiness Logo"
            width={150}
            height={40}
          />
          <Button
            variant="default"
            className="bg-[#2A3342] text-white hover:bg-[#1F2937]"
          >
            Contact Sales
          </Button>
        </div>
      </SectionWrapper>
    </header>
  );
}
