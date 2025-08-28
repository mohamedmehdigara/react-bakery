import { useState } from 'react';
import "./style.css";
// Use a simple data structure for the bakery products.


// Use a simple data structure for the bakery products.


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
  {
    id: 7,
    name: 'Cardamom Bun',
    type: 'sweet',
    description: 'A fragrant Swedish-style bun with a delicate, spiced filling.',
    longDescription: 'Our Cardamom Buns are a true taste of Scandinavia. Soft, pillowy dough is swirled with a fragrant paste of ground cardamom and sugar, finished with a sprinkle of pearl sugar for a delightful crunch.',
    imageUrl: 'https://placehold.co/600x450/fff7ed/634f3b?text=Cardamom+Bun',
    price: 4.25
  },
  {
    id: 8,
    name: 'Multigrain Loaf',
    type: 'salty',
    description: 'A hearty, dense loaf packed with a mix of seeds and grains.',
    longDescription: 'This wholesome Multigrain Loaf is a perfect everyday bread. It\'s made with a blend of whole wheat flour and a generous mix of sunflower, flax, and sesame seeds, giving it a rich texture and nutty flavor.',
    imageUrl: 'https://placehold.co/600x450/f0f9ff/634f3b?text=Multigrain+Loaf',
    price: 6.50
  },
  {
    id: 9,
    name: 'Citron Bread',
    type: 'fruit',
    description: 'A zesty and bright bread with candied citron.',
    longDescription: 'Our refreshing Citron Bread is a celebration of citrus flavor. We use a blend of fresh lemon zest and sweet candied citron peel to create a loaf that is both aromatic and tangy, perfect for a light dessert or afternoon tea.',
    imageUrl: 'https://placehold.co/600x450/fff7ed/634f3b?text=Citron+Bread',
    price: 4.75
  },
  {
    id: 10,
    name: 'Banana Bread',
    type: 'fruit',
    description: 'A moist, classic loaf with a rich banana flavor.',
    longDescription: 'A timeless favorite, our Banana Bread is made with perfectly ripened bananas for a naturally sweet and moist texture. The simple yet comforting flavor makes it a perfect snack or a quick breakfast on the go.',
    imageUrl: 'https://placehold.co/600x450/fde047/634f3b?text=Banana+Bread',
    price: 4.50
  },
  {
    id: 11,
    name: 'Apple Cinnamon Swirl',
    type: 'fruit',
    description: 'A comforting bread with pieces of apple and cinnamon.',
    longDescription: 'This is the perfect autumn treat, blending the sweetness of fresh apple pieces with the warmth of cinnamon. The soft, doughy bread is filled with a spiced apple mixture that creates a moist and flavorful swirl.',
    imageUrl: 'https://placehold.co/600x450/fef08a/634f3b?text=Apple+Bread',
    price: 5.00
  },
  {
    id: 12,
    name: 'Jalapeño Cheddar Cornbread',
    type: 'savory',
    description: 'A spicy and cheesy bread with a soft, moist texture.',
    longDescription: 'A savory twist on a classic, our Jalapeño Cheddar Cornbread is baked with a generous amount of sharp cheddar and finely diced jalapeños. The result is a moist, flavorful bread with a gentle kick of heat that complements a wide range of dishes.',
    imageUrl: 'https://placehold.co/600x450/ffe4e6/634f3b?text=Jalapeño+Cornbread',
    price: 5.75
  },
  {
    id: 13,
    name: 'Sun-dried Tomato & Basil Focaccia',
    type: 'savory',
    description: 'A soft Italian bread bursting with Mediterranean flavors.',
    longDescription: 'This Focaccia is a taste of Italy, infused with the rich, intense flavor of sun-dried tomatoes and the aromatic freshness of basil. It has a beautiful, airy crumb and a crispy, olive oil-drizzled crust. Perfect for dipping or as a sandwich bread.',
    imageUrl: 'https://placehold.co/600x450/fff0f7/634f3b?text=Tomato+Basil+Focaccia',
    price: 5.50
  },
  {
    id: 14,
    name: 'Gluten-Free Seed Loaf',
    type: 'dietary',
    description: 'A dense and hearty loaf packed with a variety of healthy seeds.',
    longDescription: 'Our Gluten-Free Seed Loaf is a delicious and wholesome alternative for those with dietary restrictions. It is made without wheat flour but is still rich in fiber and protein thanks to a generous mix of flax, sunflower, and pumpkin seeds. It has a delightful nutty flavor and a satisfying chewiness.',
    imageUrl: 'https://placehold.co/600x450/f5f5f4/634f3b?text=GF+Seed+Loaf',
    price: 7.00
  },
  {
    id: 15,
    name: 'Vegan Banana Walnut Bread',
    type: 'dietary',
    description: 'A moist and flavorful plant-based banana bread with walnuts.',
    longDescription: 'This is a vegan version of our classic banana bread, made with a special blend of plant-based ingredients to ensure a moist and tender loaf. We\'ve added crunchy walnuts to complement the natural sweetness of the ripe bananas.',
    imageUrl: 'https://placehold.co/600x450/fcf3d0/634f3b?text=Vegan+Banana+Bread',
    price: 6.25
  },
];

