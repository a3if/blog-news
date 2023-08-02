import React, { useState } from 'react'
import CreateCategoryForm from '../components/createCategoryForm/CreateCategoryForm'
import { useLocation,useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authenticationContext'
import { upadataCategory ,createCategory} from '../api/catogoriesApi'
const CategoryFormPage = () => {
    const {state} =useLocation()
    const navigate = useNavigate();
    const { token } = useAuth();

const [categoryData,setCategoryData]=useState({
    _id:state?._id || "",
    category_name: state?.category_name || "",
})

const handleChange=(e)=>{
    const {name,value} =e.target
    setCategoryData((pre)=>({
        ...pre,
        [name]:value
    } 
    ))
}
 const createCategories=(values,token)=>{
    createCategory(values,token)
 }

 const upadataCategories=(value,token)=>{
    upadataCategory(value,token)
 }

 const submitHandler=async(e)=>{
    e.preventDefault();
    categoryData._id
    ?await upadataCategories(categoryData,token)
    :await createCategories(categoryData,token)
    navigate("/categories");
 }


  return (
    <CreateCategoryForm categoryData={categoryData} handleChange={handleChange} submitHandler={submitHandler}/>
  )
}

export default CategoryFormPage