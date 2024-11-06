import React from 'react';

const ContactUs = () => {
    return (
        <div className="container d-flex justify-content-center my-5">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%", borderRadius: "10px" }}>
                <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>Contact Us</h2>
                
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        style={{ borderRadius: "8px" }}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Write your message here..."
                        style={{ borderRadius: "8px" }}
                    ></textarea>
                </div>

                <button type="button" className="btn btn-primary w-100 mt-3" style={{ borderRadius: "8px" }}>Send Message</button>
            </div>
        </div>
    );
};

export default ContactUs;
