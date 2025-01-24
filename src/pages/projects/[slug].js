import axios from 'axios';
import React from 'react'

export async function getStaticPaths() {
    let allSlugs = [];
  
    try {
      const slugsResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/project`
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
    let slugProjectsData = [];
  
    try {

      const projectResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/project/?slug=${params.slug}`
      );
      slugProjectsData = projectResponse.data[0];

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
    return {
      props: {
        slugProjectsData,
      },
    };
  }
  

const projectdetail = ({slugProjectsData}) => {
  return (
    <div>[slug]</div>
  )
}

export default projectdetail