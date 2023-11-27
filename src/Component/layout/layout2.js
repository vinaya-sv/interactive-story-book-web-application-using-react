import React from 'react';
import '../css/layouts/layout2.css';
const Layout2=({page})=>{
    return(
        <div className="layout2">
            <div className="l2-passage-container">{page.passage}</div>
            <div className="l2-image-container" style={{background:`linear-gradient(to top, transparent, #ffffff), url(${page.bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}></div>
        </div>
    );
}
export default Layout2;