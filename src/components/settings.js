import React, { useState } from "react";
import "settings.css";
const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={handleNotificationsToggle}
          />
          Enable Notifications
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={darkModeEnabled}
            onChange={handleDarkModeToggle}
          />
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default Settings;
