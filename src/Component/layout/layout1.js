import React from 'react';
import '../css/layouts/layout1.css';
const Layout1=({page})=>{
    return(
        <div className="layout1">
            <div className="l1-image-container" style={{background:`linear-gradient( transparent, #ffffff), url(${page.bg})`,backgroundSize:"100%",backgroundRepeat:"no-repeat"}}></div>
            <div className="l1-passage-container">{page.passage}</div>
        </div>
    );
    
}
export default Layout1;