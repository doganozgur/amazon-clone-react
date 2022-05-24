import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from './Product';

export default function MobileCarousel({ products }) {
    console.log(products);
    const responsive = {
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1
        }
    };
  return (
    <div>
        <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        >
            {products.map(product => (
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
        </Carousel>;
    </div>
  )
}
