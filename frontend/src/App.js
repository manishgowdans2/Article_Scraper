
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Login from "./components/login/Login"
import Search from './components/search/Search';
import Write from './components/write/Write';
import Register from './components/register/Register';
import Saved from './components/Saved/Saved';

function App() {
  return (
 <>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/search" element={<Search />} /> 
      <Route path="/write" element={<Write />} /> 
      <Route path="/register" element={<Register />} /> 
      <Route path="/save" element={<Saved />} /> 
      </Routes>
  </BrowserRouter>
 </>
  );
}

export default App;
