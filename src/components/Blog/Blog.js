import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Blog.css";
import BlogPost from "../SingleBlog/SingleBlog";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <section className="blog-area">
      <Container>
        <SectionHeading heading="Questions Answer" />
        <Row>
          {blog.map((item) => (
            <BlogPost key={item.id} item={item}></BlogPost>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
