import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import mockupImage1 from "../../assets/img/mockup_1-min.png";
import mockupImage2 from "../../assets/img/mockup_2-min.png";
import mockupImage3 from "../../assets/img/mockup_3-min.png";

const Features: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("taskList");

  const TaskListContent = () => (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/2 bg-gray-100 p-4 md:p-8 rounded-lg flex flex-col items-center justify-between">
        <img
          src={mockupImage1}
          alt={t('taskListMockup')}
          className="max-w-full h-auto mb-4"
        />
        <p className="text-center text-xl md:px-12 md:py-4">
          {t('taskListDescription')}
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col gap-4">
        <div className="bg-gray-100 p-4 rounded-lg flex-1">
          <p className="text-xl mb-4 md:px-16 pt-8 pb-4">
            {t('taskListGuides')}
          </p>
          <div className="flex justify-center">
            <img
              src={mockupImage3}
              alt={t('taskListMockup')}
              className="w-3/4 max-w-full h-auto"
            />
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg flex-1 flex flex-col justify-between">
          <p className="text-xl mb-4 px-4 md:px-16 pt-8 pb-4">
            {t('taskListFeature')}
          </p>
          <div className="flex justify-center">
            <img
              src={mockupImage2}
              alt={t('taskListMockup')}
              className="w-3/4 max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { name: "taskList", content: <TaskListContent /> },
    { name: "informationHub", content: t('informationHubPlaceholder') },
    { name: "mobileSIM", content: t('mobileSIMPlaceholder') },
  ];

  return (
    <div className="features-container py-12 text-black">
      <h2 className="text-4xl font-bold text-center mb-4 font-manuale">
        {t('exploreOurServices')}
      </h2>
      <p className="text-2xl text-center mb-12">
        {t('supportingYourJourney')}
      </p>
      <div className="flex justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`md:px-4 py-2 mx-2 md:text-xl ${
              activeTab === tab.name
                ? "text-orange-400 border-b-4 border-orange-400 font-bold"
                : "text-black hover:text-orange-400"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {t(tab.name)}
          </button>
        ))}
      </div>
      <div className="content-container md:p-6 bg-white rounded-lg text-black">
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
};

export default Features;
