import React from "react";
// Icons
import workOne from "../../assets/illustrations/works-1.svg";
import workTwo from "../../assets/illustrations/works-2.svg";
import workThree from "../../assets/illustrations/works-3.svg";

const Works = () => {
  const steps = [
    {
      title: "Fill out our brief online questionnaire",
      description:
        "Filling out a name change questionnaire is a straightforward process that typically involves a few simple steps. These questionnaires are designed to gather essential information needed for the legal process of changing your name.",
      img: workOne,
    },
    {
      title: "We create the documents for your name change",
      description:
        "Within our efficient system, our document scriveners take on the crucial task of carefully examining your responses. Their role is to review the information you provide, meticulously checking for any potential gaps or missing details.",
      img: workTwo,
    },
    {
      title: "Receive a summary of your name change request",
      description:
        "Receive a comprehensive summary as the final step in processing your name change order. Providing clarity and assurance, this summary ensures that you have a clear understanding of the information submitted and the subsequent steps in the process.",
      img: workThree,
    },
  ];
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
                  alt=""
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
