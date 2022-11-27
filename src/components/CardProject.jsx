import React from "react";

import CardIcon from "../assets/card_icon.svg";

const CardProject = ({ src, title, detail, link }) => {
  return (
    <div className="mb-10 md:mb-0 lg:mb-0 xl:mb-0">
      <a href={link} target="_blank">
        <img
          className="w-80 h-60 md:h-[160px] lg:h-[204px] lg:w-72 xl:w-80 xl:h-60 transition hover:scale-95 hover:shadow-lg hover:shadow-orange-200 cursor-pointer"
          src={src}
          alt="Card Image"
        />
      </a>
      <div className="flex justify-between items-center">
        <div>
          <h5 className="font-bold text-xl text-secondary mt-4 mb-2">
            {title}
          </h5>
          <p className="font-medium text-sm text-[#999999]">{detail}</p>
        </div>
        <a href={link} target="_blank">
          <img
            className="mt-4 transition hover:scale-110"
            src={CardIcon}
            alt="Card Icon"
          />
        </a>
      </div>
    </div>
  );
};

export default CardProject;
