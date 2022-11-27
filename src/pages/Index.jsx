import React from "react";
import { WithRouter } from "../utils/Navigation";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CardProject from "../components/CardProject";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <header className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-secondary text-center mt-28 mb-14 hover:animate-pulse">
        Let’s take a look at <br />{" "}
        <span className="underline decoration-4 underline-offset-8 decoration-primary">
          my project.
        </span>
      </header>
      <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:mx-8 lg:mx-20 xl:mx-28 md:gap-6 lg:gap-9 justify-items-center">
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
      <button className="bg-primary border border-primary text-white text-base font-medium py-2 px-6 rounded-xl mx-auto block mt-5 transition md:mt-12 lg:mt-14 xl:mt-14 hover:scale-110">
        All Projects
      </button>
    </Layout>
  );
};

export default WithRouter(Index);
