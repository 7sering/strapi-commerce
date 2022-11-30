import React from "react";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import "./Cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      img2: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "White T-Shirt",
      desc: "Lorem ipusum var chestimu lovan charat locla",
      isNew: true,
      oldPrice: 18,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SmFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8SmFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Jacket Cotton",
      desc: "Lorem ipusum var chestimu lovan charat locla",
      isNew: true,
      oldPrice: 22,
      price: 16,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="cartImg" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0.5)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutline className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
