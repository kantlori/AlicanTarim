import React, { useContext } from 'react';
import WorknProjectsNav from './WorknProjectsNav';
import WorkCard from './WorkCard';
import { MyContext } from '../../context/MyContext';

function WorknProjects() {

    const { state } = useContext(MyContext)

    return (
        <div className='workplace'>
            <h2>Works & Projects</h2>
            <p>Check out some of my projects, crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.</p>
            <WorknProjectsNav />
            <WorkCard cards={state} />
        </div>
    );
}

export default WorknProjects; 
