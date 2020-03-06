import React, { useState, useEffect } from 'react';
import Navigation from './components/nav/Navigation'

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
      <h1>Chorale</h1>
      <h2>Articles</h2>
      {article ? JSON.stringify(article[0].id) : 'loading...'}
      <Navigation />
    </div>
  );
}

export default App;
