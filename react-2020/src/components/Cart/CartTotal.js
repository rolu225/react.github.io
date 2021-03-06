import React from 'react'
// import {Link} from 'react-router-dom'
import PayPalButton  from './PayPal'

export default function CartTotal({value, history}) {
    const{cartSubTotal, deliveryCharge, cartTotal, clear} = value;
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div>
                        <button 
                            className='btn btn-outline-danger text-uppercase mb-3 px-5' 
                            type='button' 
                            onClick={() =>clear()}
                        >
                            Clear
                        </button>
                        <h5>
                            <span className='text-title'>Sub-total: </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className='text-title'>Delivery-charge: </span>
                            <strong>$ {deliveryCharge}</strong>
                        </h5>
                        <h5>
                            <span className='text-title'>Total: </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <PayPalButton 
                            total={cartTotal} 
                            clear={clear}
                            history={history}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
