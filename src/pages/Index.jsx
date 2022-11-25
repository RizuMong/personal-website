import React from "react";
import { WithRouter } from "../utils/Navigation";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CardProject from "../components/CardProject";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <header className="font-bold text-3xl text-secondary text-center mt-28 mb-14">
        Let’s take a look at <br />{" "}
        <span className="underline decoration-4 underline-offset-8 decoration-primary">
          my project.
        </span>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </Layout>
  );
};

export default WithRouter(Index);
