import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
     <img className='home__image'
     src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg' alt='banner'/>
    

    {/* // product id, title, price, rating, image */}
    <div className='home__row'>
   
<Product
      id="12321341"
      title="The Lean Statup: How to constant innovation creates Successfully Businesses Paperback"
      price={11.96}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
    />

<Product
      id="12321346"
      title="Celestron – StarSense Explorer LT 80A"
      price={214.71}
      rating={5}
      image="https://m.media-amazon.com/images/I/51Znfa8AunL._AC_SY200_.jpg"
    />
    </div>
    <div className='home__row'>
    <Product
      id="12321341"
      title="Don't Forget to Remember"
      price={9.50}
      rating={5}
      image="	https://m.media-amazon.com/images/I/51XYT80GuNL._AC_SY200_.jpg"
    />

<Product
      id="12321341"
      title="The Lean Statup: How to constant innovation creates Successfully Businesses Paperback"
      price={9.33}
      rating={5}
      image="https://m.media-amazon.com/images/I/41t9U5Qs7SL._AC_SY200_.jpg"
    />

<Product
      id="12321341"
      title="Neutrogena Soothing & Calming Healt…"
      price={11.96}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
    />
    </div>
    <div className='home__row'>
    <Product
      id="12321341"
      title="The Lean Statup: How to constant innovation creates Successfully Businesses Paperback"
      price={11.96}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
    />

    </div>
    {/* // product */}
    </div>
  )
}

export default Home
