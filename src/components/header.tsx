import Image from 'next/image';
import SectionWrapper from './ui/section-wrapper';
import { Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-4 md:py-6 shadow-md">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Image
              src="/images/logo.png"
              alt="badabusiness Logo"
              width={150}
              height={40}
              className="h-auto w-32 md:w-40 lg:w-48"
            />
          </div>
          <div className="flex items-center">
            <a
              href="mailto:info@badabusiness.com"
              className="flex items-center text-[#2A3342] hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <span className="text-sm md:text-base font-medium">
                info@badabusiness.com
              </span>
            </a>
          </div>
        </div>
      </SectionWrapper>
    </header>
  );
}
