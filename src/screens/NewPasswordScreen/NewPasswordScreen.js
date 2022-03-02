import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInputs';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const route = useRoute();

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onForgotPasswordPressed = async() => {
    if (loading) {
      return;
    }
    
    setLoading(true);
    
    try {
      const email = route?.params?.email

      await Auth.forgotPasswordSubmit(email, code, password)
      navigation.navigate('SignIn'); 
      setCode('')
      setPassword('')
    } catch (e) {
      Alert.alert('Oops', e.message);
    }

    setLoading(false);  
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
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