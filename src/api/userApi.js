const url = "http://127.0.0.1:3002/";
export const createUser = async (values, token) => {
  try {
    let user = {
      ...values,
    };

    delete user._id;
    
    const request = await fetch(`${url}blog/v1/users`, {
      method: "POST",
      body: JSON.stringify(user),
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

export const getUser = async (token) => {
  try {
    const req = await fetch(`${url}blog/v1/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await req.json();
    console.log(data, "datdataatdat");
    return data;
  } catch (error) {
    console.error("Error", error);
  }
};

export const upadataUser=async(user,token)=>{
  try{
      const res = await fetch(`${url}blog/v1/users/${user._id}`,{
        method: "PATCH",
        body: JSON.stringify(user),
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

export const deleteUser = async (id,token) => {
  try {
    const res = await fetch(`${url}blog/v1/users/${id}`, {
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


