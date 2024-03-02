import React, { useState } from "react";
import { benefitsOutline } from "../../services/constants";
import sectionImg from "../../assets/illustrations/what-you-get.svg";
// Icons

const Benefits = () => {
  const [activeBenefit, setActiveBenefit] = useState("completion");

  return (
    <section className="p-[2.5rem] sm:p-4 pt-[5.6rem] mt-[6rem] sm:mt-[17rem]">
      <div className="max-w-[133.2rem] mx-auto border-b-[0.15rem] border-[#10172733] pb-[7rem] sm:pb-[17rem]">
        <h2 className="text-[3.8rem] sm:text-[4.8rem] sm:text-center mb-[4.4rem] sm:mb-[6.4rem]">
          <span className="text-primaryColor font-bold ">With us</span>, you
          get:
        </h2>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col gap-[4.6rem] sm:gap-[9.6rem]">
            {benefitsOutline.map((benefit, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center gap-[1.7rem] sm:gap-[3.2rem] relative cursor-pointer"
                  onClick={() => setActiveBenefit(benefit.alt)}
                >
                  <div className="p-[1rem] border-[0.1rem] rounded-full border-[#10172733] bg-transparent">
                    <div
                      className={`rounded-full h-[7.2rem] w-[7.2rem] flex items-center justify-center transition-all ${
                        activeBenefit === benefit.alt
                          ? "bg-primaryColor"
                          : "bg-[#1017270D]"
                      }`}
                    >
                      <img
                        src={
                          activeBenefit === benefit.alt
                            ? benefit.iconActive
                            : benefit.icon
                        }
                        alt={benefit.alt}
                        className="w-[2.8rem] h-auto"
                      />
                    </div>
                  </div>
                  <p
                    className={`text-[2rem] sm:text-[2.8rem] leading-[3.413rem] max-w-[52.3rem] ${
                      activeBenefit === benefit.alt
                        ? "font-semibold"
                        : "font-normal"
                    } transition-all`}
                  >
                    {benefit.text}
                  </p>
                  {i !== 2 && (
                    <div className="absolute h-[0.15rem] w-[16rem] bg-text-dark bottom-0 translate-y-[2.5rem] sm:translate-y-[5rem] left-[11rem]"></div>
                  )}
                </div>
              );
            })}
          </div>
          <img
            src={sectionImg}
            data-aos="fade-up"
            data-aos-duration="800"
            alt="With us"
            className="max-w-[46.5rem] w-full h-[48.239rem] mx-auto mt-[6rem] sm:mx-0 sm:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
