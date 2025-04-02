import React from "react";

import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Dribble from "../assets/dribbble.svg";
import Instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary w-full mt-28">
      <div className="ml-4 sm:ml-4 md:ml-7 lg:ml-12 xl:ml-20 pt-10 pb-16">
        <h3 className="font-bold text-2xl text-primary selection:bg-orange-400 selection:text-white">
          Get in touch!
        </h3>
        <p className="text-base text-white font-normal mt-5 mb-7 selection:bg-orange-400 selection:text-white">
          <span className="text-[#CCCCCC]">
            For business inquiries please email to:
          </span>{" "}
          <a
            className="no-underline transition hover:underline decoration-primary"
            href="mailto:rizkihaddiprayoga@gmail.com"
            target="_blank"
          >
            rizkihaddiprayoga@gmail.com
          </a>
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/rizkihaddiprayoga/"
            target="_blank"
          >
            <img
              className="w-6 transition hover:scale-125"
              src={LinkedIn}
              alt="Icon LinkedIn"
            />
          </a>
          <a href="https://github.com/RizuMong" target="_blank">
            <img
              className="w-6 transition hover:scale-125"
              src={Github}
              alt="Icon Github"
            />
          </a>
          <a href="https://dribbble.com/RizkiHaddi" target="_blank">
            <img
              className="w-6 transition hover:scale-125"
              src={Dribble}
              alt="Icon Dribbble"
            />
          </a>
          <a href="https://www.instagram.com/rizu.design/" target="_blank">
            <img
              className="w-6 transition hover:scale-125"
              src={Instagram}
              alt="Icon Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
