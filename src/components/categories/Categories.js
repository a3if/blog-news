import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import ReactPaginate from "react-paginate";
import { useAuth } from "../../context/authenticationContext";
const Categories = ({ data, deleteCategory, handleEdit ,count,handlePageChange}) => {
  const { token } = useAuth();
  return (
    <div className="categroy">
      <div className="table-title">
        <h1>Categories Table</h1>
        <Link className="create-link" to="/categoryForm">
          Create
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>categories</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.category_name}</td>
              <td>
                <button onClick={() => handleEdit(item, token)}>Update</button>
              </td>
              <td>
                <button onClick={() => deleteCategory(item._id, token)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageChange}
        pageRangeDisplayed={3}
        pageCount={2}
        previousLabel="< previous"
        containerClassName="pagination"
        pageClassName="pagination__page"
        pageLinkClassName="pagination__page-link"
      /> */}
    </div>
  );
};

export default Categories;
