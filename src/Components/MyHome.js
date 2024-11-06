import React from 'react';

const MyHome = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-2">Welcome to the Home Page</h1>
            <p className="text-center text-muted mb-4">Discover our features and tools to enhance your experience</p>

            <div className="row d-flex">
                <div className="col-md-4 mb-4 d-flex">
                    <div className="card h-100 shadow-sm border-0 d-flex flex-column">
                        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Feature 1" />
                        <div className="card-body flex-grow-1">
                            <h5 className="card-title">Feature 1: Study Planning</h5>
                            <p className="card-text">Plan and organize your study schedule with ease. Set daily, weekly, or monthly goals to stay on track and maximize productivity.</p>
                        </div>
                        <div className="card-footer bg-transparent">
                            <a href="#" className="btn btn-primary w-100">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4 d-flex">
                    <div className="card h-100 shadow-sm border-0 d-flex flex-column">
                        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Feature 2" />
                        <div className="card-body flex-grow-1">
                            <h5 className="card-title">Feature 2: Progress Tracking</h5>
                            <p className="card-text">Monitor your learning journey with detailed reports and analytics. Stay motivated by seeing your accomplishments and milestones.</p>
                        </div>
                        <div className="card-footer bg-transparent">
                            <a href="#" className="btn btn-primary w-100">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4 d-flex">
                    <div className="card h-100 shadow-sm border-0 d-flex flex-column">
                        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Feature 3" />
                        <div className="card-body flex-grow-1">
                            <h5 className="card-title">Feature 3: Interactive Quizzes</h5>
                            <p className="card-text">Engage with interactive quizzes tailored to your study material, designed to reinforce knowledge and improve retention.</p>
                        </div>
                        <div className="card-footer bg-transparent">
                            <a href="#" className="btn btn-primary w-100">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyHome;
