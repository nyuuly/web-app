import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";

interface CustomDatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholderText: string;
  label: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  selected,
  onChange,
  placeholderText,
  label,
}) => {
  return (
    <>
      <label className="block text-lg font-medium text-black mb-2">
        {label}
      </label>
      <div className="relative datepicker-wrapper">
        <DatePicker
          selected={selected}
          onChange={onChange}
          className="w-full p-2 pr-10 text-gray-700 border rounded"
          placeholderText={placeholderText}
          dateFormat="MMMM d, yyyy"
        />
        <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
      <style jsx>{`
        .datepicker-wrapper .react-datepicker-wrapper,
        .datepicker-wrapper .react-datepicker__input-container {
          display: block;
          width: 100%;
        }
        .datepicker-wrapper .react-datepicker__input-container input {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default CustomDatePicker;
