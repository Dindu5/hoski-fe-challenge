import React from "react";
import mainLogo from "../../assets/main-logo-light.png";

const Footer = () => {
  return (
    <footer className="px-[2.5rem] sm:px-4 pt-[6.3rem] mt-[4rem] sm:mt-[10rem] pb-[10rem] bg-secondary-dark">
      <div className="max-w-[86.9rem] mx-auto">
        <img
          src={mainLogo}
          alt="Logo"
          className="w-[13rem] h-[6.5rem] mb-[3rem] mx-auto object-cover"
        />
        <p className="text-center font-rubik text-[1.6rem] leading-[3.5rem] text-white">
          GovAssist is not affiliated with any United States government agency
          or department. Costs for consulting services do NOT include any
          government application, medical examination, filing, or biometric
          fees. This website does not provide legal advice and we are not a law
          firm. None of our customer service representatives are lawyers and
          they also do not provide legal advice. We are a private,
          internet-based travel and immigration consultancy provider dedicated
          to helping individuals travel to the United States. You may apply by
          yourself directly at travel.state.gov or at uscis.gov. GovAssist is
          affiliated with the UT law firm GovAssist Legal which provides legal
          services on immigration matters. Only licensed immigration
          professionals can provide advice, explanation, opinion, or
          recommendation about possible legal rights, remedies, defenses,
          options, selection of forms or strategies.
        </p>
        <p className="text-center font-rubik text-[1.6rem] leading-[3.5rem] text-white">
          Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
