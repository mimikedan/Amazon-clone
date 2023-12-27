import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71LeWs1P1JL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321451"
            title="Keurig K-Classic Coffee Maker K-Cup Pod, Single Serve, Programmable"
            price={79.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Ikuq6AAfL._AC_SL1500_.jpg"
          />

          <Product
            id="12321467"
            title="Adey Abeba 23 Piece Coffee Set"
            price={50.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71G5O58O1TL._AC_SX425_.jpg"
          />
          <Product
            id="B00I3LUWQA"
            title="JBL Tune 510BT: Wireless On-Ear Headphones"
            price={49}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ZDwijKtxL._AC_SX466_.jpg"
          />
          <Product
            id="B07VQPM3QW"
            title="Apple iPhone 12 Pro Max, 128GB, Pacific Blue"
            price={454}
            rating={5}
            image="https://m.media-amazon.com/images/I/61eH6Kat-XL._AC_SY606_.jpg"
          />
          <Product
            id="B07CQPM3AC"
            title="Robotic Vacuum Cleaner Q5 Pro Robot Vacuum and Mop Combo, Navigation,  "
            price={319}
            rating={5}
            image="https://m.media-amazon.com/images/I/615LyQ8le-L._AC_SX425_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="B07YJW81TR"
            title="ASUS 2023 Vivobook Go 15 Laptop, 15.6” FHD Display, 8GB RAM, 512GB SSD, Windows 11 Home"
            price={369.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tj1W5NoQL._AC_SL1500_.jpg"
          />
          <Product
            id="B08B8VDK37"
            title="Stand Mixer Smoothie Maker"
            price={31}
            rating={4}
            image="https://m.media-amazon.com/images/I/7118DhChyEL._AC_UL320_.jpg"
          />
          <Product
            id="12321467"
            title="Apple iPad (10th Generation): with A14 Bionic chip, 10.9-inch 64GB"
            price={349}
            rating={5}
            image="https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_SL1500_.jpg"
          />

          <Product
            id="B08B8VDK44"
            title="CHEFMAN Electric Crepe Maker: Precise Temp Control, 12 Non-Stick, Griddle Perfect for Tortillas, Pancakes, Eggs"
            price={31}
            rating={4}
            image="https://m.media-amazon.com/images/I/81ZVY+cOfzL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="B083WYD99J"
            title="Amazon Basics Medicine Ball for Workouts Exercise Balance Training"
            price={39}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/913F0MAWv4L._AC_SL1500_.jpg"
          />
          <Product
            id="B083WY4561"
            title="Amazon Basics Vinyl Hexagon Workout Dumbbell Hand Weight"
            price={27.61}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61KfNgaDRmL._AC_SL1500_.jpg"
          />
          <Product
            id="12321341"
            title="Boriwat Back Massager with Heat, Massagers for Neck and Back"
            price={35.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61r-X3VdkfL._AC_SX425_.jpg"
          />
          <Product
            id="B083WYD123"
            title="SAMSUNG 50-Inch Class Crystal UHD 4K CU8000 Series PurColor, Object Tracking Sound Lite, Smart TV"
            price={689.61}
            rating={5}
            image="https://m.media-amazon.com/images/I/71bdeNqyARL._AC_SY450_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
