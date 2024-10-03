import React from 'react';

interface ReasonProps {
  title: string;
}

const Reason: React.FC<ReasonProps> = ({ title }) => (
  <div className="flex flex-col items-center p-4">
    {/* <div className="w-24 h-24 bg-blue-100 rounded-full mb-4 flex items-center justify-center"> */}
      <div className="w-16 h-16 bg-blue-200 rounded-full"></div>
    {/* </div> */}
    <h3 className="text-lg font-semibold text-center">{title}</h3>
  </div>
);

const DesignedForYou: React.FC = () => {
  const reasons = [
    "Arrive confidently in Japan",
    "Get your plan in order, all in one place",
    "Always on integrator for all your needs"
  ];

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Designed with you in mind</h2>
      <div className="flex flex-col md:flex-row justify-around items-center">
        {reasons.map((reason, index) => (
          <Reason key={index} title={reason} />
        ))}
      </div>
    </div>
  );
};

export default DesignedForYou;
