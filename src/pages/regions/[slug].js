import React from "react";
import Head from "next/head";
import axios from "axios";

export async function getStaticPaths() {
  let allSlugs = [];

  try {
    const slugsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/region`
    );

    allSlugs = slugsResponse.data.map((post) => post.slug);
  } catch (error) {
    console.error("Error fetching slugs:", error);
  }

  const paths = allSlugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  let allRegionsData = [];

  try {
    const regionResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/region/?slug=${params.slug}`
    );
    allRegionsData = regionResponse.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      allRegionsData,
    },
  };
}

const RegionsDetail = ({ allRegionsData }) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>

      <section>
        <h1>{allRegionsData.title.rendered}</h1>
      </section>
    </>
  );
};
export default RegionsDetail;
