import { useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border border-nova-charcoal-lighter rounded-lg">
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-nova-charcoal-light transition"
          >
            <h3 className="font-semibold text-left text-nova-charcoal">{item.title}</h3>
            <svg
              className={`w-5 h-5 text-nova-green transition transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          {openIndex === index && (
            <div className="px-6 py-4 border-t border-nova-charcoal-lighter bg-nova-charcoal-light/50 transition-all duration-300">
              <p className="text-nova-charcoal-700 leading-relaxed">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


