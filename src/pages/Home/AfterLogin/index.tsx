import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Questions from "./Questions";
import { FiXCircle } from "react-icons/fi";
import TellUsMore from "./TellUsMore";
import { useAuth } from "../../../contexts/AuthContext";

const HomeAfterLogin: React.FC = () => {
  const [isQuestionsOpen, setIsQuestionsOpen] = useState(false);
  const { user } = useAuth();

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

  const showTellUsMore = !user?.movingDate && !user?.fromCountry;

  return (
    <main>
      {showTellUsMore && (
        <TellUsMore onOpen={() => setIsQuestionsOpen(true)} />
      )}

      <AnimatePresence>
        {isQuestionsOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{
              background:
                "linear-gradient(180deg, #051C58 0%, #3D4EDD 51%, #FFA555 100%)",
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
