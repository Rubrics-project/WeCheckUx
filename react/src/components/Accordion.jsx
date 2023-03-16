import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md">
      <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordion}>
        <h3 className="text-lg font-medium">{title}</h3>
        <svg className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-gray-300">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;