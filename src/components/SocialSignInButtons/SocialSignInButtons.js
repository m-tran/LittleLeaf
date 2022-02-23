import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
  const onFacebookPressed = () => {
    console.warn("Facebook");
  }

  const onGooglePressed = () => {
    console.warn("Google");
  }

  const onApplePressed = () => {
    console.warn("Apple");
  }

  return (
    <>
      <CustomButton
        text="Sign In With Facebook"
        onPress={onFacebookPressed}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In With Google"
        onPress={onGooglePressed}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In With Apple"
        onPress={onApplePressed}
        bgColor="#E3E3E3"
        fgColor="#363636"
      />
    </>
  )
}

export default SocialSignInButtons;