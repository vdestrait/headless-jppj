/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useRef } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import './Agenda.scss';
import sanitinizer from '../../../helpers/sanitinizer';

function Agenda({title}) {
    const [concerts, setConcerts] = useState(null);
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
      fetch('http://localhost/jppj/wp-json/wp/v2/concerts?_embed')
        .then((res) => res.json())
        .then((data) => setConcerts(data));
    }, []);

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };

    return (
        <div className="row concert-dates">

            <div className="col-md-4">
                <h2>{title}</h2>
            </div>

            <div className="col-md-8 pt-4">
              {concerts && 
                  (concerts.map((concert,index) =>
                    <>
                      <div onClick={showModal} className="pointer">
                        <span className="date">{concert.acf.date_time}</span>
                        <h3>{concert.title.rendered}</h3>
                      </div>

                      <Modal show={isOpen} onHide={hideModal}>
                        <Modal.Header>
                            <Modal.Title>
                            <h4>{concert.title.rendered}</h4>
                            <button type="button" className="close" onClick={hideModal}>
                                <img className="close-icon" src="/assets/img/close.png" alt="Close Icon"/>
                            </button>
                            </Modal.Title>
                        </Modal.Header>

                        <div className="concert-thumbnail">
                            <img src={concert._embedded['wp:featuredmedia']['0'].source_url} alt={`Image ${concert.title.rendered}`} />
                        </div>
                        
                        <Modal.Body>
                            <h5>{concert.acf.date_time}</h5>
                            <div dangerouslySetInnerHTML={sanitinizer(concert.acf.text)}></div>
                        </Modal.Body>
                        {concert.acf.location && (
                            <Modal.Footer>
                                <h5>Adresse :</h5>
                                <p>{concert.acf.location}</p>
                            </Modal.Footer>
                        )}
                        
                        {concert.acf.reservation && (
                            <Modal.Footer>
                            <a href={concert.acf.reservation} target="_blank" rel="noopener noreferrer">
                                R&eacute;servations
                                <img className="link-icon" src="/assets/img/external-link.svg" alt="Link Icon"/>
                            </a>
                            </Modal.Footer>
                        )}
                      </Modal>
                    </>
                  ))}
            </div>
      </div>
    );
  }

  export default Agenda;