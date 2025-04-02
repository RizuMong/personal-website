import React from "react";

// import imgHero from "../assets/img/img_hero.png";
import imgHeroNew from "../assets/img/profile.jpg";

const Hero = () => {
  return (
    <section className="container mx-auto px-1 md:px-0 grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-7 mt-10 md:mt-14 lg:mt-32 xl:mt-32 place-items-center items-center">
      <img
        className="w-[300px] mb-10 md:hidden lg:hidden xl:hidden"
        src={imgHeroNew}
        alt="Image Hero"
      />
      <div className="xl:col-span-4 ml-4 md:ml-8 lg:ml-24 xl:ml-36">
        <h2 className="font-bold text-secondary text-2xl md:text-2xl lg:text-[28px] xl:text-4xl selection:bg-orange-400">
          Hi! I’m Rizki Haddi Prayoga. <br /> a{" "}
          <span className="underline decoration-4 underline-offset-4 decoration-primary">
            Designer & Developer.
          </span>
        </h2>
        <p className="font-medium text-sm md:text-xs lg:text-sm xl:text-lg text-[#666666] mt-7 mb-12 selection:bg-orange-400 selection:text-white">
           I specialize in Webflow development and love bringing UI ideas to life with a creative touch.
        </p>
        <div className="flex">
          <a href="mailto:rizkihaddiprayoga@gmail.com">
            <button className="bg-primary border border-primary text-white text-base font-medium py-2 px-6 rounded-xl transition hover:scale-110">
              Hire Me
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1d0WIuQ0LVFGvAK6oHBJnBHtzSg_Q2L3Q/view?usp=sharing"
            target="_blank"
            download
          >
            <button className="text-primary font-medium underline ml-6 py-2 transition hover:scale-105">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <img
        className="xl:col-span-3 md:w-64 lg:w-72 xl:w-80 hidden md:flex lg:flex xl:flex hover:animate-pulse rounded-full sm:rounded-full"
        src={imgHeroNew}
        alt="Image Hero"
      />
    </section>
  );
};

export default Hero;