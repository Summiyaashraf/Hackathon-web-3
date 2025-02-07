'use client';

import { useState } from 'react';

const faqs = [
  { question: 'What is Ruhi Resin Art?', answer: 'Ruhi Resin Art is an online store selling handmade resin art products.' },
  { question: 'How many days does delivery take?', answer: 'Our standard delivery time is 3-5 days.' },
  { question: 'What payment methods are available?', answer: 'We accept Cash on Delivery (COD) and online payments.' },
  { question: 'Are custom orders available?', answer: 'Yes, we also accept custom resin art orders.' },
  { question: 'What materials are used for the resin art?', answer: 'We use high-quality resin, pigments, and other decorative materials for our art pieces.' },
  { question: 'Do you offer international shipping?', answer: 'Currently, we only offer delivery within Pakistan.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-15 max-w-3xl mx-auto my-12 p-8 bg-slate-300 shadow-lg rounded-xl">
      <h2 className="text-3xl font-semibold text-center text-black mb-8">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-6 border-b border-gray-200 pb-4">
          <button
            className="w-full text-left font-medium text-xl flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg transition-all duration-300 ease-in-out"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="text-black">{openIndex === index ? '▲' : '▼'}</span>
          </button>
          {openIndex === index && (
            <p className="mt-3 text-black text-lg transition-all duration-300 ease-in-out">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
