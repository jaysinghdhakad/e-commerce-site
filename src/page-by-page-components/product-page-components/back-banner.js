import "./backbanner.css";
import CatigoryFilterInitiator from "./BrandSpecificFilters"
import { useSortAndFilter } from "../../contexts/sortAndFilters-context";
import { useState } from "react";
function BackBanner() {
  const {
    state: { showInStalk, showFastDelivery, sortHighToLow, sortLowToHigh },
    dispatch,
  } = useSortAndFilter();
 
  const [style, setStyle] = useState(["filter-menu"]);
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <>
      <div className="back-banner-product-display">
        <nav className="inner-navigation">
          <div className="home"></div>
          <div className="center-heading">Shop</div>
          <div className="filter">
            <button className="filter-button"
              onClick={() => {
                setShowMenu(!showMenu);
                if (style[1] === "animate") {
                  console.log(style);
                  setStyle(["filter-menu"]);
                } else {
                  console.log(style);

                  setStyle([...style, "animate"]);
                }
              }}
            >
              Sort and Filter
            </button>
          </div>
        </nav>
      </div>
      <div className={style.join(" ")}>
        {showMenu ? (
          <>
            <div ClassName="item">Sort : Price</div>
            <label  ClassName="item">
              <input
                type="checkbox"
               
                checked={sortHighToLow}
                onChange={() =>
                  dispatch({ type: "Sort-high-to-low", payload: null })
                }
              />
              High to low
            </label>
            <label  ClassName="item">
              <input
                type="checkbox"
               
                checked={sortLowToHigh}
                onChange={() =>
                  dispatch({ type: "Sort-low-to-high", payload: null })
                }
              />
              Low to high
            </label>{" "}
            <div  ClassName="item">Filters</div>
            <label  ClassName="item">
              <input
                type="checkbox"
                checked={showInStalk}
                onChange={() =>
                  dispatch({ type: "Show-out-of-stalk", payload: null })
                }
              />
              Out of stalk
            </label>
            <label  ClassName="item">
              <input
                type="checkbox"
                checked={showFastDelivery}
                onChange={() =>
                  dispatch({ type: "show-fast-delivery", payload: null })
                }
              />
              fast delivery
            </label>
          <CatigoryFilterInitiator/>
          </>
        ) : null}
      </div>
    </>
  );
}
export default BackBanner;
