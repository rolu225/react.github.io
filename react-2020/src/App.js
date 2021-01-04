import React, {useState, useEffect, useCallback} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import Product from './pages/Product/Product'
//PAGE

const url = 'https://course-api.com/react-store-products' /*'https://course-api.com/javascript-store-products'*/

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
        <Route exact path='/dashboard' render={() => <BigList cart={cart} products={products} addToCart={addToCart} />} />
        <Route path='/product'>
          <Product />
        </Route>
        <Route path='/*'>
          <Error />
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
        <button type="button" className="btn btn-success" >
          <span className="glyphicon glyphicon-shopping-cart">{cart}</span>
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

const SingleProduct = ({name, price, image,/*fields,*/ addToCart}) => {
  // let {name, price} = fields
  price = price / 1000;
  // const image = fields.image[0].url
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

// //detail
// const Product = () => {
//   return (
//       <div style={{width: '100%', height: '100%', padding: '1.8rem 4rem'}}>
//           <div style={{display: 'flex', justifyContent: 'center'}}>
//               <h1>Product Detail</h1>
//           </div>
//           <br/>
//           <div>
//               <div className='product-img' style={{width: '47%', float: 'left'}}>
//                   <ProductImage />
//               </div>
//               <br/>
//               <div className="product-info" style={{width: '53%', float: 'right'}}>
//                   <ProductInfo />
//               </div>
//           </div>
//       </div>
//   )
// }

// //img
// const url1 = 'https://instagram.fvca1-1.fna.fbcdn.net/v/t51.2885-15/e35/31496128_2092168231036820_7185453202144231424_n.jpg?_nc_ht=instagram.fvca1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=jTbudIRGl6AAX_HbuX0&tp=1&oh=76e88acc9a301c95a1b5281443c1a42c&oe=60150445';
// const ProductImage = () => {
//     return (
//         <div>
//             <img className="img1" src={url1} alt='lnt' width='100%' height='100%'/>
//         </div>
//     )
// }

// //info
// const ProductInfo = () => {
//   return (
//       <div>
//           <h4>Price: <b>Price</b></h4>
//           <h4>Status: <b>Sold</b></h4>
//           <h4>Desciption: <p>Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting indLorem Ipsum is simply dummy text of the printing and typesetting indindustry.</p>
              
//           </h4>
//           <div id='button-card' style={{display: 'flex', justifyContent: 'center'}}>
//               <button className='btn btn-danger'>
//                   Add To Card
//               </button>
//               <Link to='/' className='btn'>
//                   <button>
//                       Back
//                   </button>
//               </Link>
//           </div>
//       </div>
//   )
// }

function Error() {
  return(
    <div style={{paddingTop: '200px', fontSize: '80px'}}>
      <p style={{textAlign: 'center'}}>Page not found</p>
    </div>
  )
}

export default App
