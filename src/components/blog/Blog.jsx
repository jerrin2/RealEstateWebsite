import React from "react";
import Back from "../common/Back";
import RecentCard from "../home/recent/RecentCard";
import "../home/recent/recent.css";
import img from "../images/about.jpg";
import { useParams } from "react-router-dom";

const Blog = () => {
  let { location } = useParams();
  return (
    <>
      <section className="blog-out mb">
        <Back name="search" title="Search Results" cover={img} />
        <div className="container recent">
          <RecentCard location={location} />
        </div>
      </section>
    </>
  );
};

export default Blog;
