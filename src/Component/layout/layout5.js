import React from 'react';
import '../css/layouts/layout5.css';
const Layout5=({page})=>{
    return(
        <div className="layout5">
            <div className="l5-image-container" style={{background:`linear-gradient(to right, transparent, #ffffff), url(${page.bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}></div>
            <div className="l5-passage-container">{page.passage}</div>
        </div>
    );
}
export default Layout5;