import React from 'react';
import Sidebar from '../navabar/Sidebar';
import Topbar from '../navabar/TopBar';
import Form from '../form/Form';

function CreateNew() {
  return (
    <div className="container_div">
      <Sidebar />
      
      <div className="main">
        <Topbar />
        
        {/* <div className="bg-white mt-2 w-full px-3 "> */}
          {/* ... other content ... */}
        {/* </div> */}
        
        <Form />
      </div>
    </div>
  );
}

export default CreateNew;
