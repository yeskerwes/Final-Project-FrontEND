import React, { useState } from 'react';
import '../styles/changePasswordPage.css';

function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setError('New password and confirmation do not match');
      setSuccess('');
    } else if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Password changed successfully!');
      // Реальная логика отправки данных на сервер должна быть здесь
      // Например, fetch для отправки на сервер
    }
  };

  return (
    <div className="change-password-page">
      <div className="change-password-container">
        <h2>Change Password</h2>
        <div className="form-group">
          <label htmlFor="currentPassword">Current Password <span>*</span></label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="newPassword">New Password <span>*</span></label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm New Password <span>*</span></label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <button onClick={handleChangePassword} className="change-password-btn">
          Change Password
        </button>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
