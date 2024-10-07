import React from 'react';
import NationDropdownlist from '../../components/NationDropdownlist';
import PrefectureDropdownlist from '../../components/PrefectureDropdownlist';

const FromToForm: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-24">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/5 flex justify-center">
          <div className="bg-blue-600 rounded-full w-80 h-80 flex items-center justify-center p-6 -mt-16">
            <p className="text-center text-white font-bold text-4xl font-manuale">
              Your one-stop info hub for a stress-free move!
            </p>
          </div>
        </div>
        <div className="w-full md:w-3/5 p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg p-4 md:mt-12"> {/* Added gap-6 for space between dropdowns */}
            <NationDropdownlist label="From" />
            <PrefectureDropdownlist label="To" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromToForm;
