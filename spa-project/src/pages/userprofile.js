import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Simulate data fetching for the user profile
    const fetchProfileData = async () => {
      // Simulate a delay
      setTimeout(() => {
        setProfileData({
          name: nelly,
          age: 25,
          bio: " coding and technology.",
        });
      }, 1000);
    };

    fetchProfileData();
  }, [username]);

  return (
    <div>
      {profileData ? (
        <div>
          <h1>Profile of {profileData.name}</h1>
          <p>Age: {profileData.age}</p>
          <p>Bio: {profileData.bio}</p>
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default UserProfile;
