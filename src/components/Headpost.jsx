import React from "react";
import headPostImage from "../assets/1.jpg";
import { Link } from "react-router-dom";
import { HeadPost } from "../data/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Headpost = () => {
  return (
    <article className="head-post">

      <Carousel responsive={responsive} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={3000} removeArrowOnDeviceType={["tablet", "mobile"]}>

      {HeadPost.map(({ id, Image, authorId, title, des }, index) => {
        return (
          <div key={index} className="head-post-container">
            
            <div className="post-content">
              <Link to={`posts/${authorId}`}>
                <h1>{title}</h1>
              </Link>
              <p>{des}</p>
            </div>
            <div className="post-image">
              <img src={Image} alt="" />
            </div>
          </div>
        );
      })}

      </Carousel>
    </article>
  );
};

export default Headpost;
