'use client'

// components/Advert.js
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Advert() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto pb-10" ref={ref}>
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        <div className={`md:w-1/2 w-full flex justify-center md:justify-start mb-4 md:mb-0 transition-transform duration-1000 ${isVisible ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
          <Image
            src="/images/advert.jpg"
            alt="Picture"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>
        <div className={`md:w-1/2 w-full md:pl-8 transition-transform duration-1000 ${isVisible ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
          <p className="text-base md:text-lg">
            <strong>Businesses of tomorrow</strong> need to be built on balanced foundations. By providing essential guidance on compliance, protecting your intellectual property, mitigating business related risks, and ensuring sound contracts, HT Legal helps to foster a secure and legally sound operating environment.
          </p>
          <h1 className="text-4xl font-normal leading-[3rem] mt-6">
            Helping Founders & Small Businesses Thrive.
          </h1>
        </div>
      </div>
    </div>
  );
}
