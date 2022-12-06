import React from "react";
import { WithRouter } from "../utils/Navigation";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CardProject from "../components/CardProject";

import { motion, useScroll, useSpring } from "framer-motion";

import { data } from "../assets/data/project";

import icon_service from "../assets/icon_service.svg";
import icon_fe from "../assets/icon_frontend.svg";
import icon_ui from "../assets/icon_ui.svg";
import icon_more from "../assets/icon_smile.svg";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="h-1 bg-primary origin-[0%] top-[64px] left-0 right-0 fixed"
        style={{ scaleX }}
      />

      <Layout>
        <Hero />
        <header
          id="project"
          className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-secondary text-center mt-28 mb-14 hover:animate-pulse"
        >
          Let’s take a look at <br />{" "}
          <span className="underline decoration-4 underline-offset-8 decoration-primary">
            my project.
          </span>
        </header>
        <div className="px-4 md:px-6 lg:px-20 grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:gap-6 lg:gap-9 justify-items-center xl:justify-center">
          {data.map((project) => (
            <CardProject
              key={project.id}
              src={project.img}
              title={project.title}
              detail={project.detail}
              link={project.link_project}
            />
          ))}
        </div>
        <button className="bg-primary border border-primary text-white text-base font-medium py-2 px-6 rounded-xl mx-auto block mt-5 transition md:mt-12 lg:mt-14 xl:mt-14 hover:scale-110">
          All Projects
        </button>

        <header
          id="services"
          className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-secondary text-center mt-32 mb-20 hover:animate-pulse"
        >
          Solving problem <br />{" "}
          <span className="underline decoration-4 underline-offset-8 decoration-primary">
            through the services
          </span>
        </header>
        <div className="mx-auto min-[375px]:px-7 min-[425px]:px-[53px] sm:px-12 sm:flex sm:flex-wrap sm:gap-8 sm:justify-evenly">
          <div className="bg-[url('../assets/img/service_1.png')] overflow-hidden mb-10 sm:mb-0 rounded-2xl bg-cover w-80 h-72">
            <div className="pl-9 pt-14">
              <img src={icon_fe} alt="Icon Frontend" />
              <h5 className="text-white font-bold text-2xl mt-4 underline decoration-2 underline-offset-2 decoration-primary">
                Frontend Developer
              </h5>
              <div className="flex gap-[10px] mt-6">
                <img src={icon_service} alt="Icon Service" />
                <p className="text-white font-semibold text-sm">
                  React & Next JS
                </p>
              </div>
              <div className="flex gap-[10px] mt-3">
                <img src={icon_service} alt="Icon Service" />
                <p className="text-white font-semibold text-sm">
                  Bootstrap & Tailwind CSS
                </p>
              </div>
              <div className="flex gap-[10px] mt-3">
                <img src={icon_service} alt="Icon Service" />
                <p className="text-white font-semibold text-sm">And More</p>
              </div>
            </div>
          </div>
          <div className="bg-[url('../assets/img/service_2.png')] overflow-hidden mb-10 sm:mb-0 rounded-2xl bg-cover w-80 h-72">
            <div className="pl-9 pt-14">
              <img src={icon_ui} alt="Icon Frontend" />
              <h5 className="text-white font-bold text-2xl mt-4 underline decoration-2 underline-offset-2 decoration-primary">
                UI Designerr
              </h5>
              <div className="flex gap-[10px] mt-6">
                <img src={icon_service} alt="Icon Service" />
                <p className="text-white font-semibold text-sm">Figma</p>
              </div>
              <div className="flex gap-[10px] mt-3">
                <img src={icon_service} alt="Icon Service" />
                <p className="text-white font-semibold text-sm">
                  Miro & Whimsical
                </p>
              </div>
              <div className="flex gap-[10px] mt-3">
                <img src={icon_service} alt="Icon Service" />
                <p className="text-white font-semibold text-sm">And More</p>
              </div>
            </div>
          </div>
          <div className="bg-[url('../assets/img/service_3.png')] overflow-hidden mb-10 sm:mb-0 rounded-2xl bg-cover w-80 h-72">
            <div className="pl-9 pt-14">
              <img src={icon_more} alt="Icon Frontend" />
              <h5 className="text-white font-bold text-2xl mt-4 underline decoration-2 underline-offset-2 decoration-primary">
                Others
              </h5>
              <div className="flex gap-[10px] mt-6">
                <img src={icon_service} alt="Icon Service" />
                <p className="text-white font-semibold text-sm">Algorithms</p>
              </div>
              <div className="flex gap-[10px] mt-3">
                <img src={icon_service} alt="Icon Service" />
                <p className="text-white font-semibold text-sm">
                  Problem Solving
                </p>
              </div>
              <div className="flex gap-[10px] mt-3">
                <img src={icon_service} alt="Icon Service" />
                <p className="text-white font-semibold text-sm">And More</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WithRouter(Index);
