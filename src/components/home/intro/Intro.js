import React, { useState, useEffect } from 'react';

function Intro() {
    const [siteInfo, setSiteInfo] = useState(null);
    useEffect(() => {
      fetch('http://localhost/jppj/wp-json')
        .then((res) => res.json())
        .then((data) => setSiteInfo(data));
    }, []);
  
    return (
      <div>
        <h1>{siteInfo ? siteInfo.description : 'loading...'}</h1>
      </div>
    );
  }

  export default Intro;