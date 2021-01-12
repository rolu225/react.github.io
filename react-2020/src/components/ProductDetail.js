import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'


export default class ProductDetail extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, name, price, image, description, inCart } = value.detailProduct;
                    return(
                        <div style={{width: '100%', height: '100%', padding: '1.8rem 4rem'}}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <h1>{name}</h1>
                            </div>
                            <br/>
                            <div>
                                <div className='product-img' style={{width: '47%', float: 'left'}}>
                                    <img className='img' src={image} alt='lnt' width='88%' />
                                </div>
                                <div className='product-info' style={{width: '53%', float: 'right'}}>
                                    <h4>Name: <b>{name}</b></h4>
                                    <h4>Price: <b>$ {price}</b></h4>
                                    <h4>Description: <p>{description}</p>
                                    </h4>
                                    <div id='button-card'>
                                        <Link to='/'>
                                            <button className='btn btn-success'>
                                                go to shopping
                                            </button>
                                        </Link>
                                        <button 
                                            disabled={inCart ? true : false}
                                            onClick={()=>{
                                                value.addToCart(id); 
                                                value.openModal(id) }} 
                                            className='btn btn-danger'
                                        >
                                            {inCart ? "in cart" : "add to cart"} 
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

