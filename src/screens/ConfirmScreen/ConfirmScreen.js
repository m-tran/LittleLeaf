import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInputs';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmScreen = () => {
  const [code, setCode] = useState('');
  
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  }

  const onResendPressed = () => {
    console.warn("Resend");
    // TODO Resend Code
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image 
          source={Logo} 
          style={[styles.logo, { height: height * 0.3}]} 
          resizeMode="contain" 
        />
        <Text style={styles.title}>Confirm Your Email</Text>
        <CustomInput 
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomButton
          text="Confirm"
          onPress={onConfirmPressed}
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

export default ConfirmScreen;