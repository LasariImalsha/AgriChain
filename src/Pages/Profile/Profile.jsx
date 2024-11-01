import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function Profile() {
  const handleLoginSubmit = (values) => {
    console.log(values);
  };

  const validate = Yup.object({
    user_name: Yup.string().required('*Required'),
    name: Yup.string().required('*Required'),
    address: Yup.string().required('*Required'),
    phone: Yup.string().required('*Required'),
    nic: Yup.string().required('*Required'),
    email: Yup.string().required('*Required'),
  });

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
    cultivatedLandNumbers: '',
  });

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex flex-col w-[750px] items-center bg-gray-300/20 shadow-md justify-center rounded-md relative">
        <div className="bg-agro_green/70 rounded-t-lg w-full flex justify-center items-center h-24">
          <img
            src={formData.profilePhoto || 'https://via.placeholder.com/100'}
            alt="Profile"
            className="absolute top-[-50px] w-24 h-24 rounded-full object-cover"
          />
        </div>

        <h1 className="text-xl mt- font-bold p-2 text-center text-black/70">Profile Name</h1>

        <Formik
          initialValues={{
            user_name: 'John@123',
            name: 'John',
            address: 'Havelock, Australia',
            phone: '+24789436785',
            nic: '98758484158V',
            email: 'john123@gmail.com',
          }}
          validationSchema={validate}
          onSubmit={handleLoginSubmit}
        >
          {(formik) => (
            <Form className="w-full flex flex-col py-4 px-12">
              {/* Username Field */}
              <div className="flex flex-col text-[14px] h-12 mb-4">
                <div className="flex flex-row gap-12 items-center">
                  <label className="w-32 text-right font-semibold">Username</label>
                  <div className="w-full flex flex-col">
                    <Field
                      type="text"
                      id="user_name"
                      name="user_name"
                      className="w-full p-2 text-[12px] text-black/60 rounded-lg bg-transparent border border-gray-400 focus:outline-none"
                    />
                    <ErrorMessage
                      name="user_name"
                      component="div"
                      className="text-red-500 text-[9px] font-medium italic mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Name Field */}
              <div className="flex flex-col text-[14px] h-12 mb-4">
                <div className="flex flex-row gap-12 items-center">
                  <label className="w-32 text-right font-semibold">Name</label>
                  <div className="w-full flex flex-col">
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2 text-[12px] text-black/60 rounded-lg bg-transparent border border-gray-400 focus:outline-none"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-[9px] font-medium italic mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Address Field */}
              <div className="flex flex-col text-[14px] h-12 mb-4">
                <div className="flex flex-row gap-12 items-center">
                  <label className="w-32 text-right font-semibold">Address</label>
                  <div className="w-full flex flex-col">
                    <Field
                      type="text"
                      id="address"
                      name="address"
                      className="w-full p-2 text-[12px] text-black/60 rounded-lg bg-transparent border border-gray-400 focus:outline-none"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-[9px] font-medium italic mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Field */}
              <div className="flex flex-col text-[14px] h-12 mb-4">
                <div className="flex flex-row gap-12 items-center">
                  <label className="w-32 text-right font-semibold">Phone No.</label>
                  <div className="w-full flex flex-col">
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full p-2 text-[12px] text-black/60 rounded-lg bg-transparent border border-gray-400 focus:outline-none"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-[9px] font-medium italic mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* NIC Field */}
              <div className="flex flex-col text-[14px] h-12 mb-4">
                <div className="flex flex-row gap-12 items-center">
                  <label className="w-32 text-right font-semibold">NIC</label>
                  <div className="w-full flex flex-col">
                    <Field
                      type="text"
                      id="nic"
                      name="nic"
                      className="w-full p-2 text-[12px] text-black/60 rounded-lg bg-transparent border border-gray-400 focus:outline-none"
                    />
                    <ErrorMessage
                      name="nic"
                      component="div"
                      className="text-red-500 text-[9px] font-medium italic mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col text-[14px] h-12 mb-4">
                <div className="flex flex-row gap-12 items-center">
                  <label className="w-32 text-right font-semibold">Email</label>
                  <div className="w-full flex flex-col">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 text-[12px] text-black/60 rounded-lg bg-transparent border border-gray-400 focus:outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-[9px] font-medium italic mt-1"
                    />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Profile;
