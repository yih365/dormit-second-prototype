import React from 'react';
import './CurrentOrder.css';

function CurrentOrder(props) {
    console.log(props.CurrentOrder);
    const closePage = () => {
        props.setTrigger(false);
    }

    return (props.trigger) ? (
        <div className='currentOrder'>
            <div className='topBar'>
                <h1>My Cart</h1>
                <br/>
                <button className='close' onClick={closePage}>X</button>
            </div>

            <div className='orderItems'>
                <div className='top'>
                    <h3 id='title'>Current Order</h3>
                    <br/>
                    <p id='dateAndItems'>{props.orderInfo['date'] + ' - ' + props.orderInfo['items'].length + ' items'}</p>
                </div>

                <div className='items'>

                </div>
            </div>

            <div className='deliveryProgress'>
                <h3>Delivery Progress</h3>


                <h3>{'Arriving in ' + props.orderInfo['timeToProcess'] + ' min'}</h3>
            </div>

        </div>
    ) : "";
}

export default CurrentOrder