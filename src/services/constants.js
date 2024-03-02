import firstIcon from "../assets/icons/file-tick.svg";
import firstIconActive from "../assets/icons/file-tick-active.svg";
import secondIcon from "../assets/icons/todo-listing.svg";
import secondIconActive from "../assets/icons/todo-listing-active.svg";
import thirdIcon from "../assets/icons/circle-checkmark.svg";
import thirdIconActive from "../assets/icons/circle-checkmark-active.svg";

// flags
import usFlag from "../assets/flags/us-flag.svg";
import franceFlag from "../assets/flags/france-flag.svg";
import portugalFlag from "../assets/flags/portugal-flag.svg";
import germanyFlag from "../assets/flags/germany-flag.svg";

import alarmIcon from "../assets/icons/alarm-clock.svg";
import fileIcon from "../assets/icons/file-completed.svg";

// Work illustrations
import workOne from "../assets/illustrations/works-1.svg";
import workTwo from "../assets/illustrations/works-2.svg";
import workThree from "../assets/illustrations/works-3.svg";

export const benefitsOutline = [
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

export const faqArray = [
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

export const dropdownOptions = [
  {
    img: usFlag,
    text: "English",
    value: "english",
  },
  {
    img: franceFlag,
    text: "Françias",
    value: "french",
  },
  {
    img: portugalFlag,
    text: "Português",
    value: "portuguese",
  },
  {
    img: germanyFlag,
    text: "Deutsch",
    value: "german",
  },
];

export const attributes = [
  {
    value: "99%",
    subText: "on time delivery",
    icon: alarmIcon,
  },
  {
    value: "5+",
    subText: "years of experience",
    icon: fileIcon,
  },
];

export const steps = [
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
