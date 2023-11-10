import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading title="Recent Property Listed" subtitle="  " />
          <RecentCard location="" />
        </div>
      </section>
    </>
  );
};

export default Recent;
