import React from 'react';
import { FiFileText } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

interface QuestionProps {
  questionKey: string;
}

const Question: React.FC<QuestionProps> = ({ questionKey }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="p-6 h-full flex flex-col bg-gray-100">
        <h3 className="text-lg flex items-start mb-4">
          <FiFileText className="mr-2 flex-shrink-0 mt-1" /> 
          <span>{t(questionKey)}</span>
        </h3>
      </div>
    </div>
  );
};

const FrequentQuestion: React.FC = () => {
  const { t } = useTranslation();
  const questionKeys: string[] = [
    "faqQuestion1",
    "faqQuestion2",
    "faqQuestion3",
    "faqQuestion4",
    "faqQuestion5",
    "faqQuestion6"
  ];

  return (
    <div className="py-12 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('frequentQuestionsTitle')}</h2>
        <div className="flex flex-wrap -mx-4">
          {questionKeys.map((key, index) => (
            <Question key={index} questionKey={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestion;
