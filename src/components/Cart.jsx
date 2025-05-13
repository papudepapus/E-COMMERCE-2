/* eslint-disable react/prop-types */
import {ClearCartIcon, CartIcon} from './Iconos.jsx'
import React from 'react'
import { useId } from 'react'
import './Cart.css';
import { useCart } from '../hooks/useCart.js';


function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
        return (
            <li>
                <img src={thumbnail} alt={title} />
                <div>
                    <strong>{title}</strong> -${price}
                </div>
                <footer>
                    <small>
                        Qty: {quantity}
                    </small>
                    <button onClick={addToCart}>+</button>
                </footer>
            </li>
        )
    }

export function Cart () {
    const cartCheckboxId = useId()
    const {cart, clearCart, addToCart} = useCart()

    return (
        <>
            <label htmlFor={cartCheckboxId} className='cart-button'>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />
            <aside className='cart'>
                <h1>Shopping Cart</h1>
                <ul>
                    {cart.map(product => (
                        <CartItem 
                            key={product.id} 
                            addToCart={() => addToCart(product)}
                            {...product} />
                    ))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}