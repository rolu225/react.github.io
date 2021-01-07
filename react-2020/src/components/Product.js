import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const { name, price, image, description, category } = this.props.product
        return (
            <div className="products">
                <Link to='/detail'>
                    <img src={image} alt={name} width='50%' />
                    <h3>{name}</h3>
                    <h4>${price}</h4>
                </Link>
                <div>
                    <button className='btn'>Add to card</button>
                </div>
            </div>
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
