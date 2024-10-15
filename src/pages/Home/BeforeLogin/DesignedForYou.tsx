import React from "react";
import { useTranslation } from "react-i18next";

interface ReasonProps {
  titleKey: string;
  descriptionKey: string;
}

const Reason: React.FC<ReasonProps> = ({ titleKey }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-8 bg-gray-200 text-gray-200 rounded-2xl h-64 justify-center">
        <h3 className="text-lg font-bold text-center">{t(titleKey)}</h3>
      </div>
      <h3 className="p-8 font-medium text-2xl text-center">{t(titleKey)}</h3>
    </div>
  );
};

const DesignedForYou: React.FC = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      titleKey: "arriveConfidently",
      descriptionKey: "arriveConfidentlyDesc",
    },
    {
      titleKey: "getPlanInOrder",
      descriptionKey: "getPlanInOrderDesc",
    },
    {
      titleKey: "alwaysOnIntegrator",
      descriptionKey: "alwaysOnIntegratorDesc",
    },
  ];

  return (
    <div className="py-12 px-4">
      <h2 className="font-bold text-center mb-4">HOW TO GET STARTED</h2>
      <h2 className="text-4xl font-bold text-center mb-8">
        One platform that you'll ever need
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-stretch space-y-6 md:space-y-0 md:space-x-8">
        {reasons.map((reason, index) => (
          <div key={index} className="flex-1 w-full">
            <Reason
              titleKey={reason.titleKey}
              descriptionKey={reason.titleKey}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white text-lg font-semibold py-3 px-12 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
          Register for a nyuuly account today
        </button>
      </div>
    </div>
  );
};

export default DesignedForYou;
