import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button'

import AppContext from '../context/appContext'
import '../styles/components/Payment.css';

const Payment = () => {
  const {state, addNewOrder} = useContext(AppContext)
  const {cart, buyer} = state
  const history = useHistory()

  const paypalOptions = {
    clientId: 'AeKTgLU1Hgz1YZof6wxSCueC55BH9-B4BrQe0UbI2PizoY1DejyGCTjLiO4JDYcQ9MHAqfyHGI4dp3it',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handleTotal = () => {
    const reducer = (acc, currentValue) => acc + currentValue.price
    const total = cart.reduce(reducer, 0)
    return total
  }

  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      }
      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className='Payment-item' key={item.title}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>{`$${item.price}`}</span>
            </div>
          </div>
        ))}
        <div className='Payment-item'>
          <div className='Payment-element'>
            <h4>Total:</h4>
            <span>{`$${handleTotal()}`}</span>
          </div>
        </div>
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleTotal()}
            onPaymentStart={() => console.log('payment start')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(err) => console.error(err)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  )
}

export default Payment
