import Image from 'next/image';
import SectionWrapper from './ui/section-wrapper';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-6 shadow-md">
      <SectionWrapper>
        <div className="flex justify-between items-center">
          <Image
            src="/images/logo.png"
            alt="badabusiness Logo"
            width={150}
            height={40}
          />
          <div className="flex items-center">
            <div className="flex items-center text-[#2A3342]">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-medium">+1 (123) 456-7890</span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </header>
  );
}
