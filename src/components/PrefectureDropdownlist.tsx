import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface PrefectureDropdownlistProps {
  label: string;
  onChange: (value: string) => void;
}

const PrefectureDropdownlist: React.FC<PrefectureDropdownlistProps> = ({ label, onChange }) => {
  const [selectedPrefecture, setSelectedPrefecture] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const prefectures = [
    'Gunma', 'Tokyo', 'Osaka', 'Kyoto', 'Hokkaido', 'Fukuoka'
    // Add more prefectures as needed
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-black" ref={dropdownRef}>
      <label className="block text-lg font-medium mb-2">{label}</label>
      <div
        className="border border-gray-100 rounded-md p-2 flex items-center justify-between cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center">
          <span className="mr-2">🇯🇵</span>
          {selectedPrefecture || 'Select a prefecture'}
        </span>
        <FaChevronDown />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-100 mt-1 rounded-md shadow-lg max-h-60 overflow-auto text-black">
          {prefectures.map((prefecture) => (
            <li
              key={prefecture}
              className="bg-white p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedPrefecture(prefecture);
                setIsOpen(false);
                onChange(prefecture);
              }}
            >
              {prefecture}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PrefectureDropdownlist;
