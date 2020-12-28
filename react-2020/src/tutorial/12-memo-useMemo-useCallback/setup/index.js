import React, {useState, useEffect, useCallback, useMemo} from 'react'
import {useFetch} from './index/call'
import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Switch} from 'react-router-dom'
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
          <Switch>
              <Route exact path="/">
                <Redirect to='/dash' />
              </Route>
<<<<<<< HEAD
              {/* <Route path='/cart' component={Cart}/> */}
              <Route path='/dash' render={() => <BigList cart={cart} products={products} addToCart={addToCart} />} />
=======
              <Route path='cart' exact component={Cart}>
                <Product />
              </Route>
>>>>>>> 7e64a8b9fe5379736c9652b8212900128b56d847
          </Switch>
      </Router>
      {/* <div>
        <BigList products={products} addToCart={addToCart} />
      </div> */}
    </>
  )
}

const BigList = React.memo(({ products, addToCart, cart }) => {
  return (
    <div className='products'>
      <div className='fixNav'>
        <h1>cart: {cart}</h1>
      </div>
      {products.map((product) =>{
        return(
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        )
      })}
    </div>
  );
})

export const SingleProduct = ({fields, addToCart}) => {
  let {name, price} = fields
  price = price 
  const image = fields.image[0].url
  return (
      <section className='btn product'>
            <Link to='/product/1'>
        <div>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <h4>${price}</h4>
        </div>
            </Link>
        <section>
          <button onClick={addToCart} className="btnn">Add to card</button>
        </section>
      </section>
  )
}

export default Index
