import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to='/'>
                    <div style={{color: 'lightgrey'}}>
                        <h3 id='' style={{
                            marginLeft: '25px',
                            marginBottom: '-10px',
                            marginTop: '20px',
                        }}>dashboard</h3>
                    </div>
                </Link>
                <Link to='/cart' className="ml-auto">
                    <ButtonCart>
                        <i className="glyphicon glyphicon-shopping-cart">cart</i>
                    </ButtonCart> 
                </Link>
            </nav>
        )
    }
}

export const ButtonCart = styled.button`
    width: 88px;
    height: 35px;
    margin: 10px 0 10px 0;
    font-size: 20px;
    border-radius: 7px;
    color: white;
    background: transparent;
    margin-top: -18px;
    margin-right: 25px;
    margin-bottom: 17px;
    float: right;

    :hover{
        background: var(--mainYellow);
        color: var(--LightBlue);
`