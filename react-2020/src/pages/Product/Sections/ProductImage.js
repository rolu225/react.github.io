import React from 'react'

const url1 = 'https://instagram.fvca1-1.fna.fbcdn.net/v/t51.2885-15/e35/31496128_2092168231036820_7185453202144231424_n.jpg?_nc_ht=instagram.fvca1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=jTbudIRGl6AAX_HbuX0&tp=1&oh=76e88acc9a301c95a1b5281443c1a42c&oe=60150445';

const ProductImage = () => {
    return (
        <div>
            <img className="img1" src={url1} alt='lnt' width='100%' height='100%'/>
        </div>
    )
}

export default ProductImage
