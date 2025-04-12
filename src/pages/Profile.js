import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import '../css/Profile.css';

const Profile = () => {

  const dummyUser = {
    name: 'Kishore',
    email: 'contactforkishore@gmail.com',
    password: 'examplepassword',
  };

  
  const [newName, setNewName] = React.useState(dummyUser.name);
  const [newEmail, setNewEmail] = React.useState(dummyUser.email);
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [passwordChangeError, setPasswordChangeError] = React.useState('');

  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);

  const handleUpdate = () => {
    alert('Profile update functionality is disabled in this dummy version.');
  };

  const handleChangePassword = () => {
    setPasswordChangeError('');

    if (oldPassword !== dummyUser.password) {
      setPasswordChangeError('Old password is incorrect.');
      return;
    }

    if (oldPassword === newPassword) {
      setPasswordChangeError('New password must be different from old password.');
      return;
    }

    alert('Password change functionality is disabled in this dummy version.');
    setOldPassword('');
    setNewPassword('');
    
  };

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <form>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Name"
          readOnly 
        />
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Email"
          readOnly 
        />

        <div className="password-field">
          <input
            type={showCurrentPassword ? 'text' : 'password'}
            value={dummyUser.password}
            readOnly 
            placeholder="Current Password"
          />
          <span onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
            {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="password-field">
          <input
            type={showOldPassword ? 'text' : 'password'}
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter Old Password"
          />
          <span onClick={() => setShowOldPassword(!showOldPassword)}>
            {showOldPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="password-field">
          <input
            type={showNewPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter New Password"
          />
          <span onClick={() => setShowNewPassword(!showNewPassword)}>
            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {passwordChangeError && <p className="error-message">{passwordChangeError}</p>}
        <button type="button" onClick={handleChangePassword} className="add-to-cart-button">Change Password</button>
      </form>
    </div>
  );
};

export default Profile;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
// import '../css/Profile.css'
// const Profile = () => {
//   const [user, setUser] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [oldPassword, setOldPassword] = useState('');
//   const [passwordChangeError, setPasswordChangeError] = useState('');

//   const [showCurrentPassword, setShowCurrentPassword] = useState(false); // Toggle visibility for current password
//   const [showOldPassword, setShowOldPassword] = useState(false); // Toggle visibility for old password
//   const [showNewPassword, setShowNewPassword] = useState(false); // Toggle visibility for new password

//   // Get user email from local storage after login
//   const userEmail = localStorage.getItem('userEmail');

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/users');
//         const users = response.data;

//         const currentUser = users.find(u => u.email === userEmail);
        
//         if (currentUser) {
//           setUser({ name: currentUser.name, email: currentUser.email, password: currentUser.password });
//         } else {
//           setError('User not found');
//         }
//       } catch (error) {
//         setError('Error fetching user data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, [userEmail]);

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`http://localhost:5000/users/${user.id}`, user);
//       alert('Profile updated successfully!');
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       alert('An error occurred while updating. Please try again.');
//     }
//   };

//   const handleChangePassword = async () => {
//     if (oldPassword !== user.password) {
//       setPasswordChangeError('Old password is incorrect.');
//       return;
//     }
    
//     if (oldPassword === newPassword) {
//       setPasswordChangeError('New password must be different from old password.');
//       return;
//     }

//     try {
//       const updatedUser = { ...user, password: newPassword };
//       await axios.put(`http://localhost:5000/users/${user.name}`, updatedUser);
//       alert('Password updated successfully!');
//       setOldPassword('');
//       setNewPassword('');
//       setPasswordChangeError('');
//     } catch (error) {
//       console.error('Error changing password:', error);
//       alert('An error occurred while changing the password. Please try again.');
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="Profile">
//       <h1>Profile</h1>
//       <form>
//         <input
//           type="text"
//           value={user.name}
//           onChange={(e) => setUser({ ...user, name: e.target.value })}
//           placeholder="Name"
//         />
//         <input
//           type="email"
//           value={user.email}
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//           placeholder="Email"
//         />

//         {/* Current Password Field with Eye Icon */}
//         <div className="password-field">
//           <input
//             type={showCurrentPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
//             value={user.password}
//             readOnly // Make it read-only for security reasons
//             placeholder="Current Password"
//           />
//           <span onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
//             {showCurrentPassword ? <FaEyeSlash /> : <FaEye />} {/* Eye toggle icon */}
//           </span>
//         </div>

//         {/* Old Password Field */}
//         <div className="password-field">
//           <input
//             type={showOldPassword ? 'text' : 'password'}
//             value={oldPassword}
//             onChange={(e) => setOldPassword(e.target.value)}
//             placeholder="Enter Old Password"
//           />
//           <span onClick={() => setShowOldPassword(!showOldPassword)}>
//             {showOldPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>

//         {/* New Password Field */}
//         <div className="password-field">
//           <input
//             type={showNewPassword ? 'text' : 'password'}
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             placeholder="Enter New Password"
//           />
//           <span onClick={() => setShowNewPassword(!showNewPassword)}>
//             {showNewPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>

//         {passwordChangeError && <p className="error-message">{passwordChangeError}</p>}
//         <button type="button" onClick={handleChangePassword} className="add-to-cart-button">Change Password</button>
//       </form>
//     </div>
//   );
// };

// export default Profile;
