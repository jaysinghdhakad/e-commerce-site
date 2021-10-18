import {createContext, useContext, useState} from "react";
 const  DataContext = createContext();

 export function DataProvider({children}){
     const [userData, setUserData] = useState( [
        {
          name: "Jay_007",
          password: "qwerty",
        },
        {
          name: "utsav_009",
          password: "mottu",
        },
        {
          name: "Akash_001",
          password: "bhabhi",
        },
      ])
     return (
         <DataContext.Provider value={{userData,setUserData}}>
             {children}
         </DataContext.Provider>

     )
 }

 export function useData(){
     return useContext(DataContext);
 }