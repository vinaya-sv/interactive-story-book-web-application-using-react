import React, { useState } from 'react';
import Navbar from './navbar';
import Storycard from './storycard';
import { Link } from 'react-router-dom';
import stories from './storyContents';
function Dashboard(){
    return(
        <div>
            <Navbar/>
            <div className="story-list-wrapper">
            {stories.map((story)=><Link to={`/story/${story.title}`} state={{ storyFullData:story}}><Storycard story={story}/></Link>)}
            </div>
        </div>
    );
}
export default Dashboard;