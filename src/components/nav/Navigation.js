import React, { useEffect, useState } from 'react';
import './Navigation.scss';

function Navigation() {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetch('http://localhost/jppj/wp-json/wp/v2/menu')
      .then((r) => r.json())
      .then((data) => {
        setMenu(data);
      });
    }, []);
    // {menu &&
    //   console.log(menu[0]);
    // }
      return (
        <nav className="navbar navbar-expand-lg">
          <a href="http://localhost:3000/">
              <img id="brand-logo" alt="Logo JPPJ Chorale" src="/assets/img/jppj-logo-black.svg"/>
          </a>
          <div className="collapse navbar-collapse" id="navbar">
            <ul class="menu">
              {menu && menu.map((menuItem) => 
                <li><a href={menuItem.url}>{menuItem.title}</a></li>)
              }
            </ul>
              
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <img id="burger-menu" alt="" src="/assets/img/white-menu.svg"/>
          </button>
        </nav>
      );
    }
  
  

export default Navigation;