import React from "react";
import CreateUserForm from "../components/createUserForm/CreateUserForm";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authenticationContext";
import { createUser, upadataUser } from "../api/userApi";

const UserForm = () => {
  const { state } = useLocation();

  const [userInfo, setUserInfo] = useState({
    _id: state?._id || "",
    first_name: state?.first_name || "",
    last_name: state?.last_name || "",
    username: state?.username || "",
    role: state?.role || true,
    password: state?.password || "",
  });
  const navigate = useNavigate();
  const { token } = useAuth();



  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((pre) => ({
      ...pre,
      [name]: name === "role" ? value === "true" : value,
    }));
  };

  const createUsers = async (values, token) => {
    createUser(values, token);
  };

  const upadataUsers = async (values, token) => {
    upadataUser(values, token);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    userInfo._id
      ? await upadataUsers(userInfo, token)
      : await createUsers(userInfo, token);
    navigate("/users");
  };


  return (
    <CreateUserForm
      submitHandler={submitHandler}
      handleChange={handleChange}
      inputValues={userInfo}
    />
  );
};

export default UserForm;
