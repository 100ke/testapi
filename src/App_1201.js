import axios from 'axios';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainListView from './components/MainListView';
import ViewPost from './components/ViewPost';

function App() {
  const [articleData, setArticleData] = useState([])
  const callApi = async ()=>{
    try {
      const request = await axios.get("http://localhost:8081/api/articles")
      console.log(request.data);
      setArticleData(request.data)
    } catch (error) {
      console.error("error" + error);
    }
  }
  useEffect(()=>{
    callApi()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainListView listData = {articleData} />} />
        <Route path='/article/:id' element={<ViewPost listData = {articleData} />} />

      </Routes>
    </div>
  );
}

export default App;
