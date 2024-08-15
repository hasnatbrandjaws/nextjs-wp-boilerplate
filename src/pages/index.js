import axios from "axios";
import Head from "next/head";
import React from "react";

export default function Index({ HomeData }) {
  console.log(HomeData, "HomeData");

  return (
    <>
      <Head>
        <title></title>
      </Head>
      <section className="bg-themePink">
      <h1>
        {
          HomeData.acf.banner_section.content_main_section.main_title_column
            .main_title
        }
      </h1>
      <h2>
        {
          HomeData.acf.banner_section.content_main_section.main_title_column
            .main_title
        }
      </h2>
      <h3>
        {
          HomeData.acf.banner_section.content_main_section.main_title_column
            .main_title
        }
      </h3>
      <h4>
        {
          HomeData.acf.banner_section.content_main_section.main_title_column
            .main_title
        }
      </h4>
      <h5>
        {
          HomeData.acf.banner_section.content_main_section.main_title_column
            .main_title
        }
      </h5>
      <h6>
        {
          HomeData.acf.banner_section.content_main_section.main_title_column
            .main_title
        }
      </h6>
      <p>
        {
          HomeData.acf.banner_section.content_main_section.main_title_column
            .main_title
        }
      </p>
      </section>
    </>
  );
}

// Get Static Props
export async function getStaticProps() {
  let HomeData = {};

  try {
    const homeresponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/pages/92`
    );
    HomeData = homeresponse.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      HomeData,
    },
    revalidate: 3600,
  };
}
