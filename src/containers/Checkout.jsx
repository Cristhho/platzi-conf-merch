import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../context/appContext'
import '../styles/components/Checkout.css'

const Checkout = () => {
  const {state, removeFromCart} = useContext(AppContext)
  const {cart} = state

  const handleRemove = (product) => {
    removeFromCart(product)
  }

  const handleTotal = () => {
    const reducer = (acc, currentValue) => acc + currentValue.price
    const total = cart.reduce(reducer, 0)
    return total
  }

  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        <h3>{cart.length > 0 ? 'Lista de productos:' : 'No ha agregado productos al carrito'}</h3>
        {cart.map((item) => (
          <div className='Checkout-item'>
            <div className='Checkout-element'>
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type='button' onClick={() => handleRemove(item)}>
              <i className='fas fa-trash-alt' />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className='Checkout-sidebar'>
          <h3>{`Total: $${handleTotal()}`}</h3>
          <Link to='/checkout/info'>
            <button type='button'>Continuar</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Checkout
