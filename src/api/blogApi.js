//const formData = new FormData();
// formData.append('image', imageFile, imageFile.name );
// formData.append('title', title, imageFile.name );

import { getCategories } from "./catogoriesApi";

//const imageFile = fileInput.files[0]

const url = "http://127.0.0.1:3002/";
let totalPost=0


export const getTotalPostCount=()=>{
   return totalPost;
}
export const createBlog = async (values, token) => {
  
  try {
   
    console.log("blog values .....", values);
    delete values._id;
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("post_date", values.post_date);
    formData.append("post_img", values.post_img);
    formData.append("category", values.category);
    formData.append("author", values.author);

    const request = await fetch(`${url}blog/v1/post`, {
      method: "POST",
      body: formData,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const upadatePost = async (values, token) => {
  try {
    console.log("blog values .....", values);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("post_date", values.post_date);
    formData.append("post_img", values.post_img);
    formData.append("category", values.category);
    formData.append("author", values.author);

    const request = await fetch(`${url}blog/v1/post/${values._id}`, {
      method: "PATCH",
      body: formData,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (token,activePage) => {

  try {
    const req = await fetch(`${url}blog/v1/post?page=${activePage}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    totalPost = req.headers.get("x-total-length");
     const data = await req.json();
     console.log('count number',totalPost)
     return data;
    
  } catch (error) {
    console.error("Error", error);
  }
};

export const deletePost = async (id, token) => {
  try {
    const res = await fetch(`${url}blog/v1/post/${id}`, {
      method: "DELETE",

      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const getAllPost = async (token) => {
    try {
      const req = await fetch(`${url}blog/v1/post/public`, {
        method: "GET",
        
      });
  
      const data = await req.json();
      return data;
    } catch (error) {
      console.error("Error", error);
    }
  };

  export const getRecentPost =async()=>{
    try{
        const res = await fetch(`${url}blog/v1/post/recent`, {
            method: "GET",
          })
          const data = await res.json()
          return data
    }catch(error){
        console.log(error)
    }
  }

  export const searchPost =async(search)=>{
    try{
        const res = await fetch(`${url}blog/v1/post/public?q=${search}`, {
            method: "GET",
          })
          const data = await res.json()
          return data
    }catch(error){
        console.log(error)
    }
  }

  export const filterPost =async(search)=>{
    try{
        const res = await fetch(`${url}blog/v1/post/public?type=${search}`, {
            method: "GET",
          })
          const data = await res.json()
          return data
    }catch(error){
        console.log(error)
    }
  }

  export const postDetailApi =async(id)=>{
   try{
     const res= await fetch(`${url}blog/v1/post/${id}`,{
      method:"GET"
     })
     const data = await res.json()
     return data
   }catch(error){
     console.log(error);
   }
  }

  export const categoryByid=async(id)=>{
    try{
      const res= await fetch(`${url}blog/v1/category/${id}`,{
       method:"GET",
      })
      const data = await res.json()
      return data
    }catch(error){
      console.log(error);
    } 
  }

  export const userByid=async(id)=>{
    try{
      const res= await fetch(`${url}blog/v1/users/${id}`,{
       method:"GET",
      })
      const data = await res.json()
      return data
    }catch(error){
      console.log(error);
    } 
  }