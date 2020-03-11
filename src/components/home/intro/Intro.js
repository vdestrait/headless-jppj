import React from 'react';
import sanitinizer from "../../../helpers/sanitinizer";

function Intro({ siteInfo, home }) {
  
    return (
      <div>
        <h1>{siteInfo && siteInfo.description}</h1>
        <div class="container" dangerouslySetInnerHTML={home && sanitinizer(home[0].content.rendered)}/>
      </div>
    );
  }

  export default Intro;