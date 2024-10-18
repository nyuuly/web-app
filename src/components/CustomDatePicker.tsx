import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";
import "./CustomDatePicker.css"; // We'll create this file for the custom styles

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
  const handleDateChange = (date: Date | null) => {
    if (date) {
      const utcDate = new Date(Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        0, 0, 0, 0
      ));
      console.log("Selected UTC date:", utcDate.toISOString());
      onChange(utcDate);
    } else {
      console.log("Date cleared");
      onChange(null);
    }
  };

  return (
    <>
      <label className="block text-lg font-medium text-black mb-2">
        {label}
      </label>
      <div className="relative datepicker-wrapper">
        <DatePicker
          selected={selected}
          onChange={handleDateChange}
          className="w-full p-2 pr-10 text-gray-700 border rounded"
          placeholderText={placeholderText}
          dateFormat="MMMM d, yyyy"
        />
        <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </>
  );
};

export default CustomDatePicker;
