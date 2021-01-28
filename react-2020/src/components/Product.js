import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const { id, name, price, image, inCart } = this.props.product
        const { scroll } = this.props;
        return (
            <ProductConsumer>
                {(value) => (<>
                    <div onClick={()=> {value.handleDetail(id)}} className="products">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-3 col-md-6'>
                                    <Link className='product_item product' to='/detail'>
                                        <img className='product_img' src={image} alt={name} width='50%' />
                                        <h3>{name}</h3>
                                        <h4>$ {price}</h4>
                                    </Link>
                                    <div>
                                        <button className='' onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }} className='btn' disabled={inCart ? true : false}>
                                            {inCart ? 
                                            (<p disabled>{" "} in cart</p>) : 
                                            (<p>add to cart</p>)}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='go-to-top'>
                        {scroll && (
                            <div onClick={() => this.scrollToTop()}>
                                up
                            </div>
                        )}
                    </div>
                </>)}

            </ProductConsumer>

        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        category: PropTypes.string,
        inCart: PropTypes.bool
    }).isRequired
}
