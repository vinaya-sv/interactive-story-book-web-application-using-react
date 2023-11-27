import React from 'react';
import '../css/layouts/layout4.css';
const Layout4=(props)=>{
    return(
        <div className="layout4">
            <div className="l4-passage-container">{props.page.passage}</div>
        </div>
    );
}
export default Layout4;