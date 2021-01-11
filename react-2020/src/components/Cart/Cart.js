import React, { Component } from 'react'
import CartColumns from './CartColumns'
import CartEmpty from './CartEmpty'
import CartTotal from './CartTotal'
import {ProductConsumer} from '../../context';
import CartList from './CartList'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer> 
                    {value=>{
                        const {cart} = value;
                        if (cart.length > 0){
                            return(
                                <React.Fragment>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotal value={value} history={this.props.history} />
                                </React.Fragment>
                            );
                        } else {
                           return <CartEmpty />
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
