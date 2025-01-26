import React from 'react'
import AboutMe from '../components/Home/AboutMe'
import Interesting from '../components/Home/Interesting'
import WorknProjects from '../components/Home/WorknProjects'
import Profile from '../components/Home/Profile'

function Homepage() {

    return (
        <>
            <div className="profile-container">
                <Profile />
                <div className="profile-right-side">
                    <AboutMe />
                    <Interesting />
                </div>
            </div>
            <div className="work-project-container">
                <WorknProjects />
            </div>
        </>
    )
}

export default Homepage