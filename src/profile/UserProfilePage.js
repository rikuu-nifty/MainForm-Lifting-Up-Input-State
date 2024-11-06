import React, {useState}  from 'react';
import Profile from './Profile';
import Navigation from './Navigation';
import Form from './Form';
// import './style.css'; // Import the CSS file
function UserProfilePage(){
    //Initialize state for the User Data
    const [userData, setUserData] = useState({
        name: "Juan Dela Cruz",
        email: "juan@gmail.com",
        username: "Juan Coco",
    });
    
    //Function to handle updates drom form 
    const handleUpdate = (updatedInfo) => {
        setUserData((prevState) => ({
            ...prevState, // Shallow copying from Form.js
            ...updatedInfo // Merge to Profile.js
        }));
    };
    

    return (
        <div>
            <Navigation />
            <Profile user={userData} />
            <Form user={userData} onUpdate={handleUpdate} />
        </div>
    );
}

export default UserProfilePage;