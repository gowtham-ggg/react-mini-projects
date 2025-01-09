import React from 'react';

const PersonalDetails = ({ userData, skills }) => {
  return (
    <div className="personal-details">
     <span className={`activity ${userData.status ? 'online' : 'offline'}`}>{userData.status ? 'Online' : 'Offline'}</span>
      <img src={userData.profile} alt="mypic" className="profile-pic" />
      <h3>{userData.name}</h3>
      <h4>{userData.role}</h4>
      <div className="buttons">
        <button className="button">Message</button>
        <button className="button outline">Follow</button>
      </div>
      <h5>Skills</h5>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalDetails;
