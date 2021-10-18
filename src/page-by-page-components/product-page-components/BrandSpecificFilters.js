import {  useLocation } from "react-router-dom";
import { useSortAndFilter } from "../../contexts/sortAndFilters-context";
function CatigoryFilterInitiator(){
    const {state} = useLocation();
    const id =  state.id;
    const {
        state: { brandName ,  brandFilter},
        dispatch,
      } = useSortAndFilter();
     console.log("this is brand filter", brandFilter);
  
        return ( <>
         <div  ClassName="item">Brand Filters</div>
        <label  ClassName="item">
        <input
          type="checkbox"
          checked={brandName==="HRX"}
          onChange={(e) =>{
              console.log("thuis is checked",e.target.checked);
            if(!e.target.checked){
                dispatch({type : "Sort-barnd-None",payload : null})
            }
            else{
            dispatch({ type: "Sort-brand-HRX", payload: null })}
          }
          }
        />
        HRX
      </label>
      <label  ClassName="item">
        <input
          type="checkbox"
          checked={brandName==="Roadster"}
          onChange={(e) =>{
              if(!e.target.checked){
                  dispatch({type : "Sort-barnd-None",payload : null})
              }
              else{
                dispatch({ type: "Sort-brand-Roadster", payload: null })
              }
           
          }
           
          }
        />
       Roadster
      </label>
  
         
        <label  ClassName="item">
        <input
          type="checkbox"
          checked={brandName==="Nike"}
          onChange={(e) =>{
            if(!e.target.checked){
                dispatch({type : "Sort-barnd-None",payload : null})
            }
            else{
            dispatch({ type: "Sort-brand-Nike", payload: null })}
          }
          }
        />
        Nike
      </label>
      <label  ClassName="item">
        <input
          type="checkbox"
          checked={brandName==="H&M"}
          onChange={(e) =>{
            if(!e.target.checked){
                dispatch({type : "Sort-barnd-None",payload : null})
            }
            else{
            dispatch({ type: "Sort-brand-H&M", payload: null })
            }
          }
           
          }
        />
       H&M
      </label>
    
          
        <label  ClassName="item">
        <input
          type="checkbox"
          checked={brandName==="ADIDAS"}
          onChange={(e) =>{
            if(!e.target.checked){
                dispatch({type : "Sort-barnd-None",payload : null})
            }
            else{
            dispatch({ type: "Sort-brand-ADIDAS", payload: null })
            }
          }
            
          }
        />
      ADIDAS
      </label>
      <label  ClassName="item">
        <input
          type="checkbox"
          checked={brandName==="Decathlon"}
          onChange={(e) =>{
            if(!e.target.checked){
                dispatch({type : "Sort-barnd-None",payload : null})
            }
            else{
            dispatch({ type: "Sort-brand-Decathlon", payload: null })
            }
          }
         
          }
        />
        Decathlon
      </label>
      </>)
      
  }
  export default CatigoryFilterInitiator;