// Shopping cart component
const ShoppingCart = ({ cart, onClearCart, onCheckout }) => {
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
          <button onClick={onCheckout} className="button checkout-button">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

// Checkout Form component
const CheckoutForm = ({ cart, onPlaceOrder, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a server.
    // For this example, we'll just "place the order"
    onPlaceOrder();
  };

  return (
    <div className="checkout-form-container">
      <button onClick={onBack} className="button back-button">
        <svg xmlns="http://www.w3.org/2000/svg" className="back-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Go Back
      </button>
      <h2 className="checkout-title">Checkout</h2>
      <div className="order-summary-box">
        <h3 className="summary-title">Order Summary</h3>
        <ul className="summary-list">
          {cart.map(item => (
            <li key={item.id} className="summary-item">
              <span className="summary-item-name">{item.name}</span>
              <span className="summary-item-details">
                {item.quantity} x ${item.price.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className="summary-total">
          <span className="summary-total-label">Total:</span>
          <span className="summary-total-value">${total.toFixed(2)}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label className="form-label">
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <button type="submit" className="button place-order-button">
          Place Order
        </button>
      </form>
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
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

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
    setIsCheckingOut(false);
    setIsOrderPlaced(false);
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

  const handleCheckout = () => {
    setIsCheckingOut(true);
  };

  const handlePlaceOrder = () => {
    setCart([]);
    setIsCheckingOut(false);
    setIsOrderPlaced(true);
  };

  // Conditionally render the product detail page or the main list
  const renderContent = () => {
    if (isOrderPlaced) {
      return (
        <div className="order-confirmation">
          <h2 className="order-confirmation-title">Order Placed!</h2>
          <p className="order-confirmation-text">Thank you for your order. We'll send you an email confirmation shortly.</p>
          <button onClick={handleGoBack} className="button back-button">
            Go Back to Products
          </button>
        </div>
      );
    }

    if (isCheckingOut) {
      return <CheckoutForm cart={cart} onPlaceOrder={handlePlaceOrder} onBack={handleGoBack} />;
    }

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
          <button
            onClick={() => setActiveTab('fruit')}
            className={`nav-button ${activeTab === 'fruit' ? 'active' : ''}`}
          >
            Fruit Breads
          </button>
          <button
            onClick={() => setActiveTab('savory')}
            className={`nav-button ${activeTab === 'savory' ? 'active' : ''}`}
          >
            Savory Breads
          </button>
          <button
            onClick={() => setActiveTab('dietary')}
            className={`nav-button ${activeTab === 'dietary' ? 'active' : ''}`}
          >
            Gluten-Free & Vegan
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
          {cart.length > 0 && !isCheckingOut && !isOrderPlaced && <ShoppingCart cart={cart} onClearCart={handleClearCart} onCheckout={handleCheckout} />}
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
