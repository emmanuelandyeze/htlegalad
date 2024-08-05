'use client'

// components/Faq.js
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "Where are you located?",
    answer: "We are located in the Nigerian Cities of Lagos and Ibadan, however, our law practice operates entirely virtually, providing you with expert legal services from the comfort of your home or office. Through secure online consultations and digital document management, we ensure you receive top-notch legal assistance no matter where you are."
  },
  {
    question: "How do I schedule a consultation with an attorney?",
    answer: "You can schedule a consultation by calling our office line, filling out the contact form on our website, or emailing us directly at hilda@htlegaladvisory.in. Our team will get back to you promptly to arrange a convenient time."
  },
  {
    question: "What should I bring to my initial consultation?",
    answer: "For your initial consultation, please bring any relevant documents related to your case, such as contracts, correspondence, and identification. A brief summary of your situation and any questions you have will also be helpful."
  },
  {
    question: "How do you determine your fees?",
    answer: "Our fees are determined based on the complexity and nature of your case. We offer a range of fee structures, including hourly rates, flat fees, and contingency fees. During your consultation, we will provide a detailed explanation of our fees and payment options."
  },
  {
    question: "Will my information be kept confidential?",
    answer: "Absolutely. We are committed to maintaining the highest standards of confidentiality and privacy. All information shared with us is protected by attorney-client privilege and will not be disclosed without your explicit consent."
  },
  {
    question: "Do you offer services for startups and small businesses?",
    answer: "Yes, we offer comprehensive legal services tailored for startups and small businesses, including entity formation, contract drafting and review, intellectual property protection, and compliance advice. We understand the unique challenges faced by small businesses and are here to support your growth and success."
  }
];

export default function Faq() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
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

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
		<div className="max-w-7xl mx-auto pb-10" ref={ref}>
			<h2 className="text-3xl font-bold text-center my-8">
				FAQs
			</h2>
			<div className="flex flex-col md:flex-row items-center justify-center p-4">
				<div
					className={`md:w-1/2 w-full flex flex-col mb-4 md:mb-0 transition-transform duration-1000 ${isVisible ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
				>
					{faqData.map((item, index) => (
						<div key={index} className="mb-4">
							<button
								className="w-full text-left flex justify-between items-center p-4 bg-gray-100 rounded-md focus:outline-none"
								onClick={() => toggleFaq(index)}
							>
								<h3 className="text-xl font-semibold">
									{item.question}
								</h3>
								<FaChevronDown />
							</button>
							{openIndex === index && (
								<div className="mt-2 p-4 bg-gray-50 rounded-md shadow-md">
									<p>{item.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
				<div
					className={`md:w-1/2 w-full flex justify-center md:justify-end transition-transform duration-1000 ${isVisible ? 'transform translate-x-0' : 'transform translate-x-full'}`}
				>
					<Image
						src="/images/faq.jpg"
						alt="FAQ Image"
						width={600}
						height={600}
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	);
}
