import React from "react";
import { WithRouter } from "../utils/Navigation";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CardProject from "../components/CardProject";
import CardTestimonial from "../components/CardTestimonial";

import { motion, useScroll, useSpring } from "framer-motion";

import { data } from "../assets/data/project";
import { testimonial } from "../assets/data/testimonial";

import icon_service from "../assets/icon_service.svg";
import icon_fe from "../assets/icon_frontend.svg";
import icon_ui from "../assets/icon_ui.svg";
import icon_more from "../assets/icon_smile.svg";
import arrow_left from "../assets/arrow_left.svg";
import arrow_right from "../assets/arrow_right.svg";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  console.log(testimonial);
  console.log(data);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Rizki Haddi Prayoga</title>
      </Helmet>

      <motion.div
        className="h-1 bg-primary origin-[0%] top-[64px] left-0 right-0 fixed"
        style={{ scaleX }}
      />

      <Layout>
        <Hero />

        {/* Section Projects */}
        <header
          id="project"
          className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-secondary text-center mt-52 mb-14 hover:animate-pulse"
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

        {/* Section Services */}
        <header
          id="service"
          className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-secondary text-center mt-48 mb-20 hover:animate-pulse"
        >
          Solving problem <br />{" "}
          <span className="underline decoration-4 underline-offset-8 decoration-primary">
            through the services
          </span>
        </header>
        <div className="mx-auto min-[350px]:px-4 min-[360px]:px-5 min-[370px]:px-6 min-[375px]:px-7 min-[390px]:px-[38px] min-[400px]:px-[50px] min-[425px]:px-[53px] sm:px-12 sm:flex sm:flex-wrap sm:gap-8 sm:justify-evenly">
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

        {/* Section Testimonial */}
        <div className="mt-48 bg-secondary py-20">
          <div className="mb-16 block md:flex items-center justify-between">
            <div>
              <header
                id="testimonial"
                className="pl-7 md:pl-32 font-bold text-2xl md:text-2xl lg:text-3xl xl:text-3xl underline decoration-4 underline-offset-8 decoration-primary text-white hover:animate-pulse"
              >
                What my clients say
              </header>
              <p className="pl-7 md:pl-32 pt-5 font-normal text-sm text-[#E6E6E6]">
                I seek to push the limits of creativity to create highly
                engaging and user-friendly
              </p>
            </div>
            <div className="flex gap-6 pr-32 pl-6 pt-6 md:pl-0 md:pt-0">
              <button className="hover:scale-110 transition">
                <img className="w-10" src={arrow_left} alt="Arrow Left" />
              </button>
              <button className="hover:scale-110 transition">
                <img className="w-10" src={arrow_right} alt="Arrow Right" />
              </button>
            </div>
          </div>
          <div className="px-4 md:px-6 lg:px-20 grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:gap-6 lg:gap-9 justify-items-center xl:justify-center">
            {testimonial.map((data) => {
              <CardTestimonial
                key={data.id}
                content={data.content}
                src={data.img}
                name={data.name}
                position={data.position}
              />;
            })}
          </div>
        </div>

        {/* Last CTA */}
        <div className="container bg-[url('../assets/img/img_cta.svg')] mx-auto mt-40 overflow-hidden sm:mb-0 rounded-2xl bg-cover h-64 md:w-[720px] lg:w-[860px] xl:w-[1200px]">
          <div className="py-[50px]">
            <header className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-white underline decoration-4 underline-offset-8 decoration-primary text-center hover:animate-pulse">
              Have a project? Let's talk
            </header>
            <p className="font-medium text-sm text-[#E6E6E6] mt-4 text-center">
              Let's collaborate, and I'll do my best to assist you.
            </p>
            <a href="mailto:rizkihaddiprayoga@gmail.com">
              <button className="bg-primary border border-primary text-white text-base font-medium py-2 px-6 rounded-xl mx-auto mt-9 block transition hover:scale-110">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WithRouter(Index);
