import React from "react";
import { useCart } from "react-use-cart";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";

const ShoppingCart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  if (isEmpty)
    return (
      <div className="flex justify-between">
        <p className="text-red-500 text-xl font-bold">
          No items in the cart to show
        </p>
        <NavLink
          to="/"
          className=" bg-blues text-white rounded-full py-3 px-5"
        >
          Return to Home
        </NavLink>
      </div>
    );

  return (
    <div className="px-12">
      <h4 className="text-center">
        Number of Items:
        <span className="text-blues text-xl p-0 mb-0">{totalUniqueItems}</span>
      </h4>
      <p>Total orders:{totalItems}</p>

      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between mb-4 items-center">
            <img src={item.img} alt="wq" className="w-24 h-24" />
            <p className="text-blues text-xl">{item.name}</p>
            <div className="Quality flex gap-5 ">
              <h5>Quality: </h5>
              <div className="incre-decre bg-gray-200 px-3 flex gap-4 items-center">
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="totalcosts"></div>
            </div>
            <button onClick={() => removeItem(item.id)}>
              <DeleteIcon color="error" />
            </button>
          </li>
        ))}

        <p>Total: $ {cartTotal}</p>
      </ul>
    </div>
  );
};

export default ShoppingCart;
