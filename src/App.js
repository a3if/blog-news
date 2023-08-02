import React from "react";
import LoginForm from "./pages/LoginForm";
import Blogs from "./pages/Blogs";
import Users from "./pages/Users";
import CategoriesPages from "./pages/CategoriesPages";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import UserForm from "./pages/UserForm";
import BlogForm from "./pages/BlogForm";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import CategoryFormPage from "./pages/CategoryFormPage";
import { useAuth } from "./context/authenticationContext";
import { Navigate } from "react-router-dom";

function App() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/PostDetail/:id" element={<PostDetail />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/users"
          element={isLoggedIn ? <Users /> : <Navigate to="/login" />}
        />
        {isLoggedIn && user?.role === true ? (
          <>
            <Route path="/categories" element={<CategoriesPages />} />
            <Route path="/userForm" element={<UserForm />} />
            <Route path="/categoryForm" element={<CategoryFormPage />} />
          </>
        ) : (
          ""
        )}
        <Route path="/blogs" element={<Posts />} />
        <Route path="/blogsForm" element={<BlogForm />} />
      </Routes>
    </div>
  );
}

export default App;
