import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FullwBgWrapper from "../../../components/misc/FullwBgWrapper";
import homeImage from "../../../assets/img/caughtUp.png";
import Questions from "./Questions";
import { FiXCircle } from "react-icons/fi";

const HomeAfterLogin: React.FC = () => {
  const [isQuestionsOpen, setIsQuestionsOpen] = useState(false);

  useEffect(() => {
    if (isQuestionsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isQuestionsOpen]);

  const handleCloseQuestions = () => {
    setIsQuestionsOpen(false);
  };

  return (
    <main>
      <FullwBgWrapper bgClassName="pb-24">
        <div className="container mx-auto px-4 py-12 flex flex-col items-center">
          <img
            src={homeImage}
            alt="Caught Up"
            className="max-w-md w-full h-auto"
          />
          <p className="mt-8 text-xl">You are all caught up!</p>
          <button
            onClick={() => setIsQuestionsOpen(true)}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Tell us more about your move to Japan
          </button>
        </div>
      </FullwBgWrapper>
      <AnimatePresence>
        {isQuestionsOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{
              background: "linear-gradient(180deg, #051C58 0%, #3D4EDD 51%, #FFA555 100%)"
            }}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseQuestions}
                className="text-2xl text-white"
              >
                <FiXCircle />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto">
              <Questions onClose={handleCloseQuestions} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default HomeAfterLogin;
