import React, { createContext, useState, useEffect } from 'react';

//create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    //cart state
    const [cart, setCart] = useState([]);

    //Item amount state
    const [itemAmount, setItemAmount] = useState(0);

    //Total price
    const [total, setTotal] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const total = cart.reduce((accumulator, currentItems) => {
            return accumulator + currentItems.price * currentItems.amount;
        }, 0);
        setTotal(total);
    });

    //update item amount
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItems) => {
                return accumulator + currentItems.amount;
            }, 0);
            setItemAmount(amount);
        }
    }, [cart]);

    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };

        //Kiem tra xem san pham da co trong gio hang hay chua
        const cartItem = cart.find((item) => {
            return item.id === id;
        });

        //Truong hop trong gio hang da co san pham vua them vao roi
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    //remove from cart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    //clear cart
    const clearCart = () => {
        setCart([]);
    };

    //increase amount
    const increaseAmount = (id) => {
        const cartItems = cart.find((item) => item.id === id);
        addToCart(cartItems, id);
    };

    //decrease amount
    const decreaseAmount = (id) => {
        const cartItems = cart.find((item) => item.id === id);

        if (cartItems) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItems.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        if (cartItems.amount < 2) {
            removeFromCart(id);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                increaseAmount,
                decreaseAmount,
                itemAmount,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
