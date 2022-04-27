import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CurrentOrder.css';

function CurrentOrder(props) {
    const closePage = () => {
        props.setTrigger(false);
    }

    const cancelOrder = () => {

    }

    // For progress bar
    var progressPercent = 0;
    switch (props.orderInfo['progress']) {
        case 1:
            progressPercent = 10;
            break;
        case 2:
            progressPercent = 43;
            break;
        case 3:
            progressPercent = 76;
            break;
        case 4:
            progressPercent = 100;
            break;
    }

    return (props.trigger) ? (
        <div className='currentOrder' style={{height:document.documentElement.scrollHeight+'px'}} >
            <div className='topBar'>
                <h2 id='title'>My Cart</h2>
                <br/>
                <button className='close' onClick={closePage}>X</button>
            </div>
            <br/>
            <br/>
            <br/>
            <hr id='line'/>

            {/* section showing items ordered */}
            <div className='orderItems'>
                <div className='top'>
                    <h3 id='title'>Current Order</h3>
                    <br/>
                    <p id='dateAndItems'>{props.orderInfo['date'] + ' - ' + Object.keys(props.orderInfo['items']).length + ' items'}</p>
                </div>

                <div className='items'>
                    {props.orderInfo['items'].map((item, i) => {
                        return (
                            <div className='item'>
                                <h1 className='text'>{props.orderInfo['amount'][i] + ' x '}</h1>
                                <br/>
                                <p className='image'> </p>
                                <br/>
                                <h1 className='text'>{item}</h1>
                            </div>
                        );
                    })}
                </div>
            <hr/>
            </div>

            {/* delivery progress */}
            <div className='deliveryProgress'>
                <h3>Delivery Progress</h3>

                <ProgressBar now={progressPercent}/>

                <div className='labels'>
                    <p id='progress1'>Order Placed</p>
                    <p id='progress2'>Order picked up by Rusher</p>
                    <p id='progress3'>Rusher on their way</p>
                    <p id='progress4'>Order Received</p>
                </div>

                <div className='arrival'>
                    <h3 id='arrivingInText'>{'Arriving in ' + props.orderInfo['timeToProcess'] + ' min'}</h3>
                    <button id='cancel' onClick={cancelOrder}>Cancel</button>
                </div>
            </div>

        </div>
    ) : "";
}

export default CurrentOrder