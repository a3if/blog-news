import React, { useEffect, useState } from 'react'
import { getCategories } from '../../api/catogoriesApi'
import './CategoryNavbar.css'

const CategoryNavbar = ({selectCategory}) => {
    const [data,setData]=useState([]);

    useEffect(() => {
        const getCategory = async () => {
          const data = await getCategories();
          setData(data.category);
        };
        getCategory();
      }, []);

      
  return (
    <>
    <div className='category-navbar'>
    <nav>
       {data.map((item)=>(
         <ul key={item._id}>
            <li onClick={()=>selectCategory(item.category_name)}>{item.category_name}</li>
         </ul>
       ))}
      
  </nav>
  </div>
  </>
  )
}

export default CategoryNavbar