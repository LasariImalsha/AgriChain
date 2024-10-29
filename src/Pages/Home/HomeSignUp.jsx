// HomeSignUp.js
import React from 'react';
import { useSelector } from 'react-redux';
import WelcomeCard from '../../Components/WelcomeCard';
import Signup from '../Signup/Signup';
import SignupKey from "../Signup/SignupKey"

function HomeSignUp() {
//   const showKeyModel = useSelector((state) => state.signup.showKeyModel);
  const showKeyModel = useSelector((state) => state.signup.showSignupKey);

  return <WelcomeCard comp={showKeyModel ? <SignupKey /> : <Signup />} />;
}

export default HomeSignUp;
