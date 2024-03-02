import React, { useState } from "react";
// Icons

import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";

const FaqItem = ({ question, answers, isOpen }) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className="w-full relative border-b-[0.1rem] border-black pb-[6.4rem]">
      <div
        className="flex items-start sm:items-center w-full justify-betweem pointer cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <p className="text-[2.8rem] leading-[3.413rem]">{question}</p>
        <img
          src={open ? minus : plus}
          alt="Icon"
          className="ml-[2rem] sm:ml-auto h-[3.2rem] w-[3.2rem]"
        />
      </div>
      <div
        className={`${
          open ? "pt-[2.4rem]" : "pt-0"
        } transition-all duration-[0.3s]`}
      >
        <div
          className={`${
            open ? "h-[18rem]" : "h-0"
          } overflow-hidden transition-all duration-[0.3s]`}
        >
          {answers.map((answer, i) => {
            return (
              <div key={i}>
                <p
                  className={`text-[2rem] sm:text-[1.8rem] leading-[3.5rem] sm:leading-[2.88rem] ${
                    i + 1 !== answers.length ? "mb-[2.5rem]" : ""
                  }`}
                >
                  {answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
