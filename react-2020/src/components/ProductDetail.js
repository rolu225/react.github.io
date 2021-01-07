import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Product from '../components/Product'


export default class ProductDetail extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, name, price, image, description, category} = value.detailProduct;
                    return(
                        <h1>{name}</h1>
                    )
                }}
            </ProductConsumer>
        )
    }
}

