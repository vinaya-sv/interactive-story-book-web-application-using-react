import React from 'react';
import Layout1 from './layout/layout1';
import Layout2 from './layout/layout2';
import Layout3 from './layout/layout3';
import Layout4 from './layout/layout4';
import Layout6 from './layout/layout6';
import Layout5 from './layout/layout5';
import Layout7 from './layout/layout7';
import { useState } from 'react';
const Page=(props)=>{
    switch(props.page.layout){
        case "layout1":
            return <Layout1 page={props.page}/>
        case "layout2":
            return <Layout2 page={props.page}/>
        case "layout3":
            return <Layout3 page={props.page}/>
        case "layout4":
            return <Layout4 page={props.page}/>
        case "layout5":
            return <Layout5 page={props.page}/>
        case "layout6":
            return <Layout6 page={props.page}/>
        case "layout7":
            return <Layout7 page={props.page}/>
    }
}
export default Page;