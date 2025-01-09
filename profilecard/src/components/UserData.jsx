import React from 'react';
import PersonalDetails from './PersonalDetails';

const UserData = () => {
  const userDetails = [
    {
      name: 'Gowtham G',
      role: 'WEB DEVELOPER',
      profile: 'img/gowtham.jpg',
      skills: ['HTML', 'CSS', 'ReactJS', 'MongoDB', 'NodeJS', 'JavaScript', 'ExpressJS'],
      status : true,
    },
    {
      name: 'Elon Musk',
      role: 'CEO & Lead Designer Of SpaceX',
      profile: 'img/elon.jpg',
      skills: ['Marketing', 'Branding', 'Entrepreneurship'],
      status : false,
    },
    {
      name: 'Ryan Roslansky',
      role: 'CEO Of LinkedIn',
      profile: 'img/linkedin.webp',
      skills: ['Python', 'AI', 'ML', 'Ruby', 'ReactJS', 'AngularJS'],
      status : true,
    },
  ];

  return (
    <div className="user-list">
      {userDetails.map((user) => (
        <PersonalDetails
          key={user.name}
          userData={user}
          skills={user.skills} // Pass skills directly from the user object
        />
      ))}
    </div>
  );
};

export default UserData;
