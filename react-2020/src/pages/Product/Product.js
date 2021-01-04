import React from 'react'
import ProductImage from './Sections/ProductImage'
import ProductInfo from './Sections/ProductInfo'

const Product = () => {
    return (
        <div style={{width: '100%', height: '100%', padding: '1.8rem 4rem'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1>Product Detail</h1>
            </div>
            <br/>
            <div>
                <div className='product-img' style={{width: '47%', float: 'left'}}>
                    <ProductImage />
                </div>
                <br/>
                <div className="product-info" style={{width: '53%', float: 'right'}}>
                    <ProductInfo />
                </div>
            </div>
        </div>
    )
}

export default Product

