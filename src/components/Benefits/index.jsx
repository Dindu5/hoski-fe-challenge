import React from "react";
import sectionImg from "../../assets/illustrations/what-you-get.svg";
// Icons
import firstIcon from "../../assets/icons/file-tick.svg";
import firstIconActive from "../../assets/icons/file-tick-active.svg";
import secondIcon from "../../assets/icons/todo-listing.svg";
import secondIconActive from "../../assets/icons/todo-listing-active.svg";
import thirdIcon from "../../assets/icons/circle-checkmark.svg";
import thirdIconActive from "../../assets/icons/circle-checkmark-active.svg";

const Benefits = () => {
  const benefitsOutline = [
    {
      text: "Completion of all required documents specific to your state.",
      icon: firstIcon,
      iconActive: firstIconActive,
      alt: "completion",
    },
    {
      text: "Easy to follow instructions on filing your documents.",
      icon: secondIcon,
      iconActive: secondIconActive,
      alt: "documents",
    },
    {
      text: "Our guarantee and lifetime customer support.",
      icon: thirdIcon,
      iconActive: thirdIconActive,
      alt: "guarantee",
    },
  ];

  return (
    <section className="p-4 pt-[5.6rem] mt-[17rem]">
      <div className="max-w-[133.2rem] mx-auto border-b-[0.15rem] border-[#10172733] pb-[17rem]">
        <h2 className="text-[4.8rem] text-center mb-[6.4rem]">
          <span className="text-primaryColor font-bold ">With us</span>, you
          get:
        </h2>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col gap-[9.6rem]">
            {benefitsOutline.map((benefit, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center gap-[3.2rem] relative"
                >
                  <div className="p-[1rem] border-[0.1rem] rounded-full border-[#10172733] bg-transparent">
                    <div className="rounded-full h-[7.2rem] w-[7.2rem] bg-primaryColor flex items-center justify-center">
                      <img
                        src={benefit.iconActive}
                        alt={benefit.alt}
                        className="w-[2.8rem] h-auto"
                      />
                    </div>
                  </div>
                  <p className="text-[2.8rem] leading-[3.413rem] max-w-[52.3rem]">
                    {benefit.text}
                  </p>
                  {i !== 2 && (
                    <div className="absolute h-[0.15rem] w-[16rem] bg-text-dark bottom-0 translate-y-[5rem] left-[11rem]"></div>
                  )}
                </div>
              );
            })}
          </div>
          <img
            src={sectionImg}
            alt="With us"
            className="max-w-[46.5rem] w-full h-[48.239rem] mx-auto mt-[6rem] sm:mx-0 sm:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
