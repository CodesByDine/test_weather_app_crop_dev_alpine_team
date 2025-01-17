// different tools being imported into the project(Ignore for now)
import React, {useEffect, useLayoutEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Image, TextInput } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {createStackNavigation} from '@react-navigation/stack';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {

  //Two states which are added for the password and email inputs from the user.
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <View style={styles.container}>

      {/* Image or logo being added here */}
      
      <Image 
      source = {require('./img/crop_logo.png')}
      style = {styles.image}
      />

      {/* Default text which comes with the react native installation package */}
      
      <Text>something for now</Text>

    {/* Input for the users email address */}
    
    <View style={styles.inputView}>
      <TextInput 
      style={styles.TextInput}
      placeholder='Email'
      placeholderTextColor='black'
      onChangeText={(email)=> setEmail(email)}/>
    </View>
    
    {/* Input for the users password */}
    
    <View style={styles.inputView}>
      <TextInput 
      style={styles.TextInput}
      placeholder='Password'
      placeholderTextColor='black'
      secureTextEntry={true}// Allows the user's text to be hidden 
      onChangeText={(password)=> setPassword(password)}/>
    </View>

    {/* Adding a forgot password link/button */}
    <View>
      <TouchableOpacity>
        <Text style={styles.forgt_button}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login_Button}>
        <Text style={styles.login_Text}>Login</Text>
      </TouchableOpacity>
        
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

//This is the CSS of this whole project!!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    marginBottom:250,
    // marginTop:120,
  },
  inputView: {
    backgroundColor:'grey',
    borderRadius: 12,
    width:'70%',
    height: 45,
    marginBottom:20,
    alignItems:'center'
  },
  TextInput:{
    height:50,
    flex:1,
    padding:10,
    marginLeft:-2,
  },
  forgt_button:{
    height:30,
    marginBottom:30,
  },
  login_Button:{
    width:'80%',
    borderRadius: 12,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    // marginTop: 10,
    backgroundColor:'#609966'
  }
});
