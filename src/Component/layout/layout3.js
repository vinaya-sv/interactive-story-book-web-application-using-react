import React from 'react';
import '../css/layouts/layout3.css';
const Layout3=({page})=>{
    return(
        <div className="layout3">
            <div className="l3-image-container" style={{background:`url(${page.bg})`,backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center"}}></div>
        </div>
    );
}
export default Layout3;