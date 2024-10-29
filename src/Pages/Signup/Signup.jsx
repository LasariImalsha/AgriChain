import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SignupKey from './SignupKey';
import * as Yup from 'yup';
import { showSignupKey, hideSignupKey } from '../ReduxManagement/signupSlice';


function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showKeyModel = useSelector((state) => state.signup.showSignupKey);


    //handling the sign up
    const handleRegister = (values)=>{
      dispatch(showSignupKey());
      console.log(values);
    }
   
    // validation for signup
    const validate = Yup.object({
        email: Yup.string()
        .email("Invalid email")
        .required("*Required"),
        name: Yup.string()
        .required("*Required"),
        contactno: Yup.string()
        .required("*Required"),
        hashed_password: Yup.string()
        .required("*Password is Required"),
        address: Yup.string()
        .required("*Required"),
        NIC: Yup.string()
        .required("*Required"),
        confirm_password: Yup.string()
        .required("*Required"),
    });
  
    return (
     <>
      <Formik
        initialValues={{
          name:'',
          address:"",
          contactno:'',
          NIC:'',
          hashed_password:"",
          confirm_password:'',
          email:''
        }}
        // validationSchema={validate}
        onSubmit={handleRegister}
      >
       {(formik)=>(
        <Form className='flex flex-col gap-1 mt-3 w-full h-full mob2:px-12 md:px-0'>
          {/* Field for name */}
          <div className='flex flex-col h-14'>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
            />
            <ErrorMessage 
              name="name" 
              component="div" 
              className="text-red-500 text-[9px] font-medium italic " 
            />      
          </div>
  

          {/* Field for address */}
           <div className='flex flex-col h-14'>
            <Field
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              onChange={formik.handleChange}
              value={formik.values.address}
              className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
            />
            <ErrorMessage 
              name="address" 
              component="div" 
              className="text-red-500 text-[9px] font-medium italic" 
            />      
          </div>


          {/* Field for NIC */}
          <div className='flex flex-col h-14'>
            <Field
              type="text"
              id="NIC"
              name="NIC"
              placeholder="NIC"
              onChange={formik.handleChange}
              value={formik.values.NIC}
              className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
            />
            <ErrorMessage 
              name="NIC" 
              component="div" 
              className="text-red-500 text-[9px] font-medium italic" 
            />      
          </div>
  

           {/* Field for contact number */}
           <div className='flex flex-col h-14'>
            <Field
              type="text"
              id="contactno"
              name="contactno"
              placeholder="Contact No."
              onChange={formik.handleChange}
              value={formik.values.contactno}
              className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
            />
            <ErrorMessage 
              name="contactno" 
              component="div" 
              className="text-red-500 text-[9px] font-medium italic" 
            />      
          </div>

  
          {/* Field for Email*/}
          <div className='flex flex-col h-14'>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
            />
            <ErrorMessage 
              name="email" 
              component="div" 
              className="text-red-500 text-[9px] font-medium italic" 
            />      
          </div>
  
          {/* Field for password */}
          <div className='flex flex-col h-14'>
            <Field
              type="password"
              id="hashed_password"
              name="hashed_password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.hashed_password}
              className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
            />
            <ErrorMessage 
              name="hashed_password" 
              component="div" 
              className="text-red-500 text-[9px] font-medium italic" 
            />      
          </div>
  
  
        {/* Field for Confirm password */}
          <div className='flex flex-col h-14'>
            <Field
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              value={formik.values.confirm_password}
              className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
            />
            <ErrorMessage 
              name="confirm_password" 
              component="div" 
              className="text-red-500 text-[9px] font-medium italic" 
            />      
          </div>
  
        <div className='flex flex-col items-center gap-3 mt-3'>
            <button
              type="submit"
              className='bg-agro_green font-semibold w-full text-[13px] text-white p-2  rounded-lg'
            >
              SignUp
            </button>
            <h3 className='font-light text-black/50 text-[12px]  '>Already have an account?
              <button 
                onClick={()=>navigate("/")}
                className='text-agro_green font-bold ml-1 text-[13px]'
              > 
                Login to the Account
              </button> 
            </h3>
        </div>
        </Form>
       )}
      </Formik>  
        
      {/* when user click signup this will show the key to the farmer */}
      {/* {showKeyModel && (
        <div className="fixed inset-0 bg-gray-300/30 backdrop-blur-sm flex items-center justify-center">
          <SignupKey />
          <div onClick={() => dispatch(hideSignupKey())} className="absolute top-0 right-0 cursor-pointer p-2">
            X
          </div>
        </div>
      )} */}
    </>
    );
  }
  

export default Signup