import React, { useState } from "react";
import mockupImage1 from "../../assets/img/mockup_1-min.png";
import mockupImage2 from "../../assets/img/mockup_2-min.png";
import mockupImage3 from "../../assets/img/mockup_3-min.png";

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Task List");

  const TaskListContent = () => (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg flex flex-col items-center justify-between">
        <img
          src={mockupImage1}
          alt="Task List Mockup"
          className="max-w-full h-auto mb-4"
        />
        <p className="text-center text-xl px-12 py-4">
          {" "}
          {/* Increased font size to text-xl */}
          The <b>task list</b> provides you with guides for a smooth transition
          to Japan, whether it's before your departure, after your arrival, or
          while you're settling into life in Japan.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col gap-4">
        <div className="bg-gray-100 p-4 rounded-lg flex-1">
          <p className="text-xl mb-4 px-16 pt-8 pb-4">
          You can find various guides related to living in Japan here, whether it’s about <b>work</b>, <b>housing</b>, or <b>banking</b>, and more.
          </p>
          <div className="flex justify-center">
            <img
              src={mockupImage3}
              alt="Task List Mockup"
              className="w-3/4 max-w-full h-auto"
            />
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg flex-1 flex flex-col justify-between">
          <p className="text-xl mb-4 px-16 pt-8 pb-4">
            The task list feature helps you stay organized and on track during
            your move to Japan.
          </p>
          <div className="flex justify-center">
            <img
              src={mockupImage2}
              alt="Task List Mockup"
              className="w-3/4 max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { name: "Task List", content: <TaskListContent /> },
    { name: "Information Hub", content: "Information Hub content placeholder" },
    {
      name: "Mobile SIM(Coming soon)",
      content: "Mobile SIM content placeholder",
    },
  ];

  return (
    <div className="features-container py-12 text-black">
      <h2 className="text-3xl font-bold text-center mb-4">
        Explore our services
      </h2>
      <p className="text-2xl text-center mb-12">
        Supporting every step of your journey with Nyuuly
      </p>
      <div className="flex justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-4 py-2 mx-2 text-xl ${
              activeTab === tab.name
                ? "text-orange-400 border-b-4 border-orange-400 font-bold"
                : "text-black hover:text-orange-400"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content-container p-6 bg-white rounded-lg text-black">
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
};

export default Features;
