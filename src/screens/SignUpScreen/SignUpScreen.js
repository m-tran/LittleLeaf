import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInputs';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignUpPressed = () => {
    navigation.navigate('Confirm');
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  }

  const onTermsPressed = () => {
    console.warn("Terms");
    // TODO Create Terms page
    // navigation.navigate('Terms');
  }
  const onPolicyPressed = () => {
    console.warn("Policy");
    // TODO Create policy page
    // navigation.navigate('Policy');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image 
          source={Logo} 
          style={[styles.logo, { height: height * 0.3}]} 
          resizeMode="contain" 
        />
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput 
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput 
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput 
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput 
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          setValue={setPasswordConfirmation}
          secureTextEntry
        />
        <CustomButton
          text="Sign Up"
          onPress={onSignUpPressed}
        />
        {/* link to docs */}
        <Text style={styles.text}>
          By registering, you confirm that you accept our {' '}
          <Text style={styles.link} onPress={onTermsPressed}>Terms of Use</Text> and {' '}<Text style={styles.link} onPress={onPolicyPressed}>Privacy Policy</Text>.
        </Text>
        <SocialSignInButtons />
        <CustomButton
          text="Already have an account? Sign In"
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

export default SignUpScreen;