import React, { useEffect, useState } from "react";
import UserTable from "../components/userTable/UserTable";
import { deleteUser, getUser, upadataUser } from "../api/userApi";
import { useAuth } from "../context/authenticationContext";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [count, setCount] = useState(0);

  const url = "http://127.0.0.1:3002/";
 
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${url}blog/v1/users?page=${activePage}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        const count = res.headers.get("x-total-length");
        setCount(Number(count));
        const data = await res.json();
        setData(data.users);
      } catch (error) {
        console.error("Error", error);
      }
    };
  }, [activePage]);


  const handlePageChange = ({ selected }) => {
    setActivePage(selected);
    console.log(selected,'call ');
  };

  const deleteUsers = (id, token) => {
    deleteUser(id, token);
    setData((prev) => [...prev.filter((user) => user._id !== id)]);
  };

  const handleEdit = (item) => {
    navigate(`/userForm`, { state: item });
  };

  return (
    <UserTable data={data} deleteUsers={deleteUsers} handleEdit={handleEdit} handlePageChange={handlePageChange} count={count}/>
  );
};

export default Users;
