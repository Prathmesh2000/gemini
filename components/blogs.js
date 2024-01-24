import Card from "./card";

const Blogs = ({ blogs }) => {

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div className="main-blogs">
          {blogs.data.map((blog, i) => {
            return <Card blog={blog} key={blog.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
