import React, { useContext } from 'react'

import AppContext from '../context/appContext'
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress'
import '../styles/components/Success.css';

const Success = () => {
  const {state} = useContext(AppContext)
  const {buyer} = state
  let address = 'platzi'
  if(buyer.length > 0)
    address = buyer[0].address
  const location = useGoogleAddress(address)
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  )
}

export default Success
