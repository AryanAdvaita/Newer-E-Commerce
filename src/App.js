import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar";
import { useState } from "react";
import products from "./data/products.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import search from './components/search';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <Navbar onSearch={setSearchTerm} />
      {/* Pass searchTerm down to your Products page */}
    </div>
  );
}

export default App;
