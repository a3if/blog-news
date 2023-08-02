import React from "react";
import PostTable from "../components/postTable/PostTable";
import { getPost, deletePost, getTotalPostCount } from "../api/blogApi";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../context/authenticationContext";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [count, setCount] = useState(0);

  const url = "http://127.0.0.1:3002/";

  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${url}blog/v1/post?page=${activePage}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const count = res.headers.get("x-total-length");
        setCount(Number(count));
        const data = await res.json();
        setData(data.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    getData();

  
  }, [activePage]);


  // useEffect(() => {
   
  
  //   getData();
  //   let count =getTotalPostCount()
  //    console.log('count' ,count)
  //    setCount(Number(count));
  // }, []);

  // const getData = async () => {
  //   const data = await getPost(token,activePage);
  //   setData(data.data);
  // };


  
  const handlePageChange = ({ selected }) => {
    setActivePage(selected+1);
    console.log(selected,'call ');
  };

  const deletePosts = (id, token) => {
    deletePost(id, token);
    setData((pre) => [...pre.filter((post) => post._id !== id)]);
  };

  const handleEdit = (item) => {
    navigate(`/blogsForm`, { state: item });
  };



  
  return (
    <PostTable
      data={data}
      deletePosts={deletePosts}
      handleEdit={handleEdit}
      handlePageChange={handlePageChange}
      count={count}
      activePage={activePage}
    />
  );
};

export default Posts;
