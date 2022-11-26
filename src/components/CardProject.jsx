import React from "react";

import ImgCard from "../assets/card_img_1.png";
import CardIcon from "../assets/card_icon.svg";

const CardProject = () => {
  return (
    <div className="mb-10 md:mb-0 lg:mb-0 xl:mb-0">
      <img
        className="w-80 h-60 md:h-[160px] lg:h-[204px] lg:w-72 xl:w-80 xl:h-60"
        src={ImgCard}
        alt="Card Image"
      />
      <div className="flex justify-between items-center">
        <div>
          <h5 className="font-bold text-xl text-secondary mt-4 mb-2">
            GunTour
          </h5>
          <p className="font-medium text-sm text-[#999999]">
            Ticket Booking Website
          </p>
        </div>
        <a href="https://github.com/RizuMong/guntour" target="_blank">
          <img className="mt-4 hover:scale-110" src={CardIcon} alt="Card Icon" />
        </a>
      </div>
    </div>
  );
};

export default CardProject;