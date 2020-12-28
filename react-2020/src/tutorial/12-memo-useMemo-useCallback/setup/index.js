import React, {useState, useEffect, useCallback} from 'react'
// import {useFetch} from './index/Call'
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
//PAGE

const url = 'https://course-api.com/javascript-store-products'

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const getProducts = useCallback(async () => {
      const response = await fetch(url);
      const products = await response.json();
      setProducts(products);
      setLoading(false);
  }, [url]);

  useEffect(() => {
      getProducts();
  },[url, getProducts])
  return {loading, products};
}

const Index = () => {
  const {products} =useFetch(url)
  const [cart, setCart] = useState(0)

  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to='/dashboard' />
          <Redirect to='/product' />
        </Route>
        <Route path='/dashboard' render={() => <BigList cart={cart} products={products} addToCart={addToCart} />} />
      </Switch>
    </Router>
  )
}

const BigList = React.memo(({ products, addToCart, cart }) => {
  return (
    <div>
      <div className='fixNav'>
        <h1>cart:{cart}</h1>
      </div>
      <br/>
      <div className='products'>
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
    </div>
  );
})

export const SingleProduct = ({fields, addToCart}) => {
  let {name, price} = fields
  price = price / 100;
  const image = fields.image[0].url
  return (
    <section className='product btn'>
        <Link to={`/product/${name}`}>
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
