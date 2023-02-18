import './App.css';
import Header from './components/Header';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productsall from './components/Productsall';

import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>

        <Routes>
          <Route path='/' exact element={<Productsall/>}></Route>
          <Route path='/pro/:productId' exact element={<ProductDetails/>}></Route>
          <Route>404 page not found</Route>
          </Routes>
      
      </Router>
     
    </div>
  );
}

export default App;
