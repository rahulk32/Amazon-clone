import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="Home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Events/Jupiter20/SlashPV/Post/AO_1500x300-LP-Header.jpg"
                    alt="amazon prime ad"
                />

                <div className="home__row">
                    <Product 
                        id="1"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        price={523.00}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YEMm_r9yG7O4D2E0EacEbv9IP-Y3Nl-ysg&usqp=CAU"
                        rating={5}
                        alt="The lean startup"
                    />
                    <Product 
                        id="2"
                        title="Introducing Echo Show 5 - Smart display with Alexa - 5.5 screen & crisp sound (White)"
                        price={6499.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/61qwNCS10cL._SL1000_.jpg"
                        rating={5}
                        alt="Echo Show 5"
                    />
                    <Product
                        id="3" 
                        title="Cadbury Celebrations Assorted Chocolate Gift Pack, 64.2 g"
                        price={39.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71FEheU1dCL._SL1500_.jpg"
                        rating={4}
                        alt="Cadbury Celebrations"
                    />
                    <Product 
                        id="4"
                        title="Red Bull Energy Drink, 250 ml (4 Pack)"
                        price={435.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71RUxMge%2B3L._SL1080_.jpg"
                        rating={5}
                        alt="Energy drink"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="5"
                        title="Toolart Handmade Colorful Push and Pull Toys Wooden Truck Vehicle for Kids Color May Vary (H: 6.5 x L: 5 x W: 3.5 Inch)"
                        price={575.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/711e8Qlf5UL._SL1500_.jpg"
                        rating={5}
                        alt="Truck vehicle for kids"
                    />
                    <Product 
                        id="6"
                        title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)"
                        price={14990.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71fEd9glTIL._SL1500_.jpg"
                        rating={4}
                        alt="Samsung 80 cm (32 Inches) Wondertainment Series"
                    />
                    <Product
                        id="7" 
                        title="Samsung Galaxy M31 (Space Black, 6GB RAM, 64GB Storage)"
                        price={15999.00}
                        image="https://images-eu.ssl-images-amazon.com/images/I/419Sb0zGlnL._SY300_QL70_FMwebp_.jpg"
                        rating={4}
                        alt="Samsung Galaxy M31"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="8"
                        title="mQFIT Exceed Induction Flight Electronic Radio RC Remote Control Toy
                         Charging Helicopter Toys with 3D Light Toys for Boys Kids Indoor Flying Colors as per Stock"
                        price={479.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/61oJaDqIWfL._SL1299_.jpg"
                        rating={2}
                        alt="Electronic Radio RC Remote Control Toy"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
