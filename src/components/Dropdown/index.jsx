import React, { useState, useRef, useMemo } from "react";
import DropdownIcon from "../../assets/icons/dropdown-arrow.svg";
import PropTypes from "prop-types";

const Dropdown = ({
  items,
  color,
  textColor,
  width,
  customOptionStyle,
  customStyle,
  defaultValue,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultValue || "");
  const dropdownTriggerRef = useRef();
  const menuRef = useRef();

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const handleSelectionChange = (item) => {
    setSelectedItem(item.value);
    onChange(item.value);
  };

  const selectedItemDetails = items.find((item) => item.value === selectedItem);

  window.addEventListener("click", (e) => {
    if (
      e.target !== menuRef.current &&
      e.target !== dropdownTriggerRef.current
    ) {
      setOpen(false);
    }
  });

  return (
    <div className="relative w-auto">
      <button
        onClick={handleOpen}
        className={`flex items-center text-[1.8rem] justify-between font-bold font-inter py-[0.5rem] px-[1rem] rounded-[0.5rem] bg-${
          color || "transparent"
        } w-[${width || "auto"}] text-${textColor || "text-color"} ${
          customStyle || ""
        }`}
        ref={dropdownTriggerRef}
      >
        <div className="flex items-center">
          {selectedItemDetails.img && (
            <img
              src={selectedItemDetails.img}
              alt={selectedItemDetails.text}
              className="mr-[1rem] w-[2.8rem] h-[2.8rem] object-contain"
            />
          )}
          {selectedItemDetails.text}
        </div>
        {/* To accomodate for different background colors, I am encasing the dropdown icon in a div with a white background since I am not extending the textColor prop to the icon */}
        <div className="h-[2rem] w-[2rem] flex items-center justify-center bg-white ml-[1.6rem] rounded-full">
          <img
            src={DropdownIcon}
            alt="Dropdown Icon"
            className={`w-[1.2rem] h-[1.2rem] block object-contain  ${
              open ? "rotate-180" : "rotate-0"
            } transition-all`}
          />
        </div>
      </button>
      {open && (
        <div
          className="p-[1.5rem] z-50 rounded-[0.8rem] shadow-2xl w-auto absolute top-0 translate-y-[4rem]"
          ref={menuRef}
        >
          <ul>
            {items.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`flex items-center py-[1.4rem] px-[0.8rem] pr-[1.2rem] hover:bg-lightGray rounded-[0.4rem] cursor-pointer text-[1.6rem] ${
                    item.value === selectedItem ? "bg-lightGray" : ""
                  } ${customOptionStyle || ""}`}
                  onClick={() => handleSelectionChange(item)}
                >
                  {" "}
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.text}
                      className="w-[2.8rem] h-auto mr-[1.2rem]"
                    />
                  )}{" "}
                  <p>{item.text}</p>{" "}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  customStyle: PropTypes.string,
  customOptionStyle: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Dropdown;