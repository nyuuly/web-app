import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaFlag } from 'react-icons/fa';

interface NationDropdownlistProps {
  label: string;
  onChange: (value: string) => void;
  value: string;
}

const NationDropdownlist: React.FC<NationDropdownlistProps> = ({ label, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const nations = [
    { name: 'Vietnam', value: 'vi', flag: '🇻🇳' },
    { name: 'Malaysia', value: 'my', flag: '🇲🇾' },
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

  const handleNationChange = (newValue: string) => {
    onChange(newValue);
    console.log("Selected nation value:", newValue);
    setIsOpen(false);
  };

  const selectedNation = nations.find(n => n.value === value);

  return (
    <div className="relative text-black" ref={dropdownRef}>
      <label className="block text-lg font-medium mb-2">{label}</label>
      <div
        className="border border-gray-100 rounded-md p-2 flex items-center justify-between cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center">
          {selectedNation ? (
            <>
              <span className="mr-2">{selectedNation.flag}</span>
              {selectedNation.name}
            </>
          ) : (
            <>
              <FaFlag className="mr-2" />
              Select a nation
            </>
          )}
        </span>
        <FaChevronDown />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-100 mt-1 rounded-md shadow-lg text-black">
          {nations.map((nation) => (
            <li
              key={nation.value}
              className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => handleNationChange(nation.value)}
            >
              <span className="mr-2">{nation.flag}</span>
              {nation.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NationDropdownlist;
