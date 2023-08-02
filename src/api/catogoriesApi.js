
const url = "http://127.0.0.1:3002/";

export const getCategories = async (token) => {
    try {
      const req = await fetch(`${url}blog/v1/category`, {
        method: "GET",
      });
      const data = await req.json();
      return data;
    } catch (error) {
      console.error("Error", error);
    }
  };
  
  export const createCategory = async (values, token) => {
    try {
      delete values._id;
      const request = await fetch(`${url}blog/v1/category`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
      });
      const data = await request.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };


export const upadataCategory=async(values,token)=>{
  try{
      const res = await fetch(`${url}blog/v1/category/${values._id}`,{
        method: "PATCH",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`
        }
      });
      const data = await res.json()
      return data;
  }catch(error){
     console.log(error);
  }
}


  export const deleteCategories = async (id,token) => {
    try {
      const res = await fetch(`${url}blog/v1/category/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

 export const filterCategory=async()=>{

  }