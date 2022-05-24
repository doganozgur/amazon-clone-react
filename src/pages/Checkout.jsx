import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/banner2.png";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../features/basket/basketSlice"

function Checkout() {
    const checkoutProducts = useSelector(state => state.basket.items)
    const [signedIn] = useState(false)
    const dispatch = useDispatch();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left */}
        <div className="lg:basis-4/5 basis-full">
            <img src={Banner} alt="Banner" className="w-full mb-5" />
            <div className="bg-white p-4">
                <h2 className="text-4xl">Shopping Basket</h2>
                <hr className="my-4"/>
                <ul className="space-y-16 p-4">
                    {checkoutProducts.map(product => (
                        <li className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-8" key={product.id}>
                            {/* Img */}
                            <div className="basis-1/5">
                                <img src={product.image} alt="Product" className="w-52 h-52 object-contain" />
                            </div>
                            {/* Info */}
                            <div className="flex flex-col space-y-2 basis-3/5">
                                <h4 className=" text-lg font-bold">{product.title}</h4>
                                <p className="flex mb-3 space-x-1">{Array(product.rating).fill(0).map((_, i) => <FaStar className="text-yellow-500" />)}</p>
                                <p className="line-clamp-3">{product.description}</p>
                                <p className="font-bold">{"$" + product.price}</p>
                            </div>
                            {/* Btn */} 
                            <div className="sm:basis-1/5 basis-full">
                                <button className="btn" onClick={() => dispatch(removeFromBasket({ id: product.id }))}>Remove from Basket</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {/* Right */}
        <div className="lg:basis-1/5 lg:ml-4 mt-5 lg:mt-0 bg-white p-4">
            <p className="mb-4 text-lg">Subtotal ({checkoutProducts.length > 0 ? checkoutProducts.length : 0} items):</p>
            {!signedIn ?
                <Link to="/" className="btn w-full">Sign in to Checkout</Link>
                :
                <p>items</p>
            }
        </div>
    </div>
  )
}

export default Checkout