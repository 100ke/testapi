import axios from 'axios';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { getArticles, getArticleById } from './api';
import { useEffect, useState } from 'react';
import MainListView from './components/MainListView';
import ViewPost from './components/ViewPost';
import NewPost from './components/NewPost';

function App() {

  return (
    <div className="App">
      <ul className='menu' style={{display:"flex", margin:"10px"}}>
        <li style={{padding:"10px"}}> <a href="/">list</a> </li>
        <li style={{padding:"10px"}}> <a href="/articles/2">view</a> </li>
        <li style={{padding:"10px"}}> <a href="/articles/new">글작성</a> </li>
      </ul>
      <Routes>
        <Route path='/' element={<MainListView/>} />
        <Route path='/articles/:id' element={<ViewPost/>} />
        <Route path='/articles/new' element={<NewPost/>} />
      </Routes>
    </div>
  );
}

export default App;
