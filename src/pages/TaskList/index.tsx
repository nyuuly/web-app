import React from "react";
import tasklistImage from "../../assets/img/tasklist.png";
import legalImage from "../../assets/img/legal-sample.png";
import livingImage from "../../assets/img/living-sample.png";
import FullwBgWrapper from "../../components/misc/FullwBgWrapper";
import SignUp from "../../components/SignUp";
import { FiCheck, FiCalendar, FiAlertCircle } from "react-icons/fi";

const TaskList: React.FC = () => {
  return (
    <main>
      <FullwBgWrapper>
        <div className="container mx-auto p-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full pr-4 mb-4 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">
                Start the move without confusion
              </h2>
              <p className="mb-8">
                Confused on the must dos to move to Japan? We show you step by
                step guide to prepare your move effectively{" "}
              </p>
              <button className="bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
                Register Nyuuly today
              </button>
            </div>

            <div className="w-full pl-4">
              <img
                src={tasklistImage}
                alt="Task List"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </FullwBgWrapper>
      <FullwBgWrapper bgClassName="bg-gray-100">
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 pr-4 mb-4 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Legal task list</h2>
              <ul>
                <li className="mt-2">
                  <FiCheck className="inline-block mr-2" />4 tasks
                </li>
                <li className="mt-2">
                  <FiCalendar className="inline-block mr-2" />
                  Day 0 - Day 14 after arrival
                </li>
                <li className="mt-2">
                  <FiAlertCircle className="inline-block mr-2" />
                  Very important
                </li>
              </ul>
              <button className="bg-blue-600 text-white font-semibold py-3 px-8 mt-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
                Start preparation
              </button>
            </div>
            <div className="w-full md:w-3/4 pl-4">
              <img
                src={legalImage}
                alt="LegalTask List"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-24">
            <div className="w-full md:w-3/4 pl-4">
              <img
                src={livingImage}
                alt="Living Task List"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/4 pl-4 mb-4 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Living task list</h2>
              <ul>
                <li className="mt-2">
                  <FiCheck className="inline-block mr-2" />4 tasks
                </li>
                <li className="mt-2">
                  <FiCalendar className="inline-block mr-2" />
                  Day 0 - Day 14 after arrival
                </li>
                <li className="mt-2">
                  <FiAlertCircle className="inline-block mr-2" />
                  Very important
                </li>
              </ul>
              <button className="bg-blue-600 text-white font-semibold py-3 px-8 mt-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
                Start preparation
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-8">
          <SignUp className="mb-12 rounded-xl" />
        </div>
      </FullwBgWrapper>
    </main>
  );
};

export default TaskList;
