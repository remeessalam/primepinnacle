import React from "react";
import WebsiteFooter from "../components/website/WebsiteFooter";
import WebsiteHeader from "../components/website/WebsiteHeader";
import { blogs } from "../blog";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <WebsiteHeader />
      <div className="wrapper pt-[12rem] pb-[10rem]">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="flex flex-col justify-between flex-grow p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4  line-clamp-5">
                  {blog.description}
                </p>
                <Link to={`/blogs/${blog.id}`} className="primary-btn">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WebsiteFooter />
    </div>
  );
};

export default Blogs;
