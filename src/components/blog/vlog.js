import React from 'react';

import '../../styles/vlog.scss'
import Iframe from 'react-iframe';


 const Vlog = () => {
  

  return (
    <div>
      <div className="vlog">
        <Iframe
          url="https://drive.google.com/file/d/1pYNKeo8pQ_BzbxCNNFo1km4KZl2wxJ-u/preview"
          width="100%"
          height="480"
          className="iframe-video"
          frameBorder="0"
        ></Iframe>
       
      </div>
    </div>
  );
};
export default Vlog;