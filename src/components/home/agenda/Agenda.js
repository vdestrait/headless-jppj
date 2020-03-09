import React, { useState, useEffect } from 'react';

function Agenda() {
    const [concerts, setConcerts] = useState(null);
    useEffect(() => {
      fetch('http://localhost/jppj/wp-json/wp/v2/concerts')
        .then((res) => res.json())
        .then((data) => setConcerts(data));
    }, []);
  
    return (
        <div className="row concert-dates">
        
            <div className="col-md-4">
                <h2>Agenda</h2>
            </div>
            <div className="col-md-8 pt-4">
                {concerts ? 
                (concerts.forEach(concert => {return concert.title.rendered})) : ''}
            </div>
      </div>
    );
  }

  export default Agenda;