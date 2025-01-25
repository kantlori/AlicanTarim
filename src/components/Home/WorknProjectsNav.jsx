import React from 'react'
import WorkNavButton from './WorkNavButton'

function WorknProjectsNav() {

    const buttons = ["Show All", "Mobile Apps", "Packages", "GitHub Repos", "Medium Articles"]

    return (
        <div>
            {buttons.map((item, index) => (
                <WorkNavButton item={item} key={index} />
            ))}
        </div>
    )
}

export default WorknProjectsNav