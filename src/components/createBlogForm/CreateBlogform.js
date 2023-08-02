import React, { useEffect, useState } from "react";
import "./CreateBlogForm.css";
import { getCategories } from "../../api/catogoriesApi";

const CreateBlogform = ({
  submitHandler,
  handleChange,
  handleFileChange,
  inputValues,
}) => {
  console.log(inputValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCategories();
      console.log("getCategories", data);
      setCategories(data.category);
    };
    getData();
  }, []);

  return (
    <div className="blog-form">
      <h1>Blog form</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={inputValues.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={inputValues.description}
          onChange={handleChange}
          required
        />
        {/* <input
          type="date"
          placeholder="Data"
          name="post_date"
          value={inputValues.post_date}
          onChange={handleChange}
       
        /> */}
        <input
          type="file"
          className="fileupload"
          name="post_img"
          onChange={handleFileChange}
          required
        />
        <select
          name="category"
          value={inputValues.category}
          onChange={handleChange}
          required
        >
          {categories.map((item) => (
            <option value={item._id} key={item._id}>
              {item.category_name}
            </option>
          ))}
        </select>
        <button>submit</button>
      </form>
    </div>
  );
};

export default CreateBlogform;
