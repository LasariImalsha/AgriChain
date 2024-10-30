import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    profilePhoto: null,
    userName: '',
    name: '',
    address: '',
    phone: '',
    nic: '',
    email: '',
    contactAddress: '',
    landAddress: '',
    landHectares: '',
    cultivatedLandNumbers: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    setFormData((prev) => ({ ...prev, profilePhoto: URL.createObjectURL(e.target.files[0]) }));
  };

  return (
   <div className='flex flex-row gap-2 m-2 '>
      <div className='flex bg-slate-100 shadow-md rounded-lg items-center justify-center w-1/3'>
          <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Profile Information</h3>
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <img
              src={formData.profilePhoto || 'https://via.placeholder.com/100'}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <label className="absolute bottom-1 right-1 bg-blue-500 p-2 rounded-full text-white cursor-pointer">
              <FaCamera className="text-lg" />
              <input type="file" className="hidden" onChange={handlePhotoUpload} />
            </label>
          </div>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            placeholder="User Name"
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
          />
          <input
            type="text"
            name="nic"
            value={formData.nic}
            onChange={handleInputChange}
            placeholder="NIC"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
          </div>
      </div>

      <div className='flex flex-col w-2/3 gap-2'>
          <div className='bg-white shadow-md rounded-lg items-center justify-center px-4'>
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Personal Details</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Address"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
        <input
          type="text"
          name="nic"
          value={formData.nic}
          onChange={handleInputChange}
          placeholder="NIC"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
        <input
          type="text"
          name="contactAddress"
          value={formData.contactAddress}
          onChange={handleInputChange}
          placeholder="Contact Address"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
        <div className="flex justify-between">
          <div className='flex-row flex gap-x-2'>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Update</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
          </div>

          <button className="bg-red-500 text-white px-4 py-2 rounded-md">Change Password</button>
        </div>
      </div>
          </div>
          <div className='bg-white shadow-md rounded-lg items-center justify-center px-4 py-4'>
          <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Land Details</h3>
        <input
          type="text"
          name="landAddress"
          value={formData.landAddress}
          onChange={handleInputChange}
          placeholder="Land Address"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
        <input
          type="number"
          name="landHectares"
          value={formData.landHectares}
          onChange={handleInputChange}
          placeholder="Land Hectares"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
        />
        <input
          type="number"
          name="cultivatedLandNumbers"
          value={formData.cultivatedLandNumbers}
          onChange={handleInputChange}
          placeholder="Cultivated Land Numbers"
          className="w-full p-2 border border-gray-300 rounded-md"
        />

          <div className='flex-row flex gap-x-2 py-2'>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Update</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
          </div>
      </div>
          </div>
      </div>
   </div>
  );
};

export default UserProfileForm;
