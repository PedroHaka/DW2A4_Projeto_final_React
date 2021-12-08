import React from 'react';
import data from './data.js';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="./index.html">Tech-Commerce</a>
        </div>
        <div>
          <a href="./cart.html">Cart</a>
          <a href="./signin.html">Sign In</a>
        </div>
      </header>
      <main className="main">
        <div>
          <div className="row center">
            {
              data.products.map((product) => {
                 return <div key={product.id} className="card">
              <a href={`./product/${product._id}`}>
                <img 
                  className="medium" 
                  src={product.image} 
                  alt={product.name} 
                />
              </a>
              <div className="card-body">
                <a href={`./product/${product._id}`}>
                  <h2 className="productName">{product.name}</h2>
                </a>
                <div className="rating">
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                </div>
                <div className="price">R$&nbsp;{product.price}</div>
              </div>
            </div>;
              })
            }
          </div>
        </div>
      </main>
      <footer className="row center">
        All rights reserved.
      </footer>
    </div>
  );
}

export default App;
