import axios from "axios";
import React from "react";

const projects = ({projectsData, allProjectsData}) => {
  return <div>projects</div>;
};

// Get Static Props
export async function getStaticProps() {
  let projectsData = {};
  let allProjectsData = [];

  try {
    // Replace 'YOUR_PROJECTS_PAGE_ID' with your actual WordPress projects page ID
    const projectsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/pages/YOUR_PROJECTS_PAGE_ID`
    );
    projectsData = projectsResponse.data;

    // Fetch projects from ACF field (adjust field name if different)
    const allProjectsResponse = projectsResponse.data.acf?.project_posts || [];
    const allProjectsIds = allProjectsResponse.map((post) => post.ID).join(",");
    
    if (allProjectsIds) {
      const allProjectsIdsRes = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/project?include=${allProjectsIds}`
      );
      allProjectsData = allProjectsIdsRes.data;
    } else {
      // Alternative: Fetch all projects if not using ACF
      // const allProjectsIdsRes = await axios.get(
      //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/project`
      // );
      // allProjectsData = allProjectsIdsRes.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      projectsData,
      allProjectsData,
    },
    revalidate: 3600, // Revalidate every hour
  };
}

export default projects;
