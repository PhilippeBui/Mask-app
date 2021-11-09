// Part 8 of https://youtu.be/TRCDsB9i3bI?t=4801
// React app: npm start
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Product from './components/Product';
import data from './data';

function App() {
  return (
<BrowserRouter>
    <div className="grid-container">
            <header className="row">
                <div >
                    <a className="brand" href="/"> Masks</a>
                </div>
                <div className= "header-links">
                    <a href="/cart"> Cart</a>
                    <a href="/signin"> Sign in</a>
                </div>
            </header>
            <main className= "main">
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/" component={HomeScreen} exact></Route>
                <div>
                    <div className="row center"> 
                    {data.products.map(product=> (
                    <Product key={product.id} product={product}></Product>
                    ))}
                </div> 
            </div>
            </main>
            <footer className= "row center">
                contact us
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
