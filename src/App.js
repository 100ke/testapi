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
      <div className="hd">
        <div className="container flex">
            <h1 className="logo"><a href="/">Company</a></h1>
            <div className="navWrap">
                <ul className="nav bg-1">
                    <li><a href="/">list</a>
                        <div className="bar"></div>
                        <ul className="sub">
                            <li><a href="#">sub01_01</a></li>
                            <li><a href="#">sub01_02</a></li>
                            <li><a href="#">sub01_03</a></li>
                        </ul>
                    </li>
                    <li><a href="/articles/2">view</a>
                        <div className="bar"></div>
                        <ul className="sub">
                            <li><a href="#">sub02_01</a></li>
                            <li><a href="#">sub02_02</a></li>
                        </ul>
                    </li>
                    <li><a href="/articles/new">글작성</a>
                        <div className="bar"></div>
                        <ul className="sub">
                            <li><a href="#">sub03_01</a></li>
                            <li><a href="#">sub03_02</a></li>
                            <li><a href="#">sub03_03</a></li>
                            <li><a href="#">sub03_04</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<MainListView/>} />
        <Route path='/articles/:id' element={<ViewPost/>} />
        <Route path='/articles/new' element={<NewPost/>} />
      </Routes>
    </div>
  );
}

export default App;
