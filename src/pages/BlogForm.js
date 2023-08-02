import React, { useState } from "react";
import CreateBlogform from "../components/createBlogForm/CreateBlogform";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authenticationContext";
import { upadatePost, createBlog } from "../api/blogApi";

const BlogForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { token, user } = useAuth();
  console.log("staetfff", state);

  const [blogInfo, setBlogInfo] = useState({
    _id: state?._id || "",
    title: state?.title || "",
    Date: state?.description || "",
    description: state?.description || "",
    category: state?.category._id || "",
    author: user._id || "",
    post_image: state?.post_image || null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogInfo((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setBlogInfo({ ...blogInfo, post_img: e.target.files[0] }); // Store the selected file in state
  };

  const upadatePosts = async (values, token) => {
    upadatePost(values, token);
  };

  const createPosts = async (values, token) => {
    createBlog(values, token);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    blogInfo._id
      ? await upadatePosts(blogInfo, token)
      : await createPosts(blogInfo, token);
    navigate("/blogs");
  };


  
  return (
    <CreateBlogform
      submitHandler={submitHandler}
      handleChange={handleChange}
      handleFileChange={handleFileChange}
      inputValues={blogInfo}
    />
  );
};

export default BlogForm;
