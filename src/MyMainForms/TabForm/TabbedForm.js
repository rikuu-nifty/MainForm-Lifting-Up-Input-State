import React, { useState } from 'react';
import Tab from './Tab';
import TabContent from './TabContent';

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
        username: '',
        password: ''
    });

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Data: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Tabbed Form with Shared State</h1>
            <div style={tabsContainerStyle}>
                <Tab
                    name="Basic Information"
                    isActive={activeTab === 'basic'}
                    onClick={() => handleTabClick('basic')}
                />
                <Tab
                    name="Contact Information"
                    isActive={activeTab === 'contact'}
                    onClick={() => handleTabClick('contact')}
                />
                <Tab
                    name="Account Information"
                    isActive={activeTab === 'account'}
                    onClick={() => handleTabClick('account')}
                />
            </div>

            <form onSubmit={handleSubmit} style={formStyle}>
                <TabContent
                    activeTab={activeTab}
                    formData={formData}
                    onChange={handleInputChange}
                />
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
};

// Container style for the form
const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

// Heading style
const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
};

// Tab container style
const tabsContainerStyle = {
    display: 'flex',
    borderBottom: '2px solid #ddd',
    marginBottom: '20px',
};

// Form style
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
};

// Button style
const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: '#4CAF50', // Green background for button
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
};

buttonStyle[':hover'] = {
    backgroundColor: '#45a049', // Darker green on hover
    transform: 'scale(1.05)',
};

export default TabbedForm;
