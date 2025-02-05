import axios from "axios";
import React from "react";

const projects = ({projectsData, allProjectsData}) => {
  return <div>projects</div>;
};

// Get Static Props
// New Structure
export async function getStaticProps() {
  let projectsData = {};
  let allProjectsData = [];

  try {
    const projectsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/pages/14`
    );
    projectsData = projectsResponse.data;

    const allProjectsResponse = projectsResponse.acf?.project_posts || [];
    const allProjectsIds = allProjectsResponse.map((post) => post.ID).join(",");
    const allProjectsIdsRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/project?include=${allProjectsIds}`
    );
    allProjectsData = allProjectsIdsRes.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      projectsData,
      allProjectsData,
    },
    revalidate: 3600,
  };
}

export default projects;
