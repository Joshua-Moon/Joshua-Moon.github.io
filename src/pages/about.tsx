import { graphql } from "gatsby";
import React from "react";

const About = ({ data }) => {
  return (
    <>
      <h1>About</h1>
      <h2>{data.site.siteMetadata.title}</h2>
      <h2>{data.site.siteMetadata.description}</h2>
    </>
  );
};

export default About;

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
