import { getStrapiMedia } from "../lib/media";
import Image from "next/image";

const BlogImage = ({ image, style }) => {
  const { url, alternativeText } = image;

  const loader = () => {
    return getStrapiMedia(image);
  };

  return (
    <Image
      loader={loader}
      layout="responsive"
      width={image.width}
      height={image.height}
      objectFit="contain"
      src={image.src}
      alt={alternativeText || ""}
    />
    // <h1>HII</h1>
  );
};

export default BlogImage;
