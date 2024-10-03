import React from 'react';
import taskBannerImage from '../../assets/img/banner_task-min.png';

const TaskList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-24">
                <div className="w-full">
          <img
            src={taskBannerImage}
            alt="Task Banner"
            className="w-full h-auto"
          />
        </div>
      <h1 className="text-3xl font-bold mb-4">Task List</h1>
      <p>Here you can manage your tasks.</p>
    </div>
  );
};

export default TaskList;