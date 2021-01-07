import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to='/'>
                    <ul className="">
                        <li className="" style={{color: 'lightgrey'}}>
                            <h3 id='' style={{
                                marginLeft: '35px'
                            }}>dashboard</h3>
                        </li>
                    </ul>
                </Link>
                <Link to='/cart' className="ml-auto">
                    <button style={{
                        width: '88px', 
                        height: '35px', 
                        margin: '10px 0 10px 0', 
                        fontSize: '20px',
                        borderRadius: '7px',
                        background: 'transparent',
                        color: 'black'
                    }}>
                        <i className="glyphicon glyphicon-shopping-cart">cart</i>
                    </button> 
                </Link>
            </nav>
        )
    }
}
