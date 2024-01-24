import React from "react";
import Link from "next/link";
import BlogImage from "./image";
import { getStrapiMedia } from "../lib/media";

const Card = ({ blog }) => {
  const getImage = () => {
    return getStrapiMedia(blog.attributes.Image);
  };

  return (
    <Link href={`/blog/${blog.id}`} as={`/blog/${blog.id}`}>
      <a className="uk-link-reset" style={{ marginLeft: "30px" }}>
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top" style={{ marginLeft: "30px" }}>
            <img
              src={getImage()}
              alt={blog.attributes.Image.data.attributes.alternativeText}
              height="200"
              width="200"
            />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {blog.attributes.MetaTitle}
            </p>
            <p id="title" className="uk-text-large">
              {blog.attributes.Title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
