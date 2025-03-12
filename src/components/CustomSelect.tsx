import React, { useState, useRef, useEffect } from "react";
import "./CustomSelect.scss";

export interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-select" ref={selectRef}>
      <div
      className="select-box"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
        >
        {value
          ? options.find((opt) => opt.value === value)?.label
          : placeholder}
          <svg className={`arrow ${isOpen ? "open" : ""}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.932 6.81567H5.06536C4.26536 6.81567 3.86536 7.78234 4.43203 8.34901L8.74869 12.6657C9.44036 13.3573 10.5654 13.3573 11.257 12.6657L12.8987 11.024L15.5737 8.34901C16.132 7.78234 15.732 6.81567 14.932 6.81567Z" />
          </svg>
      </div>
      {isOpen && (
        <div className="select-dropdown">
          {options.map((option) => (
            <div
              key={option.value}
              className="select-option"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
