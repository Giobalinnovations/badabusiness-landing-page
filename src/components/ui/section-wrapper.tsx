import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className,
}: SectionWrapperProps) {
  return <div className={cn('container w-full', className)}>{children}</div>;
}
