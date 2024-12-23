import { useState } from 'react';

function CreateProfile() {
  const [profileData, setProfileData] = useState({ bio: '', profilePhoto: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic here
    console.log('File uploaded:', file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Profile data submitted:', profileData);
    // Send the profile data to the server
  };

  return (
    <div className="container">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            name="bio"
            id="bio"
            value={profileData.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself"
          />
        </div>
        <div className="form-group">
          <label htmlFor="profilePhoto">Upload Profile Photo:</label>
          <input
            type="file"
            name="profilePhoto"
            id="profilePhoto"
            onChange={handlePhotoUpload}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProfile;