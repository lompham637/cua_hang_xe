import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//import icon
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io';

//import cart context
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

    const { id, title, image, price, amount } = item;
    return (
        <div
            className="flex gap-x-4 py-2 lg:px-6 border-b
          border-gray-200 w-full font-light text-grap-500"
        >
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* Image */}
                <Link to={`/product/${id}`}>
                    <img className="max-w-[80px]" src={image} alt="" />
                </Link>

                <div className="w-full flex flex-col">
                    {/* Title & remove icon */}
                    <div className="flex justify-between mb-2">
                        <Link
                            to={`/product/${id}`}
                            className="uppercase font-medium max-w-[240px] 
                            text-priamry hover:underline"
                        >
                            {title}
                        </Link>

                        {/* Remove icon */}
                        <div onClick={() => removeFromCart(id)} className="text-x1 cursor-pointer">
                            <IoMdClose className="text-grey-500  hover:text-red-500 transition" />
                        </div>
                    </div>

                    <div className=" gap-x-2 h-[36px] text-sm mb-4">
                        {/* qty */}
                        <div
                            className="flex flex-1 max-w-[100px]  items-center h-full border
                          stext-primary font-medium"
                        >
                            {/* minus icon */}
                            <div
                                onClick={() => decreaseAmount(id)}
                                className="flex-1 h-full flex justify-center 
                                items-center cursor-pointer"
                            >
                                <IoMdRemove />
                            </div>

                            {/* amount */}
                            <div className="h-full flex justify-center items-center">{amount}</div>

                            {/* plus icon */}
                            <div
                                onClick={() => increaseAmount(id)}
                                className="flex-1 h-full flex justify-center 
                                items-center cursor-pointer h-full"
                            >
                                <IoMdAdd />
                            </div>
                        </div>

                        {/* item price */}
                        <div className="">Price: $ {price}</div>

                        {/* Final price */}
                        {/* Make the price at 2 decimals */}
                        <div className=" text-primary font-medium">
                            {`Total Price: $ ${parseFloat(price * amount).toFixed(2)}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
