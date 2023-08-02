import React ,{createContext,useState,useContext,useEffect} from "react";
export const AuthContext = createContext();

const AuthProvider =({children})=>{
    const userToken = localStorage.getItem('token');
    const userIsLoggedIn = localStorage.getItem('token') ? true : false;
    const userDetail = JSON.parse(localStorage.getItem('user'));
    const [token,setToken]=useState(userToken);
    const [user,setUser]=useState(userDetail );
    const [isLoggedIn,setIsLoggedIn]=useState(userIsLoggedIn);

    
    const login =(newToken,userData)=>{
        setToken(newToken)
        setUser(userData)

        setIsLoggedIn(true);
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isLoggedIn', true);
    }

    // useEffect(() => {
    //     // Check if the user is already logged in (e.g., token exists in local storage)
    //     const token = localStorage.getItem('token');
    
    //     if (token) {
    //       // Verify the token on the server-side if needed
    //       // Update the state accordingly
    //       setIsLoggedIn(true);
    //       // Set user data if available
    //       setUser(user);
    //     }
    //   },[]);
      
    const logout =()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        setToken(null)
    setIsLoggedIn(false);
    setUser(null);
    }

    return(
        <AuthContext.Provider value={{token,login,logout,user,isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
};

export default AuthProvider