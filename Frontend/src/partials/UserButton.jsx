import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
function UserButton() {
  const products = React.useContext(CartContext);
  return (
    <div className='d-flex'>
      {/* <p>User</p> */}
      <Link to='/cart'>
        <div className='text-light'>
          <i class='fas fa-2x fa-shopping-cart'>
            <span className='mx-1'>{products.length}</span>
          </i>
        </div>
      </Link>
    </div>
  );
}

export default UserButton;
