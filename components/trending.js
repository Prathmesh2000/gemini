import { getStrapiMedia } from "../lib/media";
import Link from "next/link";

const Trending = ({ blogs }) => {
  const getImage = (path) => {
    return getStrapiMedia(path);
  };
  return (
    <div>
      {blogs.data.map((blog) => {
        return (
          <Link
            href={`/blog/${blog.id}`}
            as={`/blog/${blog.id}`}
            style={{
              maxWidth: "50%",
              flexBasis: "50%",
              paddingRight: "16px",
              paddingLeft: "16px",
              flexGrow: "0",
              boxSizing: "inherit",
              display: "block",
            }}
            key={blog.id}
          >
            <a
              style={{
                width: "100%",
                height: "100%",
                boxSizing: "inherit",
                display: "block",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  boxSizing: "inherit",
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    top: "-10px",
                    flex: "0 0 auto",
                    boxSizing: "inherit",
                    display: "block",
                    marginright: "16px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      color: "rgb(230,230,230",
                      lineHeight: "36px",
                      fontSize: "30px",
                      fontWeight: 700,
                      letterSpacing: 0,
                    }}
                  ></span>
                </div>
                <div
                  style={{
                    boxSizing: "inherit",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "inherit",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "inherit",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "block",
                          boxSizing: "inherit",
                        }}
                      >
                        <img
                          alt={blog.attributes.Content}
                          src={getImage(blog.attributes.Image)}
                          style={{
                            width: "20px",
                            height: "20px",
                            borderradius: "50%",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                          }}
                        ></img>
                      </div>
                      <h4
                        style={{
                          marginLeft: "20px",
                          paddingRight: "2px",
                          fontSize: "13px",
                          maxHeight: "16px",
                          lineHeight: "16px",
                          fontWeight: 500,
                          color: "rgba(41,41,41,1)",
                          display: "-webkit-box",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          letterSpacing: 0,
                          wordBreak: "break-all",
                        }}
                      >
                        {blog.attributes.MetaTitle}
                      </h4>
                    </div>
                  </div>
                  <div
                    style={{
                      boxSizing: "inherit",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    <div
                      style={{
                        margin: 0,
                        padding: 0,
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        letterSpacing: "inherit",
                        border: "inherit",
                        color: "inherit",
                        fill: "inherit",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "16px",
                          maxHeight: "40px",
                          lineHeight: "40px",
                          fontWeight: 700,
                          color: "rgba(41,41,41,1)",
                          display: "-webkit-box",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          letterSpacing: 0,
                        }}
                      >
                        {blog.attributes.MetaDescription}
                      </h2>
                    </div>
                  </div>
                  {/* <p></p> */}
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Trending;
