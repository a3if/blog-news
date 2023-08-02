import React from "react";
import "./BlogDetail.css";
import Search from "../search/Search";
import CategoryNavbar from "../cartNav/CategoryNavbar";
import ReactPaginate from "react-paginate";

import { Link } from "react-router-dom";
const BlogsDetail = ({ data, reactData ,handleSearch,loading,selectCategory,handlePage,count}) => {
  return (
    <>
      <div className="blog-detail-container">
        <h1>Blogs</h1>   
         <div className="posts">
         <CategoryNavbar selectCategory={selectCategory}/>
          <div className="blog-info">
          <Search handleSearch={handleSearch}/>
          
          {loading ? <p>Loading...</p> : ''}

            {data.map((item) => (
              <div className="post-map" key={item._id} >
                 <Link to={`/postDetail/${item._id}`}>
                <h2>
                <i className="fa-regular fa-pen-to-square"></i> {item.title}
                </h2>
                <img src={item.post_img} alt="not found" />

                <p>
                 {item.description.substring(0, 60)}{" "}
                  <span></span>
                </p>
                <p><i className=" fa-regular fa-indent"></i> {item?.category?.category_name}</p>
                <p className="author" onClick={(event) => {
                 event.preventDefault();selectCategory(item?.author?.username);}}>
                 <i className="fa-regular fa-person-dress"></i> {item.author?.username}</p>
                </Link>
              </div>
            ))}
          </div>
  
          <div className="recent-post">
    
            <h2>Recent Post</h2>
            {reactData.map((item) => (
              <ul key={item._id}>
                <li>Title : {item.title}</li>
                <li>Description : {item.description.substring(0, 10)}</li>
                <li>categories : {item?.category?.category_name}</li>
                <li>username : {item?.author?.username}</li>
                <img
                  src={item.post_img}
                  alt="not found"
                  className="recent-img"
                />
              </ul>
            ))}
          </div>
        </div>
        <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePage}
        pageRangeDisplayed={3}
        pageCount={count}
        previousLabel="< previous"
        containerClassName="pagination"
        pageClassName="pagination__page"
        pageLinkClassName="pagination__page-link"
      />
      </div>
    </>
  );
};

export default BlogsDetail;
