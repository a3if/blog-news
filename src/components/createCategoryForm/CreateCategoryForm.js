import React from 'react'

function CreateCategoryForm({categoryData,handleChange,submitHandler}) {
  return (
     <form onSubmit={submitHandler}>
        <h1>Create Categories</h1>
        <input type='text' placeholder='category' name='category_name'  value={categoryData.category_name} onChange={handleChange}   required></input>
        <button>create</button>
     </form>
  )
}

export default CreateCategoryForm