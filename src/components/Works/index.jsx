import React from "react";
import { steps } from "../../services/constants";

const Works = () => {
  return (
    <section className="p-[2.5rem] sm:p-4 pt-[5.6rem] mt-[4rem] sm:mt-[10rem] pb-[7rem]">
      <div className="max-w-[133.2rem] mx-auto">
        <h2 className="text-[3.8rem] sm:text-[4.8rem] mb-[8.1rem]">
          How
          <span className="text-primaryColor font-bold "> it works</span>
        </h2>
        <div className="flex flex-col gap-[5rem] sm:gap-[15.4rem]">
          {steps.map((step, i) => {
            return (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center w-full relative"
              >
                <img
                  src={step.img}
                  alt="Illustration"
                  data-aos="fade-up"
                  className="sm:absolute w-[32.7rem] h-[23.281rem] object-contain mb-[7rem] sm:mb-0"
                />
                <div className="flex items-center ml-auto">
                  {i !== 2 && (
                    <div className="w-[0.15rem] bg-[#10172733] h-[48rem] sm:h-[28rem] absolute left-[7rem] sm:left-[50%] sm:bottom-0 translate-y-[-9rem] sm:translate-y-[21.5rem] translate-x-[-3.2rem]"></div>
                  )}

                  <div className="h-[8rem] min-w-[8rem] mr-[3rem] sm:mr-[13.9rem] absolute sm:relative top-0 left-0 text-primaryColor font-inter flex items-center justify-center font-bold text-[4rem] rounded-full border-[#101727] border-[0.1rem]">
                    0{i + 1}
                  </div>
                  <div className="max-w-[51.9rem] ml-[10rem] sm:ml-0">
                    <h6 className="mb-[2.4rem] text-[3.2rem] leading-[3.901rem] text-text-dark">
                      {step.title}
                    </h6>
                    <p className="text-[2rem] leading-[3.5rem] sm:text-[1.8rem] text-black sm:leading-[2.88rem]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
