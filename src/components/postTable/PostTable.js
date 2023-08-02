import React from "react";
import "./PostTable.css";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
const PostTable = ({
  data,
  deletePosts,
  handleEdit,
  activePage,
  handlePageChange,
  count,
}) => {
  return (
    <div className="post-table">
      <div className="table-title">
        <h1>Post Table</h1>
        <Link className="create-link" to="/blogsForm">
          Create
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>category</th>
            <th>Author</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.description.substring(0, 19)}</td>
              <td>{item?.category?.category_name}</td>
              <td>{item.author?.username}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Update</button>
              </td>
              <td>
                <button onClick={() => deletePosts(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageChange}
        pageRangeDisplayed={3}
        pageCount={count}
        previousLabel="< previous"
        containerClassName="pagination"
        pageClassName="pagination__page"
        pageLinkClassName="pagination__page-link"
      />
    </div>
  );
};

export default PostTable;
