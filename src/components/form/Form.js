import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Form() {

  const [selectedProfession, setSelectedProfession] = useState('');
  const [selectedIdentityDocument, setSelectedIdentityDocument] = useState('');
  const [professionOptions, setProfessionOptions] = useState([]); // State to store profession options
  const [identityDocumentOptions, setIdentityDocumentOptions] = useState([]); // State to store identity document options

  useEffect(() => {
    // Fetch profession options from the API
    const fetchProfessionTypes = async () => {
      try {
        const response = await fetch('http://104.198.53.36:9002/get_profession_type', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem('token')}` // using sessionStorage to get token
            }
          });

        const data = await response.json();
        if (data && data.profession_types) {
          // Extract the profession types from the API response
          const options = data.profession_types.map((type) => type.prof_type);
          setProfessionOptions(options); // Update the state with profession options
        }
      } catch (error) {
        console.error("Error fetching profession types:", error);
      }
    };
// Fetch identity document options from the API

  fetchProfessionTypes();
  }, []);
  useEffect(() => {
  const fetchIdentityDocumentTypes = async () => {
    try {
      const response = await fetch('http://104.198.53.36:9002/get_identity_doc_list', {
        method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem('token')}` // using sessionStorage to get token
            }
          });

      const data = await response.json();
      if (data && data.role_name) {
        const options = data.role_name.map((type) => type.doc_name); // Extract doc_name
        setIdentityDocumentOptions(options); // Update the state with identity document options
      }
    } catch (error) {
      console.error("Error fetching identity document types:", error);
    }
  };
  fetchIdentityDocumentTypes();

}, []);



    return (
        <div>
            <div className="bg-white mt-2 w-full px-3">
                <div className="flex justify-between xs:gap-3">
                    <ul className="flex gap-3 text-lg text-gray-500">
                        <li><img src="image/icon/arrow-left.png" alt="" /></li>
                        <li><h1>Create New File</h1></li>
                    </ul>
                    <ul className="flex mr-8 text-gray-700 w-[273px]">
                        <li><a href="#">SLI/</a></li>
                        <li><a href="#">New File/</a></li>
                        <li><a href="#">Create New File</a></li>
                    </ul>
                </div>
            </div>

            <div className="content-div h-[82vh] mx-4  mt-[1vh] px-5">
                { /* Each input container */ }
                <InputField label="Applicant Name" placeholder="Applicant Name" />
                <InputField label="Applicant Mother Name" placeholder="Applicant Mother Name" />
                <InputField label="Date of Birth" placeholder="Date of Birth" />
                <InputField
                    label="Profession Type"
                    placeholder="Select a profession"
                    dropdown={{
                        value: selectedProfession,
                        onChange: (e) => setSelectedProfession(e.target.value),
                        options: professionOptions,
                    }}
                    />
                 <InputField
                    label="Identity Document Type"
                    placeholder="Select a Document Type"
                    dropdown={{
                        value: selectedIdentityDocument,
                        onChange: (e) => setSelectedIdentityDocument(e.target.value),
                        options: identityDocumentOptions,
                    }}
                    />
                <InputField label="Identity Document Type" placeholder="Identity Document Type" />
                <InputField label="Identity Document Id" placeholder="Identity Document Id" />
                <InputField label="Sum Assured" placeholder="Sum Assured" />

                <div className="mt-[2vh] h-[9vh]">
                <Link to="/UploadFile">
                <button className="log-btn px-8 rounded py-1 text-white" id="openModalButton">
                    Check Information
                </button>
                </Link>
                    </div>
            </div>
        </div>
    );
}

const InputField = ({ label, placeholder, dropdown }) => (
    <div className="w-full h-[8vh] mt-[1vh] xs:w-full md:w-[516px] lg:w-[516px] xl:w-[516px] 2xl:w-[516px]">
      <label>{label}</label>
      {dropdown ? (
        <select
          className="w-full py-[1vh] px-4 border-stone-300 mt-[1vh"
          value={dropdown.value}
          onChange={dropdown.onChange}
        >
          <option value="">{placeholder}</option>
          {dropdown.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          className="w-full py-[0.5vh] px-4 border-stone-300 mt-[1vh"
          placeholder={placeholder}
        />
      )}
    </div>
  );

export default Form;
