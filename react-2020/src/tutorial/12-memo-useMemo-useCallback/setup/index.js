import React, {useState, useEffect, useCallback, useMemo} from 'react'
import {useFetch} from './index/call'
import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Switch} from 'react-router-dom'
import {Auth} from 'react-use-auth'
//PAGE
import Product from './Product'
import Cart from './Cart'
import Navbar from './Navbar'

const url = 'https://course-api.com/javascript-store-products'

const Index = () => {
  const {products} =useFetch(url)
  const [cart, setCart] = useState(0)

  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])
  
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
              <Route path='cart' exact component={Cart}>
                <Cart />
              </Route>
              <Route path='cart' exact component={Cart}>
                <Product />
              </Route>
          </Switch>
      </Router>
      <div className='fixNav'>
        <h2>cart: {cart}</h2>
      </div>
      <br/>
      <div>
        <BigList products={products} addToCart={addToCart} />
      </div>
    </>
  )
}

const BigList = React.memo(({ products, addToCart }) => {
  return (
    <section className='products'>
      {products.map((product) =>{
        return(
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        )
      })}
    </section>
  );
})

export const SingleProduct = ({fields, addToCart}) => {
  let {name, price} = fields
  price = price 
  const image = fields.image[0].url
  return (
    <section className='btn product'>
      <a href={`/product/${name}`} >
        <img  src={image} alt={name} />
        <h3>{name}</h3>
        <h4>${price}</h4>
      </a>
      <section>
        <button onClick={addToCart} className="btnn">Add to card</button>
      </section>
    </section>
  )
}

export default Index
