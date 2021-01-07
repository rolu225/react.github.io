import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'

export default class ProductList extends Component {
    render() {

        return (
            <React.Fragment>
                <div>
                    <div> 
                        <Title/>
                    </div>
                    <div>
                    <ProductConsumer>
                        {value => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product} />
                            })
                        }}
                    </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
