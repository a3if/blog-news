import React, { useEffect, useState } from "react";
import Categories from "../components/categories/Categories";
import { getCategories, deleteCategories } from "../api/catogoriesApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authenticationContext";
const CategoriesPages = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  // const [activePage, setActivePage] = useState(1);
  // const [count, setCount] = useState(0);

  // const url = "http://127.0.0.1:3002/";
  // const { token } = useAuth();
 

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await fetch(`${url}blog/v1/category?page=${activePage}`, {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
        
  //       const count = res.headers.get("x-total-length");
  //       setCount(Number(count));
  //       const data = await res.json();
  //       setData(data.category);
  //       console.log('cat' ,data)
  //     } catch (error) {
  //       console.error("Error", error);
  //     }
  //   };
  //   getData();

  
  // }, [activePage]);

  // const handlePageChange = ({ selected }) => {
  //   setActivePage(selected);
  //   console.log(selected,'call ');
  // };

   useEffect(() => {
    const getCategory = async () => {
      const data = await getCategories();
      setData(data.category);
    };
    getCategory();
  }, []);

  const deleteCategory = (id, token) => {
    deleteCategories(id, token);
    setData((pre) => [...pre.filter((category) => category._id !== id)]);
  };


  const handleEdit = (item) => {
    navigate(`/categoryForm`, { state: item });
  };

  return (
    <Categories
      data={data}
      deleteCategory={deleteCategory}
      handleEdit={handleEdit}
     // handlePageChange={handlePageChange}
      //count={count}
    />
  );
};

export default CategoriesPages;
