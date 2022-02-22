import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../../../LittleLeaf/styles.js';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  const onLoginPressed = () => {
    navigation.navigate('SignInScreen');
  }

  const onSignUpPressed = () => {
    navigation.navigate('SignUpScreen');
  }

  return (
    <View
      style={{
        flex: 1,
        marginTop: "25%",
        marginLeft: "10%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}>
      <Text style={styles.titleText}>Home</Text>
	    <Text style={styles.baseText}>Add Plant</Text>
      <CustomButton
        text="Login"
        onPress={onLoginPressed}
        type="Tertiary"
      />
      <CustomButton
        text="Signup"
        onPress={onSignUpPressed}
        type="Tertiary"
      />
    </View>
  )
}
export default Home;