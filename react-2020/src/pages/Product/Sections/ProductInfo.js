import React from 'react'
import {Link} from 'react-router-dom'

const ProductInfo = () => {
    return (
        <div>
            <h4>Name: <b>Name</b></h4>
            <h4>Price: <b>Sold</b></h4>
            <h4>Desciption: <p>Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting indLorem Ipsum is simply dummy text of the printing and typesetting indindustry.</p>
                
            </h4>
            <div id='button-card' style={{display: 'flex', justifyContent: 'center'}}>
                <button className='btn btn-danger'>
                    Add To Card
                </button>
                <Link to='/' className='btn'>
                    <button>
                        Back
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProductInfo
