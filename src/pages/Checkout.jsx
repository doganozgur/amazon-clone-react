import { useState } from "react"
import { Link } from "react-router-dom"
import Banner from "../assets/banner2.png"

function Checkout() {
    const [signedIn] = useState(false)

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left */}
        <div className="md:basis-4/5">
            <img src={Banner} alt="Banner" className="w-full mb-5" />
            <div className="bg-white p-4">
                <h2 className="text-4xl">Shopping Basket</h2>
                <hr className="my-4"/>
            </div>
        </div>
        {/* Right */}
        <div className="md:basis-1/5 md:ml-4 mt-5 md:mt-0 bg-white p-4">
            <p className="mb-4 text-lg">Subtotal (2 items):</p>
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