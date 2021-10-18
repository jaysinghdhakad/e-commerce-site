import {createContext, useContext, useState} from "react";
export const RouteContext = createContext();


export function RouteProvider ({children}){ 
    let [route,setRoute] = useState("landing");
    return (
       <RouteContext.Provider  value={{route,setRoute}}>
           {children}
       </RouteContext.Provider>
    )

}

export function useRoute(){
    return useContext(RouteContext);
}