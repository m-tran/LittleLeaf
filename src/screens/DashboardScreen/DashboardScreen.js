import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const DashboardScreen = () => {
  const [loading, setLoading] = useState(false);

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignOutPressed = async () => {
    if (loading) {
      return;
    }
    
    setLoading(true);
    try {
      const res = await Auth.signOut();
      console.log(res)
    } catch (e) {
      console.log(e)
      Alert.alert('Oops', e.message);
    }
    
    setLoading(false); 
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image 
          source={Logo} 
          style={[styles.logo, { height: height * 0.3}]} 
          resizeMode="contain" 
        />
        <Text style={styles.title}>Dashboard</Text>
        <CustomButton
          text="Logout"
          onPress={onSignOutPressed}
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

export default DashboardScreen;