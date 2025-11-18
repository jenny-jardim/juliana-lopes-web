import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LucideProps } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  Icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  iconColor?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  faqs,
  Icon = ChevronDown,
  iconColor = "text-[#5e7155]",
}) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F1E8] transition-colors"
            aria-expanded={expandedFaq === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-sans font-semibold text-[#404D3A] pr-4 text-sm sm:text-base">{faq.question}</span>
            <Icon className={`w-5 h-5 ${iconColor} transition-transform flex-shrink-0 ${expandedFaq === index ? 'transform rotate-90' : ''}`} />
          </button>
          <AnimatePresence initial={false}>
            {expandedFaq === index && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden font-sans">
                <p id={`faq-answer-${index}`} role="region" className="text-[#404D3A] leading-relaxed text-sm sm:text-base px-6 pb-6">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};