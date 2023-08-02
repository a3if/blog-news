import React, { useEffect, useState } from "react";
import BlogsDetail from "../components/blogDetail/BlogsDetail";
import { filterPost, getAllPost, getRecentPost, searchPost } from "../api/blogApi";
import Search from "../components/search/Search";
const Blogs = () => {
  const [data, setData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [count, setCount] = useState(0);
  const [filterQuery, setFilterQuery] = useState('');
  const [loading ,setLoading] =useState(true);

  const url = "http://127.0.0.1:3002/";

  useEffect(() => {
  //   const getAllPosts = async () => {
  //     const data = await getAllPost();
  //     setData(data.data);
  //     setLoading(false)
  //   };
    const getRecentPosts = async () => {
      const reactData = await getRecentPost();
      setRecentData(reactData.data);
    };

    //getAllPosts();
    getRecentPosts();
   
  }, []);

  useEffect(() => {
    const getData = async () => {
      // const params = new URLSearchParams();
      // params.set('page', activePage);
      
      try {
        const res = await fetch(`${url}blog/v1/post/public?page=${activePage}`, {
          method: "GET"
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
 
  

useEffect(()=>{
  const getfilters = async()=>{
    const filterData =await filterPost(filterQuery);
    setData(filterData.data);
  }
  getfilters();
},[filterQuery])


  useEffect(()=>{
    const getSearchPosts = async()=>{
      const searchData = await searchPost(searchQuery);
      setData(searchData.data);
      setSearchData(searchData);
      setLoading(false)
  } 
  getSearchPosts();
  },[searchQuery])

  const handlePageChange = (e) => {
    setLoading(true)
    setSearchQuery(e.target.value)
  };

  const selectCategory=(value)=>{
    setFilterQuery(value);
  }

  const handlePage = ({ selected }) => {
    setActivePage(selected);
  };

  return (
    <>
      <div className="seach-component">
      </div>
      <BlogsDetail data={data} reactData={recentData}  handleSearch={handlePageChange} loading={loading} selectCategory={selectCategory} handlePage={handlePage} count={count}/>
    </>
  );
};

export default Blogs;
