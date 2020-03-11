import React, { useState, useEffect } from 'react';
import './Agenda.scss';

function Agenda({title}) {
    const [concerts, setConcerts] = useState(null);
    useEffect(() => {
      fetch('http://localhost/jppj/wp-json/wp/v2/concerts')
        .then((res) => res.json())
        .then((data) => setConcerts(data));
    }, []);
  
      console.log(concerts);
    return (
        <div className="row concert-dates">
        
            <div className="col-md-4">
                <h2>{title}</h2>
            </div>
            <div className="col-md-8 pt-4">
                {concerts && 
                  (concerts.map(concert =>
                    <>
                      <div className="pointer" data-toggle="modal" data-target={`#modal-${concert.id}`}>
                        <span className="date">{concert.acf.date_time}</span>
                        <h3>{concert.title.rendered}</h3>
                      </div>

                      <div className="modal fade" id={`modal-${concert.id}`} tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">

                            <div className="modal-header">
                              <h4 className={`modal-title-${concert.id}`} id="modalCenterTitle">{concert.title.rendered}</h4>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true"><img className="close-icon" src="img/close.png" alt="Close Icon"/></span>
                              </button>
                            </div>

                          {/* <?php the_post_thumbnail(); ?> */}

                          <div className="modal-body">
                            <h5>{concert.acf.date_time}</h5>
                            {concert.acf.text}
                          </div>

                              {concert.acf.location && (
                                <div className="modal-footer">
                                    <h5>Adresse :</h5>
                                    <p>{concert.acf.location}</p>
                                </div>
                                )}
                              
                              {concert.acf.reservation && (
                                <div className="modal-footer">
                                  <a href={concert.acf.reservation} target="_blank" rel="noopener noreferrer">
                                    R&eacute;servations
                                    <img className="link-icon" src="img/external-link.svg" alt="Link Icon"/>
                                  </a>
                                </div>
                              )}
                            
                          </div>
                        </div>
                      </div>
                    </>
                  )) 
                  }
               
            </div>
      </div>
    );
  }

  export default Agenda;