import React, { JSX, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What is ammonium persulfate used for?",
      answer:
        "Ammonium persulfate is a strong oxidizing agent used as a polymerization initiator in plastics and synthetic rubber, a bleaching agent in hair products and textiles, and an etchant in the electronics industry for printed circuit boards. It also finds applications in food preservation, water treatment, and as a depolarizer in batteries.",
    },
    {
      question: "What is sodium persulfate used for?",
      answer:
        "Sodium persulfate has a variety of uses due to its strong oxidizing properties, including bleaching (hair products, textiles), polymerization (initiator for styrene-based polymers), and cleaning/surface preparation (etching printed circuit boards, cleaning metal surfaces). It is also used in wastewater and soil remediation, producing reactive sulfate radicals to break down contaminants.",
    },
    {
      question: "What grade or purity do you supply?",
      answer:
        "We supply industrial-grade and high-purity grades that is >98.5%.",
    },
    {
      question: "What packaging options are available?",
      answer:(
        <>
        We offer the following packaging options:<br />
         1. 25 kg PP/HDPE bag with inner liner.<br />
         2. 50 kg PP/HDPE bag with inner liner.<br />
         3. 500/1000 kg jumbo bags.<br />
         4. custom packaging as per customer requirement.`
        </>
      )
    },
    {
      question: "Do you provide COA, SDS, and test reports?",
      answer:(
        <>
            Yes, we provide:<br />
            - Certificate of Analysis (COA)<br />
            - Safety Data Sheet (SDS)<br />
            - Batch-wise test results
        </>
      ),
    },
  ];

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 bg-white shadow-sm rounded-xl p-5"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {faq.question}
              </h3>

              {openIndex === index ? (
                <ChevronUp className="text-blue-600" />
              ) : (
                <ChevronDown className="text-blue-600" />
              )}
            </button>

            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
