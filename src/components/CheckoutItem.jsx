import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { removeFromBasket } from "../features/basket/basketSlice";

export default function CheckoutItem({ data }) {
  const { id, title, description, image, price, rating } = data;
  const dispatch = useDispatch();
  const handleRemoveFromBasket = (id) => {
    toast("Product removed from the cart", {
      icon: "🗑️",
      style: {
        boxShadow: "0 3px 3px rgb(0 0 0 / 2%), 0 1px 0px rgb(0 0 0 / 5%)",
      },
    });
    dispatch(removeFromBasket({ id }));
  };

  return (
    <article
      className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-8"
      key={id}
    >
      {/* Img */}
      <div className="basis-1/5">
        <img src={image} alt="Product" className="w-52 h-52 object-contain" />
      </div>
      {/* Info */}
      <div className="flex flex-col space-y-2 basis-3/5">
        <h4 className=" text-lg font-bold">{title}</h4>
        <p className="flex mb-3 space-x-1">
          {Array(Math.round(rating?.rate))
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
        </p>
        <p className="line-clamp-3">{description}</p>
        <p className="font-bold">{"$" + price}</p>
      </div>
      {/* Btn */}
      <div className="sm:basis-1/5 basis-full">
        <button className="btn" onClick={() => handleRemoveFromBasket(id)}>
          Remove from Basket
        </button>
      </div>
    </article>
  );
}
