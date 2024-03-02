import React from "react";

const Cta = () => {
  return (
    <section className="p-[2.5rem] sm:p-4 pt-[5.6rem] mt-[4rem] sm:mt-[10rem] pb-[13rem]">
      <div className="max-w-[133.2rem] mx-auto">
        <div className="border-[0.1rem] border-black p-[4rem] sm:py-[8.1rem] sm:px-[15.6rem] gap-[4.8rem] sm:gap-[7.8rem] rounded-[3rem] sm:rounded-[20rem] flex flex-col sm:flex-row items-center justify-between w-full">
          <h4 className="max-w-[55.3rem] text-[3.8rem] sm:text-[4.8rem] leading-[5.851rem]">
            Get your name change starting at $75*
          </h4>
          <button className="uppercase bg-gradient-to-r from-[#00579B] text-white to-[#45A1F6] text-[1.8rem] py-[2.4rem] bg-button-blue block px-[5.6rem] rounded-[7rem] leading-[2.178rem] font-inter font-semibold">
            start your name change!
          </button>
        </div>
        <p className="text-[1.8rem] leading-[2.194rem] mt-[4.8rem] text-center">
          *Price excludes court fees to be paid when you file your name change
          documents
        </p>
      </div>
    </section>
  );
};

export default Cta;
