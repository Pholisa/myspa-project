import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
    const {username} = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {

        const fetchProfile = async () => {
            setProfile({name: username, bio: 'This is a user bio.'});

        };
        fetchProfile();
    }, [username]);

    return (
        <div>
        <div class="profile-content">
        <h3>Hi, I am </h3>
        <h1><span>Peter Styles.</span></h1>
        <h4>Movie Collector | Aspiring Director | Film Intern</h4>

        <p>I am a passionate movie collector and an aspiring filmmaker currently exploring the world of filmmaking.My journey as a movie collector has deepened my appreciation for cinematic storytelling and fuels my desire to create impactful films that resonate with audiences. 
        Through my academic and creative endeavors, I have built a solid foundation in storytelling, cinematography, and directing techniques.</p>

        <div class="btn-box">
        <input type="text" placeholder="Enter movie here..." class="text-box" />
        <button class="hire-btn">Add </button>
        <button class="cv-btn">View </button>
        </div>
    </div>

    </div>
    );
}

export default UserProfile;