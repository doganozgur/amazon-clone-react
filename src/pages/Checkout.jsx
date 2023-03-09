import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Banner from "../assets/banner2.png";
import CheckoutItem from "../components/CheckoutItem";

function Checkout() {
  const checkoutProducts = useSelector((state) => state.basket.items);
  const [signedIn] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left */}
      <div className="lg:basis-4/5 basis-full">
        <img src={Banner} alt="Banner" className="w-full mb-5" />
        <div className="bg-white p-4">
          <h2 className="text-4xl">Shopping Basket</h2>
          <hr className="my-4" />
          <div className="space-y-16 p-4">
            {checkoutProducts.map((product) => (
              <CheckoutItem key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="lg:basis-1/5 lg:ml-4 mt-5 lg:mt-0 bg-white p-4">
        <p className="mb-4 text-lg">
          Subtotal ({checkoutProducts.length > 0 ? checkoutProducts.length : 0}{" "}
          items):
        </p>
        {!signedIn ? (
          <Link to="/" className="btn w-full">
            Sign in to Checkout
          </Link>
        ) : (
          <p>items</p>
        )}
      </div>
    </div>
  );
}

export default Checkout;
