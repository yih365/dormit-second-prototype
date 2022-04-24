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

  // Example of past orders
  var chip1 = {
    'name': 'chip'
  }
  var chip2 = {
    'name': 'chip2'
  }
  var orders = [];
  orders.push({
    'items': [chip1, chip2],
    'date': 'March 21 at 08:05pm',
    'price': 11.55,
    'item names': 'chip1, chip2'
  });
  orders.push({
    'items': [chip1],
    'date': 'March 22 at 8:05pm',
    'price': 5.00,
    'item names': 'chip1'
  });

  const viewCurrentOrderDetails = () => {

  }

  return (
    <div>
      {/* current order in progress box */}
      <div>
        {currentOrderInProgress && 
          <div id='currentOrder'>
            <h1 id='currentOrderTitle'>Current Order</h1>
            <h2 id='mini1'>{currentOrder['store']}</h2>
            <h2 id='mini2'>{currentOrder['timeToProcess'] + ' mins'}</h2>
            <button id='viewDetails' onClick={viewCurrentOrderDetails}>View Details</button>
          </div>
        }
      </div>
      
      <div className='title'>
        <h1 id='pastOrdersTitle'>Past Orders</h1>
      </div>

      {/* for each past order box */}
      <div className='orders'>
        {orders.map((order, index) => {
          return (
            <div className='order'>
              <div className='images'>
               </div>
              
              <div className='info'>
              <p className='itemNames'>{order['item names']}</p>
              <p className='orderDesc'>
                {order['date']}
                <br/>
                {'$' + order['price'] + ' - ' + order['items'].length + ' items'}
                <br/>
                Complete
              </p>
              <br/>
              <button className='reorder'>Reorder</button>
              <button className='help'>Help</button>
              </div>
            <br/>
            </div>
          );
        })}
        <br/>
      </div>

    </div>
  )
}
