import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <Link to='/cart'>Cart</Link>
        </div>
    )
}

export default Navbar;
