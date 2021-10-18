import { createContext, useContext, useReducer } from "react";


export const WishContext = createContext();

export function WishProvider({children}){
    const [state,dispatch] = useReducer(wishReducer,[]);
 
    return (
        <WishContext.Provider value={ { state, dispatch }}>
        {children}
        </WishContext.Provider>
    )
}

function wishReducer (state,value){
    switch (value.type) {
      case "populate":
       
      return value.payload

        case "add":
      const addFlag = state.find((item) => item._id === value.payload._id);
      if (addFlag) {
        return state;
      } else {
        return [...state, value.payload];
      }

    case "remove":
      return state.filter((item) => item._id != value.payload._id);
    
        default:
            break;
    }
}
export function useWishList (){
    return useContext(WishContext);
}

