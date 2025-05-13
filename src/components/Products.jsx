/* eslint-disable react/prop-types */
import './Products.css';
import {AddToCartIcon, RemoveFromCartIcon} from './Iconos.jsx';
import React from 'react';
import { useCart } from '../hooks/useCart.js';

export function Products ({ products }) {
    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductsInCar = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className="products">
            <ul>
                {products.slice(0,100).map(product=> {
                    const isProductInCart = checkProductsInCar(product)
                    return (
                    <li key={product.id} title={product.description}>
                        <strong>{product.title}</strong>
                        <img src={product.thumbnail} alt={product.title} />
                        <p className='description'>{product.description}</p>
                        <div className='product-footer'>
                            <p className='price'>${product.price}</p>
                            <button className={`button ${isProductInCart ? 'in-cart' : 'not-in-cart'}`} onClick={() => {
                                isProductInCart 
                                    ? removeFromCart(product) 
                                    : addToCart(product)
                            }}>
                                Add to cart {
                                    isProductInCart 
                                    ? <RemoveFromCartIcon /> 
                                    : <AddToCartIcon />
                                }
                            </button>
                        </div>
                    </li>
                )})}
            </ul>
        </main>
    )
}