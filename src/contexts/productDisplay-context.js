import {createContext, useContext,useState} from "react"


const ProductDisplayContext = createContext();

export function ProductDisplayProvider({children}){
    const [product,setProduct] = useState({});
    return (
        <ProductDisplayContext.Provider value={{product,setProduct}}>
            {children}
        </ProductDisplayContext.Provider>
    )
}

export function useProductDisplay(){
    return useContext(ProductDisplayContext);
}

