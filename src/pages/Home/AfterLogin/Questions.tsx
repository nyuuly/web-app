import React, { useState } from "react";
import PrefectureDropdownlist from "../../../components/PrefectureDropdownlist";
import NationDropdownlist from "../../../components/NationDropdownlist";
import CustomDatePicker from "../../../components/CustomDatePicker";
import bicycleImage from "../../../assets/img/bicycle.png";

type TravelCompanion = "me" | "partner" | "children" | "partner_n_children";

interface QuestionsProps {
  onClose: () => void;
}

const Questions: React.FC<QuestionsProps> = ({ onClose }) => {
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [travelCompanion, setTravelCompanion] = useState<TravelCompanion | null>(null);
  const [prefecture, setPrefecture] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");

  const travelOptions = [
    { label: "Just me", value: "me" },
    { label: "With my partner", value: "partner" },
    { label: "With my children", value: "children" },
    { label: "With my partner & children", value: "partner_n_children" },
  ];

  const handleFinish = () => {
    const result = {
      arrivalDate,
      prefecture,
      nationality,
      travelCompanion,
    };
    console.log("Form data:", result);
    // Here you can add logic to send the data to an API in the future
    onClose(); // Close the slide-up after finishing
  };

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-8">
        Few Questions to get you started
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="w-full md:w-1/3 bg-white rounded-lg p-4 md:p-8 mb-6 md:mb-0">
          <CustomDatePicker
            selected={arrivalDate}
            onChange={(date: Date | null) => setArrivalDate(date)}
            placeholderText="Select arrival date"
            label="When are you arriving to Japan?"
          />
          <div className="mt-4">
            <PrefectureDropdownlist 
              label="Where in Japan are you moving to?" 
              onChange={(value: string) => setPrefecture(value)}
            />
          </div>
          <div className="mt-4 text-right">
            <img 
              src={bicycleImage} 
              alt="Bicycle" 
              className="inline bottom-4 right-4 w-40 h-auto"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 bg-white rounded-lg p-4 md:p-8">
          <NationDropdownlist 
            label="What is your country of citizenship?" 
            onChange={(value: string) => setNationality(value)}
          />
          <div className="mt-8">
            <label className="block text-black text-lg font-medium mb-2">
              Who will you be travelling with?
            </label>
            <div className="flex flex-col sm:flex-row sm:space-x-6 sm:space-y-0 space-y-4">
              {travelOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setTravelCompanion(option.value as TravelCompanion)}
                  className={`flex-1 py-6 px-4 rounded ${
                    travelCompanion === option.value
                      ? "bg-blue-200 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="flex justify-end space-x-4 mt-8">
              <button
                className="px-6 py-2 border border-gray-300 rounded font-bold text-gray-700 bg-white hover:bg-gray-100"
                onClick={onClose}
              >
                Skip
              </button>
              <button
                className="px-6 py-2 bg-orange-400 font-bold rounded text-black hover:bg-orange-500"
                onClick={handleFinish}
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
