import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInputs';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const SignInScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const { height } = useWindowDimensions();
	const navigation = useNavigation();

	const onSignInPressed = async () => {		
		if (loading) {
			return;
    }
		
    setLoading(true);
		
    try {
			// validate user
      await Auth.signIn(email, password);
			navigation.navigate('Dashboard');
      setUsername('')
      setPassword('')
    } catch (e) {
      console.log(e)
      Alert.alert('Oops', e.message);
    }

    setLoading(false);
	}

	const onForgotPasswordPressed = () => {
		navigation.navigate('ForgotPassword');
	}

	const OnSignUpPressed = () => {
		navigation.navigate('SignUp');
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Image
					source={Logo}
					style={[styles.logo, { height: height * 0.3 }]}
					resizeMode="contain"
				/>
				<Text style={styles.title}>Sign In</Text>
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
				<CustomButton
					text="Sign In"
					onPress={onSignInPressed}
				/>
				<CustomButton
					text="Forgot Password?"
					onPress={onForgotPasswordPressed}
					type="Tertiary"
				/>
				<SocialSignInButtons />
				<CustomButton
					text="Don't have an account? Create one"
					onPress={OnSignUpPressed}
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
	}
})

export default SignInScreen;