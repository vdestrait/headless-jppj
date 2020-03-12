import React, { useState, useEffect } from 'react';
import './Concert-cards.scss';

function ConcertCards() {
    const [cards, setCards] = useState(null);
    useEffect(() => {
      fetch('http://localhost/jppj/wp-json/wp/v2/pages?slug=accueil')
        .then((res) => res.json())
        .then((data) => {
            setCards(data[0].acf.concerts_cards);
        });
    }, []);

    const showCard = (e) => {
        e.target.nextSibling.style.display = 'block';
    }

    const hideCard = (e) => {
        //e.target.nextSibling.style.display = 'none';
        console.log('hide');
    }
    
    return (
    
        <div className="row no-gutters concerts-cards">
            {cards ? 
            (cards.map(card =>
                <div className="col-xs-12 col-lg-4">
                    <div onMouseEnter={showCard} onMouseLeave={hideCard}className="icon-wrap">
                        <img src={card.icon} alt={card.title + ' icône'}></img>
                        <h4 className="thin">{card.title}</h4> 
                        <div className="arrow-down arrow-expanding d-md-none" alt=""></div>
                    </div>

                    <div className="card">
                        <div className="bcg-img" style={{backgroundImage: `url(${card.image})`}}></div>
                        <div className="card-body">
                            <h4 className="card-title">{card.title}</h4>
                            <p className="card-text">{card.text}</p>
                        </div>
                    </div>
                </div>
            )) 
            : ''}
        </div>

    );
  }

  export default ConcertCards;