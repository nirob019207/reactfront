import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const [menuNames, setMenuNames] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // State to handle dropdown visibility
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear(); // Clear session data
    navigate('/'); // Navigate to home or login page
  };
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
    <div className="navigation">

      <ul>
        <li className="pt-6 p-2">
          <img src="image/sidebar-logo.png" alt="" />
        </li>
        {menuNames.map((menuName, idx) => (

        <li onClick={() => handleMenuClick(menuName)} >

          <a href="">
            <span className="icon">

            <img src={`image/icon/${menuName.replace(/ /g, '-')}.png`} alt={`${menuName} Icon`}/>
            </span>
            <span className="title">{menuName}</span>
          </a>

        </li>
                  ))}
       
      </ul>

    </div>
  );
}

export default Sidebar;
