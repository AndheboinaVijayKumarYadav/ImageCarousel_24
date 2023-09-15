import React ,{useState} from 'react';
import './App.css';

function App() {
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];
  const [current ,setCurrent] = useState(0);
  function prevSlide(){
        setCurrent(current ===0 ? images.length-1: current - 1);
  }
  function nextSlide(){
        setCurrent(current === images.length-1? 0: current + 1 );
  }
  return (
   <>
      <main>
         <h1>Image Carousel</h1>
         <section className="slider">
                 <section className="left-arrow" onClick={prevSlide}>⬅</section>
                 <section className="right-arrow" onClick={nextSlide}>⮕</section>
                 {images.map((image , index) => {
                  return current === index && (<div key={image} className="slide">
                                                    <img src={image} alt="images" />
                                               </div>);
                 })}
         </section>
      </main>
   </>
  );
}

export default App;
