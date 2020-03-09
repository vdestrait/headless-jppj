import React, { useState, useEffect } from 'react';

function Header() {
    const [siteInfo, setSiteInfo] = useState(null);
    useEffect(() => {
      fetch('http://localhost/jppj/wp-json')
        .then((res) => res.json())
        .then((data) => setSiteInfo(data));
    }, []);
  
    return (
      <div>
        <p>Header</p>
      </div>
    );
  }

  export default Header;