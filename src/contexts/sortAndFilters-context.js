import { createContext, useContext, useReducer } from "react";

export const SortAndfilterContext = createContext();

export function SortAndFilterProvider({ children }) {
  const [state, dispatch] = useReducer(SortAndFilterReducer, {
    showInStalk: false,
    showFastDelivery: false,
    sortHighToLow: false,
    sortLowToHigh: false,
    brandFilter: false,
    brandName: "",
  });
  return (
    <SortAndfilterContext.Provider value={{ state, dispatch }}>
      {children}
    </SortAndfilterContext.Provider>
  );
}

function SortAndFilterReducer(state, value) {
  switch (value.type) {
    case "Show-out-of-stalk":
      return { ...state, showInStalk: !state.showInStalk };

    case "show-fast-delivery":
      return { ...state, showFastDelivery: !state.showFastDelivery };
    case "Sort-high-to-low":
      return {
        ...state,
        sortHighToLow: true,
      };
    case "Sort-low-to-high":
      return {
        ...state,
        sortLowToHigh: true,
      };
    case "Sort-brand-HRX":
      return {
        ...state,
        brandFilter: true,
        brandName: "HRX",
      };
    case "Sort-brand-Roadster":
      return {
        ...state,
        brandFilter: true,
        brandName: "Roadster",
      };
    case "Sort-brand-Nike":
      return {
        ...state,
        brandFilter: true,
        brandName: "Nike",
      };
    case "Sort-brand-H&M":
      return {
        ...state,
        brandFilter: true,
        brandName: "H&M",
      };
    case "Sort-brand-ADIDAS":
      return {
        ...state,
        brandFilter: true,
        brandName: "ADIDAS",
      };
    case "Sort-brand-Decathlon":
      return {
        ...state,
        brandFilter: true,
        brandName: "Decathlon",
      };
      case "Sort-barnd-None":
        return {
          ...state,
          brandFilter: false,
          brandName: "",
        };
    default:
      return state;
  }
}

export function useSortAndFilter() {
  return useContext(SortAndfilterContext);
}
