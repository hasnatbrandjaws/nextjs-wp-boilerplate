import axios from "axios";
import Head from "next/head";
import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function Index({ HeaderFooterData }) {
  console.log(HeaderFooterData);
  

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      {/* Header */}

      <Header HeaderFooterData={HeaderFooterData} />

      <section>
        <h1>
          {/* {
          HomeData.acf.banner_section.content_main_section.main_title_column
            .main_title
        } */}
        </h1>
      </section>


      {/* Footer */}

      {/* <Footer HeaderFooterData={HeaderFooterData} /> */}

    </>
  );
}

// Get Static Props
export async function getStaticProps() {
  // let HomeData = {};
  let HeaderFooterData = {};

  try {
    // const homeresponse = await axios.get(
    //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/pages/92`
    // );
    // HomeData = homeresponse.data;

    const HeaderFooterDataResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/pages/6`
    );
    HeaderFooterData = HeaderFooterDataResponse.data;

  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      // HomeData,
      HeaderFooterData,
    },
    revalidate: 3600,
  };
}
