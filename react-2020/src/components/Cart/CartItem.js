import React from 'react'

export default function CartItem({item, value}) {
    const {id, name, price, image, count, total} = item ;
    const {plus, minus, remove} = value ;

    return (
        <div className='row my-1 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2 article'>
                <img className='thumb' src={image} alt='product' style={{
                    width:'5rem%',
                    height:'5rem',
                    marginBottom: '15px',
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    // backgroundRepeat: 'no-repeat'
                }} />
            </div>
            <div className='col0 mx-auto col-lg-2'>
                <span className='d-lg-none'>{name}</span>
            </div>
            <div className='col0 mx-auto col-lg-2'>
                <span className='d-lg-none'>$ {price}</span>
            </div>
            <div className='col0 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className='flex justify-content-center'>
                    <span onClick={()=>{minus(id)}} className='btn btn-black mx-1' >
                    -
                    </span>
                    <span className='btn btn-black mx-1'>{count}</span>
                    <span onClick={()=>{plus(id)}} className='btn btn-black mx-1' >
                    +
                    </span>
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <strong>$ {total}</strong>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <div className='cart-icon' onClick={()=>{remove(id)}}>
                    <i className='glyphicon glyphicon-trash'/>
                </div>
            </div>
        </div>
    )
}
