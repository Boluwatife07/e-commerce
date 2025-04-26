import Xiv_collections from "../components/landingExtended/xiv_collections";
import Main_extended from "../components/landingExtended/new_this_week";
import Our_approach from "../components/landingExtended/our_approach";
import Footer from "../components/landingExtended/footer";
import Main from "../components/landingExtended/main";
import Layout from "../components/Layout";

import React from "react";

export default function index() {
  return (
    <Layout>
      <div className="pt-10 px-10 pb-36  flex flex-col gap-28 bg-[#f5f5f5]">
        <Main />
        <Main_extended />
        <Xiv_collections />
        <Our_approach />
      </div>
      <Footer />
    </Layout>
  );
}
