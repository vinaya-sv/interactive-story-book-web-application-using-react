import React from 'react';
import '../css/layouts/layout7.css';
const Layout7=({page})=>{
    return(
        <div className="layout7">
            <div className="l7-image-container" style={{background:`url(${page.bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}></div>
            <div className="l7-passage-container">{page.passage}</div>
        </div>
    );
    
}
export default Layout7;