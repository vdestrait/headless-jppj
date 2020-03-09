import React, { useState, useEffect } from 'react';
import Navigation from './components/nav/Navigation';
import Header from "./components/header/Header";
import Intro from "./components/home/intro/Intro";
import Agenda from "./components/home/agenda/Agenda";
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    fetch('http://localhost/jppj/wp-json/wp/v2/pages/?accueil')
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, []);

  return (
    <div>
      <Navigation />
      <Header />
      <Intro />
      <Agenda />
      <h2>Articles</h2>
      {article ? JSON.stringify(article[0].id) : 'loading...'}
      
    </div>
  );
}

export default App;
