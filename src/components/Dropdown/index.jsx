import React, { useState, useRef, useEffect } from "react";
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
  closeOnOutsideClick = true, // For additional customization in case we want a dropdown to be closed by just its trigger and the dropdown options
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
    setOpen(false);
    setSelectedItem(item.value);
    onChange(item.value);
  };

  const selectedItemDetails = items.find((item) => item.value === selectedItem);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        event.target !== menuRef.current &&
        event.target !== dropdownTriggerRef.current
      ) {
        setOpen(false);
      }
    };
    if (closeOnOutsideClick) {
      window.addEventListener("click", handleClick);
    }
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="relative w-auto z-10">
      <button
        onClick={handleOpen}
        className={`flex items-center text-[1.8rem] justify-between font-bold font-inter py-[0.5rem] px-[1rem] rounded-[0.5rem]`}
        style={{
          background: color || "#ffffff",
          width: width || "auto",
          color: textColor || "#101727",
          ...customStyle,
        }}
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
          className="p-[1.5rem] w-full z-50 bg-white rounded-[0.8rem] shadow-2xl w-auto absolute top-0 translate-y-[4rem]"
          ref={menuRef}
        >
          {items.map((item, i) => {
            return (
              <div
                key={i}
                className={`flex items-center py-[1.4rem] px-[0.8rem] pr-[1.2rem] hover:bg-lightGray rounded-[0.4rem] z-10 cursor-pointer text-[1.6rem] ${
                  item.value === selectedItem ? "bg-lightGray" : ""
                }`}
                style={{
                  ...customOptionStyle,
                }}
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
              </div>
            );
          })}
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
  closeOnOutsideClick: PropTypes.bool,
};

export default Dropdown;
