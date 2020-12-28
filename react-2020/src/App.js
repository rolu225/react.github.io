import React, {useState, useEffect, useCallback} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
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

const App = () => {
  const {products} = useFetch(url)
  const [cart, setCart] = useState(0)

  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to='/dashboard' />
        </Route>
        {/* <Route path="/product">
          <Redirect to='/product' />
        </Route> */}
        <Route exact path='/dashboard' render={() => <BigList cart={cart} products={products} addToCart={addToCart} />} />
        <Route path='/product'>
          <Product />
        </Route>
      </Switch>
    </Router>
  )
}

//nav  
const BigList = React.memo(({ products, addToCart, cart }) => {
  return (
    <div>
      <div id='fixNav'>
        <button type="button" className="btn btn-success" aria-label="Left Align" >
        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true">{cart}</span>
        </button> 
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

const SingleProduct = ({fields, addToCart}) => {
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
      <div>
        <button onClick={addToCart} className="btnn">Add to card</button>
      </div>
    </section>
  )
}

function Product() {
  return(
    <div>
      <h1>You just see this page! Sure <br/> That is product detail page.</h1>
    </div>
  )
}

export default App
