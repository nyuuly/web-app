import React from 'react';
import ScrollAnimationWrapper from '../../components/misc/ScrollAnimationWrapper';

const Team: React.FC = () => {
  return (
    <ScrollAnimationWrapper>
      <div className="container mx-auto py-12">
        {/* Top row */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-center">Meet the Team</h2>
        </div>

        {/* Bottom row */}
        <div className="bg-gray-200 p-8 rounded-lg">
          <p className="text-center text-xl">Team member profiles placeholder</p>
          {/* team member profiles */}
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
};

export default Team;
