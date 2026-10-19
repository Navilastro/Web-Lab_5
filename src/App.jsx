import React, { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  // Required state variables
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>React Product Dashboard</h2>
      
      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>
      
      <div style={{ margin: '20px 0' }}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <p>Hello, {name}</p>

      {/* Conditional rendering of ProductList */}
      {showProducts && <ProductList />}
    </div>
  );
}

export default App;