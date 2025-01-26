import React from 'react';
import WorknProjectsNav from './WorknProjectsNav';
import WorkCard from './WorkCard';
import { cards } from '../../fakedata';

function WorknProjects() {

    return (
        <div className='workplace'>
            <h2>Works & Projects</h2>
            <p>Check out some of my projects, crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.</p>
            <WorknProjectsNav />
            <WorkCard cards={cards} />
        </div>
    );
}

export default WorknProjects; 
