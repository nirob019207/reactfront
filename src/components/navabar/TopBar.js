import React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Topbar() {
      // State to hold the fetched menu names
  const [showDropdown, setShowDropdown] = useState(false); // State to handle dropdown visibility
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear(); // Clear session data
    navigate('/'); // Navigate to home or login page
  };

  return (
    <div class="topbar   flex justify-between items-center">
          <div class="toggle">
            {/* <img
              src="image/icon/arrow-left-line.svg"
              class="w-8 arrow-icon"
              alt="Toggle"
            /> */}
          </div>
          <div className="topbar-right flex gap-4">
            <img src="image/icon/Notification.png" className="notification" alt="Notification" />
            {/* <img src="image/icon/profile-icon.png" className="w-10 h-10" alt="Profile" /> */}
            <div className="relative">
              <img 
                src="image/icon/profile-icon.png" 
                className="w-10 h-10" 
                alt="Profile" 
                onClick={() => setShowDropdown(!showDropdown)} 
                style={{ cursor: 'pointer' }}
              />
              {showDropdown && (
                <div className="absolute right-0 w-40 bg-white border mt-2 rounded-md shadow-lg">
                  <div 
                    onClick={handleLogout} 
                    className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
            {/* <img
              src="image/icon/Date-arrow.png"
              class="w-4 h-4 arrow-icon"
              alt="Date Arrow"
            /> */}
            
          </div>
        </div>
  );
}

export default Topbar;
