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
        <h1><span>Pholisa Nofemele.</span></h1>
        <h4>Application Developer | Aspiring Data Analyst | Software Developer Intern</h4>

        <p>
            I am enrolled in a Postgraduate Diploma in Data Analytics. 
            I am a firm believer that hard work pays off and practice makes perfect. 
            For me, trying and just showing up is the best thing you can do for yourself.
            Throughout my academic journey, I have developed a solid foundation in programming,
            software development, and data analysis. 
            I want to excel and reach my full potential in my field and explore other fields that interest me.
        </p>

        <div class="btn-box">
            <button class="hire-btn">Hire Me</button>
            <button class="cv-btn">Download CV</button>
        </div>
    </div>
   
    <div class="img-box">
        <img src="/Image.jpg" alt="Pholisa Image"/>
    </div>

    </div>
    );
}

export default UserProfile;