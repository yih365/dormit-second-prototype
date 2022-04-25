import React from 'react';
import './Help.css'

function Help(props) {
    const closePage = () => {
        props.setTrigger(false);
    }

    return (props.trigger) ? (
        <div className='helpPage'>
            <div className='topBar'>
                <button className='back-btn' onClick={closePage}>{'<'}</button>
                <h3 id='title'>Help</h3>
            </div>
            
            <div className='faq'>
                <h1>FAQ</h1>
                <div className='rows'>
                    <div className='columns'>
                        <h2>How Dormit Works</h2>
                        <p>How does Dormit work?</p>
                        <p>How does Dormit work?</p>
                        <p>How does Dormit work?</p>
                        <p>How does Dormit work?</p>

                    </div>
                    <br/>

                    <div className='columns' id='yourOrders'>
                        <h2>Your Orders</h2>
                        <p>What happened to my order?</p>
                        <p>What happened to my order?</p>
                        <p>What happened to my order?</p>
                        <p>What happened to my order?</p>

                    </div>
                    <br/>

                    <div className='columns' id='otherQs'>
                        <h2>Other Questions</h2>
                        <p>What is going on?</p>
                        <p>What is going on?</p>
                        <p>What is going on?</p>
                        <p>What is going on?</p>

                    </div>
                </div>
            </div>

            <div className='contact'>
                <h2 id='question'>Still can't find what you're looking for?</h2>
                <p id='call'>Give us a call at <a href ="url">XXX-XXX-XXX</a></p> 
            </div>
        </div>
    ) : "";
}

export default Help