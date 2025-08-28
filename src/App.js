import { useState } from 'react';
import "./style.css";

// Use a simple data structure for the bakery products.
const productsData = [
  {
    id: 1,
    name: 'Cinnamon Swirl',
    type: 'sweet',
    description: 'A delicate and warm bread with rich swirls of cinnamon and sugar.',
    longDescription: 'Our signature Cinnamon Swirl is made with a secret family recipe. Each loaf is hand-braided and generously filled with a blend of ground cinnamon and brown sugar, creating a perfect balance of sweetness and spice. It\'s the perfect treat for breakfast or a cozy afternoon.',
    imageUrl: 'https://placehold.co/600x450/ffedd5/634f3b?text=Cinnamon+Swirl',
    price: 4.50
  },
  {
    id: 2,
    name: 'Artisan Sourdough',
    type: 'salty',
    description: 'Crusty on the outside, soft and chewy on the inside. Perfect for sandwiches.',
    longDescription: 'Slow-fermented for over 24 hours, our Artisan Sourdough develops a deep, tangy flavor and a satisfyingly crunchy crust. Its airy interior is ideal for soaking up soups or pairing with your favorite cheeses.',
    imageUrl: 'https://placehold.co/600x450/e9d8a6/634f3b?text=Sourdough',
    price: 6.00
  },
  {
    id: 3,
    name: 'Chocolate Brioche',
    type: 'sweet',
    description: 'Buttery, soft brioche filled with chunks of decadent dark chocolate.',
    longDescription: 'This decadent Brioche is a true indulgence. We use premium butter and eggs to create a rich, tender crumb, then fold in generous chunks of high-quality dark chocolate that melt perfectly when baked.',
    imageUrl: 'https://placehold.co/600x450/fecaca/634f3b?text=Chocolate+Brioche',
    price: 5.50
  },
  {
    id: 4,
    name: 'Rosemary & Sea Salt',
    type: 'salty',
    description: 'A savory classic with a hint of fresh rosemary and flaky sea salt.',
    longDescription: 'A timeless savory bread, this loaf is infused with fresh rosemary and topped with large flakes of sea salt. Its aromatic flavor makes it a wonderful companion for olive oil dipping or as a base for bruschetta.',
    imageUrl: 'https://placehold.co/600x450/dbeafe/634f3b?text=Rosemary+Bread',
    price: 5.00
  },
  {
    id: 5,
    name: 'Lemon Poppy Seed',
    type: 'sweet',
    description: 'Light and zesty bread with a refreshing lemon glaze and poppy seeds.',
    longDescription: 'Our Lemon Poppy Seed bread is a burst of sunshine in every bite. The bright, citrusy flavor from fresh lemons is balanced by the subtle crunch of poppy seeds and topped with a sweet, tangy glaze.',
    imageUrl: 'https://placehold.co/600x450/fef08a/634f3b?text=Lemon+Bread',
    price: 4.75
  },
  {
    id: 6,
    name: 'Olive Focaccia',
    type: 'salty',
    description: 'Soft, airy Italian bread topped with juicy olives and herbs.',
    longDescription: 'A taste of the Mediterranean! Our Focaccia is incredibly soft and dimpled, drizzled with olive oil, and studded with flavorful kalamata olives and a sprinkle of dried herbs. It\'s perfect for sharing with friends.',
    imageUrl: 'https://placehold.co/600x450/bfdbfe/634f3b?text=Focaccia',
    price: 5.25
  },
];

// Shopping cart component
const ShoppingCart = ({ cart, onClearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-text">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-details">
                  {item.quantity} x ${item.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <span className="cart-total-label">Total:</span>
            <span className="cart-total-value">${total.toFixed(2)}</span>
          </div>
          <button onClick={onClearCart} className="button clear-cart-button">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};


// ProductCard component to display a single product.
const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  return (
    <div className="product-card">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <button
            onClick={() => onViewDetails(product)}
            className="button view-details-button"
          >
            View Details
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="button add-to-cart-button-card"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// New component for displaying product details.
const ProductDetail = ({ product, onBack, onAddToCart }) => {
  return (
    <div className="product-detail-container">
      <button
        onClick={onBack}
        className="button back-button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="back-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Go Back
      </button>
      <div className="product-detail-content">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <h2 className="product-detail-title">{product.name}</h2>
          <p className="product-detail-subtitle">{product.description}</p>
          <p className="product-detail-text">{product.longDescription}</p>
          <div className="product-detail-actions">
            <button onClick={() => onAddToCart(product)} className="button add-to-cart-button">
              Add to Cart - ${product.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  // Filter products based on the active tab
  const filteredProducts = productsData.filter(product => {
    if (activeTab === 'all') {
      return true;
    }
    return product.type === activeTab;
  });

  // Function to handle viewing product details
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  // Function to go back to the product list
  const handleGoBack = () => {
    setSelectedProduct(null);
  };

  // Function to add a product to the cart
  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to clear the cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Conditionally render the product detail page or the main list
  const renderContent = () => {
    if (selectedProduct) {
      return <ProductDetail product={selectedProduct} onBack={handleGoBack} onAddToCart={handleAddToCart} />;
    }

    return (
      <>
        {/* Navigation/Filter Tabs */}
        <nav className="nav-container">
          <button
            onClick={() => setActiveTab('all')}
            className={`nav-button ${activeTab === 'all' ? 'active' : ''}`}
          >
            All Breads
          </button>
          <button
            onClick={() => setActiveTab('sweet')}
            className={`nav-button ${activeTab === 'sweet' ? 'active' : ''}`}
          >
            Sweet Breads
          </button>
          <button
            onClick={() => setActiveTab('salty')}
            className={`nav-button ${activeTab === 'salty' ? 'active' : ''}`}
          >
            Salty Breads
          </button>
        </nav>

        {/* Products Grid */}
        <section className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} onAddToCart={handleAddToCart} />
          ))}
        </section>
      </>
    );
  };

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1 className="main-title">The Daily Dough</h1>
          <p className="subtitle">Freshly baked, just for you.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {renderContent()}
          {cart.length > 0 && <ShoppingCart cart={cart} onClearCart={handleClearCart} />}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} The Daily Dough. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
