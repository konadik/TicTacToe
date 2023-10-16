import React, {Component} from 'react';
const Cart = (props) => {

    return (
        <div className="bg-darker-green flex-col space-y-3 h-screen w-screen flex items-center justify-center">
            {props.children}
        </div>
    );

}

export default Cart;
