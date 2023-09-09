import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  // State to hold the fetched menu names
  const [menuNames, setMenuNames] = useState([]);
  const [userData, setUserData] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); // State to handle dropdown visibility
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear(); // Clear session data
    navigate('/'); // Navigate to home or login page
  };

  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://104.198.53.36:9002/getErpUserdetails', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        });

        const data = await response.json();
        console.log("User Data:", data);
        if (data && data.length > 0) {
          setUserData(data[0]);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []); // E
  const handleMenuClick = (menuName) => {
    const routesMap = {
      'New File': '/CreateNewFile',
      'Update Incomplete File': '/UpdateIncomplete',
      'Check Status': '/CheckStatus',
      'UW 360': '/Uw360'

    };

    const route = routesMap[menuName];
    if (route) {
      navigate(route);
    }
  };
  // Fetch the menu names when the component mounts
  useEffect(() => {
    const fetchMenuNames = async () => {
      try {
        const response = await fetch('http://104.198.53.36:9002/get_menu_names', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}` // using sessionStorage to get token
          }
        });
  
        const data = await response.json();
        if (data && data.menu_names) {
          setMenuNames(data.menu_names);
        }
      } catch (error) {
        console.error("Error fetching menu names:", error);
      }
    };
   
  
    fetchMenuNames();
  }, []);
  return (
    <div className="container_div">
      {/* Sidebar */}
      <div className="navigation">
      <div className="p-4">
        <img src="image/sidebar-logo.png" alt="" />
      </div>
      <div className="mt-8 menu-side">
        <div className="flex justify-center items-center">
          <img src="image/icon/Group.png" alt="" />
        </div>
        <div className="text-center text-white text-base font-semibold">
          <span>{userData && userData.userName}</span>
        </div>

        <div className="text-center text-white text-base font-normal">
          <span>User Type: {userData && userData.userType}</span>
        </div>
        <div className="sidebar_hr-container">
          <div className="sidebar_hr"></div>
        </div>
        <div className="mb-4 text-center text-white font-normal gap-3 flex justify-center items-center">
          <img src="image/icon/phone-fill.png" alt="" />
          <span>0{userData && userData.mobileNumber}</span>
        </div>
        <div className="justify-center text-center text-white font-normal flex">
          {/* <img src="image/icon/map-pin-2-fill.png" alt="" /> */}
          <span>{userData && userData.department}</span>
        </div>
        <div className="justify-center text-center text-white font-normal flex">
          {/* <img src="image/icon/map-pin-2-fill.png" alt="" /> */}
          <span>{userData && userData.branch}</span>
        </div>
      </div>
    </div>
    
      {/* Main */}
      <div className="main">
        {/* Topbar */}
        <div className="topbar mr-2 flex justify-between items-center">
          <div className="toggle">
            {/* <img src="image/icon/arrow-left-line.svg" className="w-10 h-10 text-white" alt="Toggle" /> */}
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
            {/* <img src="image/icon/Date-arrow.png" className="w-4 h-4" alt="Date Arrow" /> */}
            
          </div>
        </div>

        {/* Other Content */}
        <div className="content-div h-[80vh] flex justify-center items-center m-4 p-3">
      <div className="grid grid-cols-2 gap-32 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-16 md:gap-4 sm:gap-4 xs:gap-32">
      {menuNames.map((menuName, idx) => (
          <div 
            key={idx} 
            className="h-[9vh]" 
            onClick={() => handleMenuClick(menuName)} // Add the onClick handler here
            style={{ cursor: 'pointer' }}
          >
            <img src={`image/icon/${menuName.replace(/ /g, '-')}.png`} alt={`${menuName} Icon`} className="iconn" />
            <p className="mt-3 text-center">{menuName}</p>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}

export default Dashboard;