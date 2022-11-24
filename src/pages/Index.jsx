import React from "react";
import { WithRouter } from "../utils/Navigation";

import Layout from "../components/Layout";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <Layout>
      <Hero/>
    </Layout>
  );
};

export default WithRouter(Index);
