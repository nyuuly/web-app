import React from 'react';
import { FiFileText } from "react-icons/fi";

interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => (
  <div className="w-full md:w-1/3 p-4">
    <div className="p-6 h-full flex flex-col bg-gray-100">
      <h3 className="text-lg flex items-start mb-4">
        <FiFileText className="mr-2 flex-shrink-0 mt-1" /> 
        <span>{question}</span>
      </h3>
    </div>
  </div>
);

const FrequentQuestion: React.FC = () => {
  const questions: string[] = [
    "How do I get started with Nyuuly?",
    "Is Nyuuly available in multiple languages?",
    "Can I use Nyuuly on my mobile device?",
    "How often is the information updated?",
    "Is there a cost to use Nyuuly?",
    "How can I contact support?"
  ];

  return (
    <div className="py-12 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="flex flex-wrap -mx-4">
          {questions.map((q, index) => (
            <Question key={index} question={q} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestion;
