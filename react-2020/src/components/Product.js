import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const { id, name, price, image } = this.props.product
        return (
            <ProductConsumer>
                {(value) => (
                    <div onClick={()=> {value.handleDetail(id)}} className="products">
                        <Link to='/detail'>
                            <img src={image} alt={name} width='50%' />
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>
                        </Link>
                        <div>
                            <button onClick={()=>{
                                value.addToCart(id);
                            }} className='btn'>Add to card</button>
                        </div>
                    </div>
                )}

            </ProductConsumer>

        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        category: PropTypes.string,
    }).isRequired
}
