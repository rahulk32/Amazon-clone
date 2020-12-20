import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://m.media-amazon.com/images/G/31/INAssociates/2016/June/publisher_1-Prime._CB1198675309_._SL1280_FMjpg_.jpg"
                    alt="checkout left ad"
                />
                <div> 
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">your shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
