import React from 'react';
import profilePhoto from "../../assets/profil-photo.jpg";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import SOCIAL_MEDIA_LINKS from "../../socialdata";
import "../css/Profile.css";
import user from '../../fakedata';

function Profile() {
    const { firstName, lastName, profession, city } = user;
    const { linkedin, github, twitter, instagram } = SOCIAL_MEDIA_LINKS;

    return (
        <div className="profile-card">
            <div className="profile">
                <img src={profilePhoto} alt="Alican TARIM photo" />
                <h4>{firstName} {lastName}</h4>
                <p>{profession}</p>
                <p>{city}</p>
            </div>
            <div className="profile-socials">
                <a href={linkedin} target="_blank" rel="noreferrer">
                    <GrLinkedinOption />
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href={twitter} target="_blank" rel="noreferrer">
                    <FaXTwitter />
                </a>
                <a href={instagram} target="_blank" rel="noreferrer">
                    <SiInstagram />
                </a>
            </div>
        </div>
    );
}

export default Profile;
