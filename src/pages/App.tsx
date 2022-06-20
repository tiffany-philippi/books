import React, { useState } from 'react';
import Books from '../components/books/Books';
import Header from '../components/header/Header';
import SearchBook from '../components/search/SearchBook';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Header/>
      <Books/>
    </div>
  );
}

export default App;
