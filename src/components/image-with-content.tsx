import React from 'react';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/section-wrapper';
import { cn } from '@/lib/utils';

interface ImageWithContentProps {
  subtitle?: string;
  title?: string;
  highlightedText?: string;
  description?: string;
  bulletPoints?: Array<{ title: string; description: string }>;
  imageSrc?: string;
  imageAlt?: string;
  imageOnRight?: boolean;
  fullWidthContent?: boolean;
}

export default function ImageWithContent({
  subtitle,
  title,
  highlightedText,
  description,
  bulletPoints,
  imageSrc,
  imageAlt,
  imageOnRight = true,
  fullWidthContent = false,
}: ImageWithContentProps) {
  return (
    <SectionWrapper className="py-12">
      <div
        className={cn(
          'flex flex-col gap-8 items-center',
          fullWidthContent
            ? 'lg:flex-col'
            : imageOnRight
            ? 'lg:flex-row'
            : 'lg:flex-row-reverse'
        )}
      >
        <div
          className={cn(
            'space-y-6',
            fullWidthContent ? 'w-full text-center' : 'flex-1'
          )}
        >
          {subtitle && (
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-800">
              {subtitle}
            </div>
          )}
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight capitalize">
              {highlightedText
                ? title.split(highlightedText).map((part, index, array) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < array.length - 1 && (
                        <span className="text-primary">{highlightedText}</span>
                      )}
                    </React.Fragment>
                  ))
                : title}
            </h2>
          )}
          {description && (
            <div
              className={cn(
                'text-lg text-gray-600 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-2',
                fullWidthContent && '[&_ul]:list-none [&_ul]:pl-0'
              )}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
        {!fullWidthContent && imageSrc && (
          <div className="flex-1 w-full">
            <div className="relative aspect-square">
              <Image
                src={imageSrc}
                alt={imageAlt ?? ''}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
