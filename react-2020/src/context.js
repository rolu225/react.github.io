import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        // modalOpen: true,
        // modalProduct: detailProduct,
        cartSubTotal: 0,
        deliveryCharge: 0,
        cartTotal: 0,
    };
    componentDidMount() {
        this.setProducts(); 
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(()=>{
            return {products: tempProducts}
        })
    }
    getItem = id => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    };
    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    };
    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        const price = product.price;
        product.total = price;
        product.count = 1;
        // const company = product.company;
        // const category = product.category;
        this.setState(()=>{
            return {product: tempProducts, cart: [...this.state.cart, product]}
        }, ()=>{
            this.addTotal();
        })
    };
    //
    openModal = id => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct: product, modalOpen: true}
        })
    };
    //
    closeModal = () => {
        this.setState(()=>{
            return {modalOpen: false}
        })
    };
    plus = id => {
        let temp = [...this.state.cart];
        const selected = temp.find(item => item.id === id);
        const index = temp.indexOf(selected);
        const product = temp[index]

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(()=>{
            return {cart: [...temp]}
        },()=>{
            this.addTotal();
        })
    }
    minus = id => {
        let temp = [...this.state.cart];
        const selected = temp.find(item => item.id === id);
        const index = temp.indexOf(selected);
        const product = temp[index];
        product.count = product.count - 1;

        if(product.count === 0){
            this.remove(id);
        } else {
            product.total = product.count * product.price;
            this.setState(()=>{
                return {cart: [...temp]}
            },()=>{
                this.addTotal();
            })
        }
        
    };
    remove = id => {
        let tempProducts = [...this.state.products];
        let temp = [...this.state.cart];

        temp = temp.filter(item => item.id === id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removeProduct = tempProducts[index];

        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState(()=>{
            return {
                card: [...temp],
                products: [...tempProducts]
            }
        },()=>{
            this.addTotal();
        })
    };
    clear = () => {
        this.setState(()=>{
            return {cart: []};
        },()=>{
            this.setProducts();
            this.addTotal();
        })
    };
    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item =>(subTotal += item.total));
        const sub = subTotal * 0.01;
        const deli = parseFloat(sub.toFixed(2));
        const total = subTotal + deli;
        this.setState(()=>{
            return {
                cartSubTotal: subTotal,
                deliveryCharge: deli,
                cartTotal: total,
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                plus: this.plus,
                minus: this.minus,
                remove: this.remove,
                clear: this.clear
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
