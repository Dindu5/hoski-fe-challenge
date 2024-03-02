import React from "react";
// Icons

import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import FaqItem from "../FaqItem";

const faqItem = ({}) => {};

const Faq = () => {
  const faqArray = [
    {
      question: "Will my name change instantly after using this service?",
      answers: [
        "No! The processing time for a name change request varies depending on the specific company and occasionally the season; for example, passport updates might take longer in the summer months. It's important to note that you can initiate the change request only after obtaining your marriage certificate, decree absolute, or deed poll.",
        "To facilitate the process and allow for multiple name change requests to be submitted simultaneously, it is advisable to have 3-4 authentic copies of your legal document on hand",
      ],
      isOpen: true,
    },
    {
      question: "Can I change my name and address at the same time?",
      answers: [
        "No! The processing time for a name change request varies depending on the specific company and occasionally the season; for example, passport updates might take longer in the summer months. It's important to note that you can initiate the change request only after obtaining your marriage certificate, decree absolute, or deed poll.",
        "To facilitate the process and allow for multiple name change requests to be submitted simultaneously, it is advisable to have 3-4 authentic copies of your legal document on hand",
      ],
      isOpen: false,
    },
    {
      question: "What are the legal requirements for a name change?",
      answers: [
        "No! The processing time for a name change request varies depending on the specific company and occasionally the season; for example, passport updates might take longer in the summer months. It's important to note that you can initiate the change request only after obtaining your marriage certificate, decree absolute, or deed poll.",
        "To facilitate the process and allow for multiple name change requests to be submitted simultaneously, it is advisable to have 3-4 authentic copies of your legal document on hand",
      ],
      isOpen: false,
    },
    {
      question: "Can same sex couples use this service?",
      answers: [
        "No! The processing time for a name change request varies depending on the specific company and occasionally the season; for example, passport updates might take longer in the summer months. It's important to note that you can initiate the change request only after obtaining your marriage certificate, decree absolute, or deed poll.",
        "To facilitate the process and allow for multiple name change requests to be submitted simultaneously, it is advisable to have 3-4 authentic copies of your legal document on hand",
      ],
      isOpen: false,
    },
    {
      question: "How long will you store my personal details on your system?",
      answers: [
        "No! The processing time for a name change request varies depending on the specific company and occasionally the season; for example, passport updates might take longer in the summer months. It's important to note that you can initiate the change request only after obtaining your marriage certificate, decree absolute, or deed poll.",
        "To facilitate the process and allow for multiple name change requests to be submitted simultaneously, it is advisable to have 3-4 authentic copies of your legal document on hand",
      ],
      isOpen: false,
    },
  ];
  return (
    <section className="p-[2.5rem] sm:p-4 pt-[5.6rem] mt-[4rem] sm:mt-[10rem] pb-[6rem] sm:pb-[13rem]">
      <div className="max-w-[113.2rem] mx-auto">
        <h2 className="text-[3.8rem] sm:text-[4.8rem] text-center mb-[6.4rem]">
          Ask away. <br />
          <span className="text-primaryColor font-bold ">We have answers!</span>
        </h2>
        <div className="flex flex-col gap-[6.4rem]">
          {faqArray.map((item, i) => {
            return <FaqItem {...item} key={i} />;
          })}
        </div>
        <div className="flex items-center justify-between flex-col sm:flex-row gap-[2.5rem] sm:gap-0 mt-[8rem]">
          <h6 className="text-[3.6rem] leading-[4.388rem] max-w-[53.8rem] text-center sm:text-left">
            Do you have more quetions? A specialist is here to help
          </h6>
          <button className="bg-primaryColor py-[2.4rem] px-[12.7rem] rounded-[7rem] text-white font-semibold font-inter text-[1.8rem] uppercase">
            contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
