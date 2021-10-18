import "./carousel-landing-page.css";
function Carousel() {
  return (
    <div className="carousel-window">
    
     <div className= "carousel-images">
     <img src="./men's offer.JPG" class="navigation-item" id="image1" />
      <img src="./womens's offer.JPG" class="navigation-item" id="image2" />
     </div>
     
      <div className="carousel-navigation">
        <a c href="#image1"className="navigation-pointer"></a>
    <a className="navigation-pointer"  href="#image2">
        
        </a>
     
      </div>
    </div>
  );
}

export default Carousel;
