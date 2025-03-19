import axios from "axios";
import Head from "next/head";
import React from "react";

export default function Index({ HomeData }) {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <section>
        <h1>
          Hello
          {/* {
            HomeData.acf.banner_section.content_main_section.main_title_column
              .main_title
          } */}
        </h1>
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
