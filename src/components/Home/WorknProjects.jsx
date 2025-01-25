import React from 'react';
import WorknProjectsNav from './WorknProjectsNav';
import WorkCard from './WorkCard';
import deepLink from '../../images/deep_linking.jpg';
import instalysis from '../../images/instalysis.jpg';
import nationCodePicker from '../../images/nation_code_picker.jpg';
import readfly from '../../images/readfly.jpg';
import templateBloc from '../../images/template_app_with_bloc.jpg';
import codeField from '../../images/verification_code_field.jpg';

function WorknProjects() {
    const cards = [
        { image: deepLink, category: "Mobile App", desc: "Deep Linking" },
        { image: instalysis, category: "Mobile App", desc: "Instalysis" },
        { image: nationCodePicker, category: "Packages", desc: "Nation Code Picker" },
        { image: readfly, category: "Medium Articles", desc: "Readfly" },
        { image: templateBloc, category: "GitHub Repos", desc: "Template App with Bloc" },
        { image: codeField, category: "Mobile App", desc: "Verification Code Field" },
    ];

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
