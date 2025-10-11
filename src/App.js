//import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar";
import { useState } from "react";
import products from "./data/products.json";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import search from './components/search';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <Navbar onSearch={setSearchTerm} />
      {searchTerm && (
        <div className="search-results">
          <h3>Search Results:</h3>
          {filtered.length > 0 ? (
            <ul>
              {filtered.map(p => (
                <li key={p.id}>{p.title}</li>
              ))}
            </ul>
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
      {/* Other components and routes would go here */}
    </div>
  );
}

export default App;
