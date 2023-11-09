import React, { useState } from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const [SearchLocation, setSearchLocation] = useState("");
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Next Home "
            subtitle="Find new & featured property located in your local city."
          />

          <form className="flex">
            <div className="box">
              <input
                type="text"
                placeholder="Search Location"
                onChange={(e) => {
                  setSearchLocation(e.target.value);
                  console.log(SearchLocation);
                }}
              />
            </div>
            <button
              className="btn1"
              onClick={() => {
                console.log(SearchLocation);
              }}
            >
              {/* <a href={`/blog/${SearchLocation}`}> */}
              <Link to={`/blog/${SearchLocation}`}>
                <i className="fa fa-search"></i>
              </Link>
              {/* </a> */}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
