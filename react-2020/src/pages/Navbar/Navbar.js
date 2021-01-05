import React from 'react'
import {BrowserRouter as Route, Link} from 'react-router-dom'
import Cart from '../Cart/Cart'

export const Navbar = () => {
    <Route path='/cart'>
        <Cart/>
    </Route>
    return (
        <nav  id='fixNav' className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
            <Link to='/'>
                <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' 
                alt="store" 
                className="navbar-brand"
                style={{width:'7%', height:'7%'}}
                />
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5" style={{color: 'lightgrey'}}>
                        <h3 id='dashboard' style={{
                            fontFamily: 'initial',
                            margin: '24px 0 24px 5px'
                        }}>dashboard</h3>
                    </li>
                </ul>
            </Link>
            <Link to='/cart' className="ml-auto">
                <button style={{
                    float: 'right', 
                    width: '80px', 
                    height: '40px', 
                    margin: '18px 18px 11px 0', 
                    fontSize: '19px', 
                    padding: '4px 3px 0 0',
                    borderRadius: '6px',
                }}>
                    <i className="glyphicon glyphicon-shopping-cart"></i>
                </button> 
            </Link>
        </nav>
    )
}

export default Navbar
