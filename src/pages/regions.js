import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";

const Regions = ({ AllRegionsData }) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      {/* Banner */}
      <section className="w-full h-max container py-16 md:py-36">
        {AllRegionsData.map((item, i) => {
          return (
            <>
              <Link href={`/regions/${item.slug}`}>
                <h3>{item.title.rendered}</h3>
              </Link>
            </>
          );
        })}
      </section>
    </>
  );
};

// Get Static Props
export async function getStaticProps() {
  let RegionData = {};
  let AllRegionsData = [];

  try {
    const regionresponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/pages/429`
    );
    RegionData = regionresponse.data;

    const allregionsResponse = regionresponse.data.acf.all_regions || [];
    const allregionsIds = allregionsResponse.join(",");
    const allregionsIdsRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/region?include=${allregionsIds}`
    );
    AllRegionsData = allregionsIdsRes.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      RegionData,
      AllRegionsData,
    },
    revalidate: 3600,
  };
}

export default Regions;
