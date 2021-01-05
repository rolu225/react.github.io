import React from 'react'
import {Link} from 'react-router-dom'
import {App} from '../../App'

const ProductInfo = () => {
    return (
        <div>
            <h4>Name: <b>Name</b></h4>
            <h4>Price: <b>Sold</b></h4>
            <h4>Desciption: <p>Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting indLorem Ipsum is simply dummy text of the printing and typesetting indindustry.</p>
                
            </h4>
            <div id='button-cart' style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={addToCart} className='btn btn-danger'>
                    Add To Cart
                </button>
                <Link to='/' className='btn'>
                    <button >
                        Back
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProductInfo
