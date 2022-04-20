import React from 'react'
import './Checkout.css'

export default function Checkout() {

  // Example of current order in progress
  const currentOrderInProgress = true;
  var currentOrder;
  if (currentOrderInProgress) {
    currentOrder = {
      'id': '934rjfe',
      'store': 'store1',
      'items': ['chips', 'chips'],
      'timeToProcess': 4
    }
  }

  const viewCurrentOrderDetails = () => {

  }

  return (
    <div>
      <div>
        {currentOrderInProgress && 
          <div id='currentOrder'>
            <h1>Current Order</h1>
            <h2>{currentOrder['store']}</h2>
            <h2>{currentOrder['timeToProcess']}</h2>
            <button onClick={viewCurrentOrderDetails}>View Details</button>
          </div>
        }
      </div>
      
      <h1 className='title'>Past Orders</h1>
    </div>
  )
}
