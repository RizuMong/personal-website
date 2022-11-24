import React from "react";

import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Dribble from "../assets/dribbble.svg";
import Instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="ml-4 sm:ml-4 md:ml-7 lg:ml-12 xl:ml-20 pt-10 pb-16">
        <h3 className="font-bold text-2xl text-primary">Get in touch!</h3>
        <p className="text-base text-white font-normal mt-5 mb-7">
          <span className="text-[#CCCCCC]">
            For business inquiries please email to:
          </span>{" "}
          rizkihaddiprayoga@gmail.com
        </p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/rizkihaddiprayoga/" target="_blank">
            <img className="w-6" src={LinkedIn} alt="Icon LinkedIn" />
          </a>
          <a href="https://github.com/RizuMong" target="_blank">
            <img className="w-6" src={Github} alt="Icon Github" />
          </a>
          <a href="https://dribbble.com/RizkiHaddi" target="_blank">
            <img className="w-6" src={Dribble} alt="Icon Dribble" />
          </a>
          <a href="https://www.instagram.com/rizu.design/" target="_blank">
            <img className="w-6" src={Instagram} alt="Icon Dribble" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
