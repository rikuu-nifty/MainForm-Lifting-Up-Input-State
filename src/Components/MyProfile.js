import React from 'react';

const MyProfile = () => {
    return (
        <div className="container my-5 d-flex justify-content-center">
            <div className="card p-4 shadow-lg border-0" style={{ maxWidth: '600px', borderRadius: '10px' }}>
                <div className="card-body text-center">
                    <img 
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="rounded-circle mb-3"
                        style={{ width: '150px', height: '150px' }}
                    />
                    <h2 className="card-title">Jansen Venal</h2>
                    <p className="card-text text-muted">
                        Hi, I'm Jansen! Passionate about technology and learning new things every day. I'm currently an Information Technology student working toward a future in tech.
                    </p>
                    <button className="btn btn-primary mt-3" style={{ borderRadius: '8px' }}>Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
