import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const Blog = await fetchAPI(`/api/blogs/${params.id}`);
  return {
    props: { Blog },
    revalidate: 5,
  };
}

const Blog = ({ Blog }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {Blog.data.attributes.MetaTitle}
            </p>
            <p id="title" className="uk-text-large">
              {Blog.data.attributes.Title}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Blog;

export async function getStaticPaths() {
  const blogs = await fetchAPI("/api/blogs");
  let paths = blogs.data.map((blog) => ({
    params: {
      id: `${blog.id}`,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}
