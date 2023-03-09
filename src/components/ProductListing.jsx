import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import Banner from "../assets/banner.jpg";
import MobileCarousel from "./MobileCarousel";

function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const url = process.env.REACT_APP_API_URL;
      const response = await axios.get(url);
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div>
      <div className="xl:grid-cols-4 md:grid-cols-3 grid-cols gap-6 sm:-mt-20 md:-mt-28 z-50 relative px-8 hidden sm:grid">
        {products.slice(0, 4).map((product) => (
          <Product key={product.id} data={product} />
        ))}
        <img src={Banner} alt="Banner" className="col-span-full" />
        <div className="md:col-span-2">
          {products.slice(4, 5).map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
        {products.slice(5, products.length).map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
      <div className="sm:hidden -mt-20">
        <MobileCarousel products={products} />
      </div>
    </div>
  );
}

export default ProductListing;
