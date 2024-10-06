import React from 'react';
import { useTranslation } from 'react-i18next';

interface ReasonProps {
  titleKey: string;
  descriptionKey: string;
}

const Reason: React.FC<ReasonProps> = ({ titleKey, descriptionKey }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col p-8 bg-purple-400 rounded-2xl w-full md:w-80 h-70 text-white">
      <div className="inline-block">
        <div className="w-16 h-16 bg-orange-400 rounded-full"></div>
      </div>
      <div className="h-20 flex items-center">
        <h3 className="text-lg font-bold">{t(titleKey)}</h3>
      </div>
      <p className="flex-grow">{t(descriptionKey)}</p>
    </div>
  );
};

const DesignedForYou: React.FC = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      titleKey: 'arriveConfidently',
      descriptionKey: 'arriveConfidentlyDesc',
    },
    {
      titleKey: 'getPlanInOrder',
      descriptionKey: 'getPlanInOrderDesc',
    },
    {
      titleKey: 'alwaysOnIntegrator',
      descriptionKey: 'alwaysOnIntegratorDesc',
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-6 md:space-y-0 md:space-x-6">
        {reasons.map((reason, index) => (
          <Reason key={index} titleKey={reason.titleKey} descriptionKey={reason.descriptionKey} />
        ))}
      </div>
    </div>
  );
};

export default DesignedForYou;
