import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'
import CurrentOrder from './CurrentOrder';
import Help from './Help';

export default function Checkout() {

  // Example of current order in progress
  const currentOrderInProgress = true;
  var currentOrder = {
    'id': '934rjfe',
    'store': 'store1',
    'items': ['chips', 'chips2'],
    'amount': [1, 2],
    'timeToProcess': 4,
    'date': 'March 23 at 8:05pm',
    'progress': 3
  };

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
  orders.push({
    'items': [chip1],
    'date': 'March 22 at 8:05pm',
    'price': 5.00,
    'item names': 'chip1'
  });
  orders.push({
    'items': [chip1],
    'date': 'March 22 at 8:05pm',
    'price': 5.00,
    'item names': 'chip1'
  });

  // for view current order popup
  const [viewCurrentOrder, setViewCurrentOrder] = React.useState(false);
  const viewCurrentOrderDetails = () => {
    setViewCurrentOrder(true);
  }

  // for view FAQ popup
  const [viewHelp, setViewHelp] = React. useState(false);
  const viewHelpPage = () => { setViewHelp(true) };

  return (
    <div className='outsideBox'>
      {/* current order in progress box */}
      <div>
        {currentOrderInProgress && 
          <div id='currentOrder'>
            <h1 id='currentOrderTitle'>Current Order</h1>
            <div className='rowInfo'>
              <h2 id='mini1'>{currentOrder['store']}</h2>
              <h2 id='mini2'>{currentOrder['timeToProcess'] + ' mins'}</h2>
            </div>
            <button id='viewDetails' onClick={viewCurrentOrderDetails}>View Details {'>'}</button>
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
              <button className='help' onClick={viewHelpPage}>Help</button>
              </div>
            <br/>
            </div>
          );
        })}
      </div>

      <CurrentOrder trigger={viewCurrentOrder} setTrigger={setViewCurrentOrder} orderInfo={currentOrder}>
      </CurrentOrder>

      <Help trigger={viewHelp} setTrigger={setViewHelp}></Help>
    </div>
  )
}
