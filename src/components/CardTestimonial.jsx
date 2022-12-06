import React from "react";

import icon_testi from "../assets/icon_testimonial.svg";

const CardTestimonial = ({ src, name, position, content }) => {
  return (
    <div className="bg-[#222B44] rounded-xl w-80 mb-10 md:mb-0">
      <div className="p-8">
        <img className="w-9 h-7 mb-6" src={icon_testi} alt="Icon Testimonial" />
        <p className="font-normal text-base text-white mb-9">"{content}"</p>
        <div className="flex items-center gap-3">
          <img className="w-12 h-12" src={src} alt="Image Profile" />
          <div>
            <h5 className="font-bold text-sm text-white mb-1">{name}</h5>
            <p className="font-normal text-sm text-[#CCCCCC]">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonial;
