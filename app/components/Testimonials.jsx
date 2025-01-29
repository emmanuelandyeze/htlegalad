'use client'

import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "HT Legal is literally a life-saver. Always ready and willing to help solve issues. It's their prompt and excellent service delivery for us. Saving us plenty headache and wahala that comes with running an event business in Nigeria.",
    author: "Mo' Events Ville"
  },
  {
    text: "HT legal Advisory services are one of the best at what they do.",
    author: "Ortega Godstime"
  },
  {
    text: "The team at HT legal really do amazing work! They’re fast, efficient and carry you along the entire process. Value for your money is definitely guaranteed.",
    author: "Opeyemi L. Akinmade"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-8 h-[45vh] px-4 sm:px-6 lg:px-8">
      <h2 className="text-[40px] font-bold text-center mb-6">Testimonials</h2>
      <div className="relative w-full h-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">"{testimonial.text}"</p>
              <p className="text-right font-semibold">- {testimonial.author}</p>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
