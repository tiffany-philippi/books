import React, { useState } from 'react';
import Header from '../components/header/Header';
import SearchBook from '../components/search/SearchBook';
import style from './App.module.scss';

function App() {
  const [books, setBooks] = useState<string>("");
  return (
    <div className={style.AppStyle}>
      <Header/>
      <SearchBook setSearch={setBooks}/>
    </div>
  );
}

export default App;
