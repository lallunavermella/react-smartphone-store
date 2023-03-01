import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-full w-full text-sm">
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product/:product" element={<ProductDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
