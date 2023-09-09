import React from 'react';
import Sidebar from '../navabar/Sidebar';
import Topbar from '../navabar/TopBar';
import Upload from './Upload';


function UploadFile() {
  return (
    <div className="container_div">
    <Sidebar />
    
    <div className="main">
      <Topbar />
       
        
        <Upload/>
      </div>
    </div>
  );
}

export default UploadFile;