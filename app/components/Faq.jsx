

const faqs = [
  {
    question: "Where are you located?",
    answer:
      "We are located in the Nigerian Cities of Lagos and Ibadan, however, our law practice operates entirely virtually, providing you with expert legal services from the comfort of your home or office. Through secure online consultations and digital document management, we ensure you receive top-notch legal assistance no matter where you are.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "You can schedule a consultation by booking directly on our website, or emailing us at enquiries@htlegaladvisory.in. Our team will get back to you promptly to arrange a convenient time.",
  },
  {
    question: "What do I bring to a consultation?",
    answer:
      "For your initial consultation, please bring any relevant documents related to your case, such as contracts, correspondence, and identification. A brief summary of your situation and any questions you have will also be helpful.",
  },
  {
    question: "Will my info be kept confidential?",
    answer:
      "Absolutely. We are committed to maintaining the highest standards of confidentiality and privacy. All information shared with us is protected by attorney-client privilege and will not be disclosed without your explicit consent.",
  },
  {
    question: "How do you determine your fees?",
    answer:
      "Our fees are determined based on the complexity and nature of your case. We offer a range of fee structures, including hourly rates, flat fees, and contingency fees. During your consultation, we will provide a detailed explanation of our fees and payment options.",
  },
  {
    question: "What is a retainer and how does it work?",
    answer:
      "A legal retainer is an agreement between a client and a law firm where the client pays a fee to secure access to legal services as needed over a specified period. This fee may cover specific services or act as a deposit against which services are billed.",
  },
  {
    question: "Benefits of a legal retainer?",
    answer:
      "• Priority access to legal advice.\n• Predictable legal costs.\n• Better relationship with your lawyer, who understands your business.\n• Ongoing compliance and risk management.",
  },
  {
    question: "What is the timeline for work?",
    answer:
      "The timeline depends on the type and complexity of the service.\n• Contract drafting: 3–7 business days for standard contracts; longer for complex agreements.\n• Legal opinion: 5–10 business days, depending on research required.\n• Company registration: Typically 1–4 weeks, depending on government processing times.\n• Court filings: Varies based on jurisdiction and case complexity.\n\n*Work can be expedited for an additional fee, especially urgent matters like contract reviews or last-minute filings.*",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-6xl mx-auto my-10 p-6">
      <h2 className="text-[40px] font-bold text-left mb-6">FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="">
            <h3 className="text-lg font-semibold">Q. {faq.question}</h3>
            <p className="text-gray-700 mt-2 whitespace-pre-line"><span className="font-bold">A:</span> {faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}