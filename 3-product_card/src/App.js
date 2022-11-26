import './App.css';
import productImage from "./assets/image-product-desktop.jpg";
import cartIcon from "./assets/icon-cart.svg";

function App() {
  return (
    <>
    <div className="main">
      <div className="product-card">
        <div className="card">
            <img src={productImage} alt="product"/>
            <div className="card-content">
              <div className="tag">Perfume</div>
              <div className="title">Gabrielle Essence Eau De Parfum</div>
              <div className="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</div>
              <div className="price">
                <div className="discounted-price">$149.99</div>
                <div className="original-price"><s>$169.99</s></div>
              </div>
              
              <button className="button"><img className="cart-img" src={cartIcon} alt="cart-icon"/>Add to Cart</button>
              
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
