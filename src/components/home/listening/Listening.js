import React from 'react';
import './Listening.scss';

function Listening({ data, title }) {

    return (
        <div className="row">
            <div className="col-md-4">
                <h2>{title}</h2>
            </div>
            <div className="col-md-8 pt-4">
              <div className="row">
                {data &&
                  (data.map(track =>
                    <div className="col-md-6 sounds">
                        <img className="music-icon" src="img/dj.png" alt="Icon of DJ"></img>
                        <h4 className="thin">{track.title}</h4>
                        <audio controls src={track.audio}></audio>
                    </div>
                  ))}
               </div>
            </div>
      </div>
    );
  }

  export default Listening;