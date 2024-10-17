'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CreativeImage {
  id: number;
  src: string;
  alt: string;
}

const creativeImages: CreativeImage[] = [
  { id: 3, src: '/images/creative/img-3.webp', alt: 'Creative artwork 3' },
  { id: 4, src: '/images/creative/img-4.webp', alt: 'Creative artwork 4' },
  { id: 5, src: '/images/creative/img-5.webp', alt: 'Creative artwork 5' },
  { id: 6, src: '/images/creative/img-6.webp', alt: 'Creative artwork 6' },
  { id: 7, src: '/images/creative/img-7.webp', alt: 'Creative artwork 7' },
  { id: 8, src: '/images/creative/img-8.webp', alt: 'Creative artwork 8' },
  { id: 9, src: '/images/creative/img-9.webp', alt: 'Creative artwork 9' },
  { id: 10, src: '/images/creative/img-10.webp', alt: 'Creative artwork 10' },
  { id: 11, src: '/images/creative/img-11.webp', alt: 'Creative artwork 11' },
];

export default function Creative() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<CreativeImage | null>(
    null
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openModal = (image: CreativeImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {creativeImages.map(image => (
          <div
            key={image.id}
            className={`relative aspect-square overflow-hidden rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            onClick={() => openModal(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              loading="lazy"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full h-full max-h-[90vh] m-4">
            <button
              className="absolute top-4 right-4 text-white text-xl font-bold z-10"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
