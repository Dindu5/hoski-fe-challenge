import React, { useState } from "react";
import heroImgOne from "../../assets/illustrations/hero-img-1.svg";
import heroImgTwo from "../../assets/illustrations/hero-img-2.svg";
import trustPilotLogo from "../../assets/trustpilot-logo.svg";
import ratingImg from "../../assets/rating.svg";

import Dropdown from "../Dropdown";
import { dropdownOptions, attributes } from "../../services/constants";

function Hero() {
  const [selectedLanguageOption, setSelectedLanguageOption] =
    useState("english");

  const handleDropdownChange = (selectedItem) => {
    setSelectedLanguageOption(selectedItem);
  };

  return (
    <header className="bg-buttonBlue p-[2.5rem] sm:px-4 pt-[3rem] pt-[3.6rem]">
      <div className="max-w-[133.2rem] mx-auto">
        <nav className="flex justify-end">
          <Dropdown
            items={dropdownOptions}
            onChange={handleDropdownChange}
            defaultValue={selectedLanguageOption}
            color="transparent"
          />
        </nav>

        <h3 className="text-center text-[2.5rem] sm:text-[3.6rem] mt-[4rem] sm:mt-[0rem] mb-[2.6rem] max-w-[35rem] max-w-full mx-auto">
          Designed for International users
        </h3>
        <h1 className="text-center text-[6.4rem] max-w-[55rem] mx-auto leading-[7.802rem] mb-[2.7rem]">
          Get your name{" "}
          <span className="text-primaryColor font-bold">changed fast</span> ⚡️
        </h1>
        <div className="flex items-center justify-between max-w-[56.6rem] mx-auto gap-[1.5rem] mb-[0.9rem]">
          <div className="max-w-[17.6rem] w-full h-[0.1rem] bg-text-dark"></div>
          <h5 className="text-[2.5rem] sm:text-[3.6rem] leading-[4.388rem]">
            Only $75
          </h5>
          <div className="max-w-[17.6rem] w-full h-[0.1rem] bg-text-dark"></div>
        </div>
        <div className="flex items-center flex-col sm:flex-row justify-center w-full relative">
          <img
            src={heroImgOne}
            data-aos="zoom-in-up"
            alt="Name Change Illustration One"
            className="absolute hidden sm:block left-0 w-[40.763rem] h-[36.623rem] object-contain"
          />
          <div>
            <button className="uppercase bg-gradient-to-r from-[#00579B] text-white to-[#45A1F6] text-[1.8rem] mb-[5.6rem] py-[2.4rem] bg-button-blue mx-auto block mt-[4.5rem] px-[5.6rem] rounded-[7rem] leading-[2.178rem] font-semibold">
              start your name change!
            </button>
            <p className="text-[2.5rem] sm:text-[3.2rem] leading-[4.5rem] leading-[3.901rem] text-center mx-auto max-w-[41.8rem] leading-[3.901rem]">
              We have notaries that can legally notarize your document from{" "}
              <span className="text-blue font-bold">
                {" "}
                anywhere in the world!
              </span>
            </p>
          </div>
          <img
            src={heroImgTwo}
            data-aos="zoom-in-up"
            alt="Name Change Illustration Two"
            className="absolute hidden sm:block right-0 w-[34.686rem] h-[37.2rem] object-contain"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-[4rem] sm:items-center justify-between bg-lightGray rounded-[3rem] sm:rounded-[11.9rem] mt-[5rem] sm:mt-[10rem] px-[3rem] sm:px-[9.8rem] py-[4.8rem]">
          <div className="flex items-center justify-between flex-row gap-[4.6rem] w-full sm:w-auto">
            <img
              src={trustPilotLogo}
              alt="Trustpilot"
              className="h-auto w-[19.1rem] -mt-[1rem] sm:mt-0"
            />
            <div className="ml-auto">
              <img
                src={ratingImg}
                alt="Rating"
                className="w-[12.763rem] mb-[1.7rem]"
              />
              <p className="text-[1.6rem] font-semibold text-[#000000] font-inter">
                Excellent 4.7/5
              </p>
            </div>
          </div>
          {attributes.map((attribute, i) => {
            return (
              <div key={i} className="flex items-center gap-[2.1rem]">
                <img
                  src={attribute.icon}
                  alt={attribute.subText}
                  className="h-[6.4rem] w-[6.4rem]"
                />
                <div>
                  <h4 className="text-[4rem] text-primaryColor font-bold font-inter leading-[4.841rem]">
                    {attribute.value}
                  </h4>
                  <p className="font-inter text-[2rem] font-semibold leading-[2.42rem]">
                    {attribute.subText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Hero;
