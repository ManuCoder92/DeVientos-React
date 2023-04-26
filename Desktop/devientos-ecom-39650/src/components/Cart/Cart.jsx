import { BsFillCartCheckFill } from "react-icons/bs";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <Link to="/cart">
      <div className="container-cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "beige",
          }}
        />
        <div className="bubble-counter">
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default Cart;
