import { createContext, useContext, useEffect, useReducer, useState } from "react";
export const LoginContext = createContext();


export function LoginProvider ({children}){
    
    const [userLogin , setUserLogin] = useState(false);
    useEffect(() => {
        const  loginStatus = JSON.parse(localStorage?.getItem("login"));
      console.log("happening")
      console.log(loginStatus)

      if(loginStatus?.isUserLoggedIn){
          console.log("this is also happening")
          setUserLogin(true);
      }
        
      }, []);
    return (<LoginContext.Provider value={{userLogin,setUserLogin}}>
    {children}
    </LoginContext.Provider>
    );
    }

export function useLogin(){
        return useContext(LoginContext);
    }