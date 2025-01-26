import React from 'react'
import WorkNavButton from './WorkNavButton'

function WorknProjectsNav() {

    const buttons = ["Show All", "Mobile Apps", "Packages", "GitHub Repos", "Medium Articles"]

    return (
        <div className='nav-directors'>
            <ul>
                {buttons.map((item, index) => (
                    <WorkNavButton item={item} key={index} />
                ))}
            </ul>
        </div>
    )
}

export default WorknProjectsNav