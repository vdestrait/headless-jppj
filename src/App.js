import React, { useState, useEffect } from 'react';
import Navigation from './components/nav/Navigation';
import Header from "./components/header/Header";
import Intro from "./components/home/intro/Intro";
import Agenda from "./components/home/agenda/Agenda";
import ConcertCards from "./components/home/concert-cards/Concert-cards";
import Listening from './components/home/listening/Listening';
import History from './components/home/history/History';
import Footer from './components/footer/Footer';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  const [siteInfo, setSiteInfo] = useState(null);
  const [home, setHome] = useState(null);
  useEffect(() => {
    Promise.all([
      fetch('http://localhost/jppj/wp-json').then((res) => res.json()),
      fetch('http://localhost/jppj/wp-json/wp/v2/pages?slug=accueil').then((res) => res.json())
    ])      
      .then(([dataSite, dataHome]) => { 
        setSiteInfo(dataSite);
        setHome(dataHome);
      });
  }, []);

  return (
    <div>
      <Navigation />
      <Header />

      <section id="intro" class="menu-color-primary">
        <div class="container">
          <Intro siteInfo={siteInfo}  home={home}/>
        </div>
      </section>

      <section id="agenda">
        {/* <a class="target" name="concert"></a> */}
        <Agenda title="Agenda"/>
      </section>

      <section id="concert">
        <div class="container">
          <ConcertCards />
        </div>
      </section>

      <section id="listening">
        {/* <a class="target" id="ecouter"></a> */}
        <Listening title="Du Son" data={home && home[0].acf.listening} />
      </section>

      <section id="history" class="menu-color-primary">
        {/* <a class="target" name="histoire"></a> */}
        <History data={home}/>
      </section>

      <Footer/>
      
    </div>
  );
}

export default App;
