import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import Login from "./pages/Login";
import VerifyPage from "./pages/VerifyPage";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import ValidationHelper from './util/ValidationHelper';

const App = () => {

    if(ValidationHelper.isLogin()){

      return (

        <HashRouter>
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/cartList" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      
    );
  }
    
    else{

      return (
    
    <HashRouter>
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<VerifyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>);
        }
        
      }




export default App;
