import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Questions from "./Questions";
import { FiXCircle } from "react-icons/fi";
import TellUsMore from "./TellUsMore";
import { useAuth } from "../../../contexts/AuthContext";
import axiosInstance from "../../../api/axiosConfig";
import { API_ENDPOINTS } from "../../../api/endpoints";

const HomeAfterLogin: React.FC = () => {
  const [isQuestionsOpen, setIsQuestionsOpen] = useState(false);
  const { user, login } = useAuth();

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

  const handleFinish = async (questionData: {
    arrivalDate: Date | null;
    prefecture: string;
    nationality: string;
    travelWith: string | null;
  }) => {
    try {
      const { arrivalDate, prefecture, nationality, travelWith } = questionData;
      
      const arrivalDateString = arrivalDate ? arrivalDate.toISOString() : null;

      const userDataToSubmit = {
        email: user?.email,
        movingDate: arrivalDateString,
        destination: prefecture,
        fromCountry: nationality,
        travelWith,
      };
      console.log("Questionnaire answers:", userDataToSubmit);

      const response = await axiosInstance.put(API_ENDPOINTS.UPDATE_PROFILE, userDataToSubmit);

      console.log("Profile updated successfully:", response.data);
      
      // Update auth context and local storage with the latest user data
      if (response.data.user) {
        const updatedUser = { ...user, ...response.data.user };
        login(localStorage.getItem('access_token') || '', updatedUser);
      }

      setIsQuestionsOpen(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
      // Handle error (e.g., show error message to user)
    }
  };

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
              <Questions onClose={handleCloseQuestions} onFinish={handleFinish} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default HomeAfterLogin;
