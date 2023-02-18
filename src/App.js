import './scss/App.scss';

import React from 'react';
import { Routes, Route, useParams, useSearchParams } from 'react-router-dom';



import Header from './components/Header';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';
import SearchPage from './pages/SearchPage';



function App() {

  // const [searchValue, setSearchValue] = React.useState('')

  return (
    <div className="wrapper">
      <Header />
      <div className="content">

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;

