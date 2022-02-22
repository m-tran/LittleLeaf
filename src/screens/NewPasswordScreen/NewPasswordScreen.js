import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInputs';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onForgotPasswordPressed = () => {
    navigation.navigate('Home');  
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  }

  const onResendPressed = () => {
    console.warn("Resend");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image 
          source={Logo} 
          style={[styles.logo, { height: height * 0.3}]} 
          resizeMode="contain" 
        />
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomInput 
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomInput 
          placeholder="Enter your new Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton
          text="Reset"
          onPress={onForgotPasswordPressed}
        />
        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="Secondary"
        />
        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="Tertiary"
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  }, 
  link: {
    color: '#FD8075'
  }
})

export default NewPasswordScreen;