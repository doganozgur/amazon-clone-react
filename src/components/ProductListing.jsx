import { useEffect, useState } from "react"
import axios from "axios";
import Product from "./Product";
import Banner from "../assets/banner.jpg";

function ProductListing() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const url = "https://fakestoreapi.com/products";
            const response = await axios.get(url);
            await setProducts(response.data)
        }
        getProducts();
    }, [])

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols gap-6 -mt-40 z-50 relative px-4">
        {products.slice(0,4).map((product) => (
            <Product
                key={product.id}
                id={product.id} 
                title={product.title}
                category={product.category}
                description={product.description}
                image={product.image}
                price={product.price}
                rating={Math.round(product.rating.rate)}
            />
        ))}
        <img src={Banner} alt="Banner" className="col-span-full" />
        <div className="md:col-span-2">
            {products.slice(4,5).map((product) => (
                <Product
                    key={product.id}
                    id={product.id} 
                    title={product.title}
                    category={product.category}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    rating={Math.round(product.rating.rate)}
                />
            ))}
        </div>
        {products.slice(5, products.length).map((product) => (
            <Product
                key={product.id}
                id={product.id} 
                title={product.title}
                category={product.category}
                description={product.description}
                image={product.image}
                price={product.price}
                rating={Math.round(product.rating.rate)}
            />
        ))}
    </div>
  )
}

export default ProductListing