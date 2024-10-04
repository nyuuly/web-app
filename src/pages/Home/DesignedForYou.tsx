import React from 'react';

interface ReasonProps {
  title: string;
  description: string;
}

const Reason: React.FC<ReasonProps> = ({ title, description }) => (
  <div className="flex flex-col p-8 bg-purple-400 rounded-2xl w-full md:w-80 h-70 text-white"> {/* Increased height to h-80 */}
    <div className="inline-block">
      <div className="w-16 h-16 bg-orange-400 rounded-full"></div>
    </div>
    <div className="h-20 flex items-center"> {/* Fixed height container for title */}
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
    <p className="flex-grow">{description}</p> {/* Allow description to grow and fill remaining space */}
  </div>
);

const DesignedForYou: React.FC = () => {
  const reasons = [ {
    title: "Arrive confidently in Japan",
    description: "Feel prepared and secure from day one.",
  },
  {
    title: "Get your plan in order, all in one place",
    description: "Track tasks and stay organized with ease.",
  },
  {
    title: "Always on integrator for all your needs",
    description: "Access services and info anytime, anywhere.",
  }
  ];

  return (
    <div className="py-12 px-4">
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-6 md:space-y-0 md:space-x-6"> {/* Changed items-center to items-stretch */}
        {reasons.map((reason, index) => (
          <Reason key={index} title={reason.title} description={reason.description}/>
        ))}
      </div>
    </div>
  );
};

export default DesignedForYou;
