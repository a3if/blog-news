import React from "react";
import "./UserTable.css";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useAuth } from "../../context/authenticationContext";
const UserTable = ({ data, deleteUsers, handleEdit ,handlePageChange,
  count,}) => {
  const { token } = useAuth();
  return (
    <div className="userTable">
      <div className="table-title">
        <h1>User Table</h1>
        <Link className="create-link" to="/userForm">
          Create User
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.username}</td>
              <td>{item.role.toString()}</td>
              <td>
                <button onClick={() => handleEdit(item, token)}>Update</button>
              </td>
              <td>
                <button onClick={() => deleteUsers(item._id, token)}>
                  Delete
                </button>
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

export default UserTable;
