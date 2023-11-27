import React from 'react';
import '../css/layouts/layout6.css';
const Layout6=({page})=>{
    return(
        <div className="layout6">
            <div className="l6-passage-container">{page.passage}</div>
            <div className="l6-image-container" style={{background:`linear-gradient(to left, transparent, #ffffff), url(${page.bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}></div>
        </div>
    );
}
export default Layout6;