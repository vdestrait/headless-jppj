import React, { useEffect, useState } from 'react';


function Navigation() {
  const [content, setContent] = useState(null);
  useEffect(() => {
    fetch('')
      .then((r) => r.json())
      .then((data) => {
        setContent(data);
      });
    }, []);

      return (
        <nav>
          Navigation
        </nav>
      );
    }
  
  

export default Navigation;