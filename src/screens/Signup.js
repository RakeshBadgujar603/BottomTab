import { StyleSheet, Button, View, TextInput,Alert,Text } from 'react-native'
import React,{useRef,useState} from 'react'

const Signup = ({navigation}) => {

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const dobRef = useRef(null)
  const mobileRef = useRef(null)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dob, setDob] = useState("")
  const [mobile,setMobile] = useState("")

  const onPressCreateAcount=()=>{
    if(firstName==""){
      Alert.alert("kindly enter first name")
      return;
    }else if(lastName==""){
      Alert.alert("kindly enter last name")
      return;
    }else if(dob==""){
      Alert.alert("kindly enter dob")
      return;
    }else if(mobile==""){
      Alert.alert("kindly enter mobile no")
      return;
    }else{
    Alert.alert("you have created an account")
    navigation.navigate("SettingsScreen")
  }

  }

  return (
    <View style={{flex:1,backgroundColor:"lightgray"}}>


      <Text style={{textAlign:"center",marginTop:20,fontSize:33,color:"blue",marginBottom:20}}>Signup </Text>

      <TextInput
        ref={firstNameRef}
        placeholder='Enter Your First Name'
        style={{ marginHorizontal: 10, marginTop: 10, paddingHorizontal: 20, borderWidth: 1, borderRadius: 10,backgroundColor:"white" }}
        onSubmitEditing={()=>{lastNameRef.current.focus();}}
        value={firstName}
        defaultValue={firstName}
        onChangeText={(text)=>{setFirstName(text)}}
    
      />

      <TextInput
        
        ref={lastNameRef}
        placeholder='Enter Your Last Name'
        style={{ marginHorizontal: 10, marginTop: 10, paddingHorizontal: 20, borderWidth: 1, borderRadius: 10 ,backgroundColor:"white"}}
        onSubmitEditing={()=>{dobRef.current.focus();}}
        value={lastName}
        defaultValue={lastName}
        onChangeText={(text)=>{setLastName(text)}}
      />

      <TextInput
       ref={dobRef}
        placeholder='Enter Your DOB'
        style={{ marginHorizontal: 10, marginTop: 10, paddingHorizontal: 20, borderWidth: 1, borderRadius: 10,backgroundColor:"white" }}
        onSubmitEditing={()=>{mobileRef.current.focus();}}
        value={dob}
        defaultValue={dob}
        onChangeText={(text)=>{setDob(text)}}
      />

      <TextInput
      ref={mobileRef}
        placeholder='Enter Your Mobile No'
        style={{ marginHorizontal: 10, marginTop: 10, paddingHorizontal: 20, borderWidth: 1, borderRadius: 10,backgroundColor:"white" }}
        onSubmitEditing={()=>{onPressCreateAcount();}}
        keyboardType='numeric'
        value={mobile}
        defaultValue={mobile}
        onChangeText={(text)=>{setMobile(text)}}
      />

      <View style={{marginTop:20,alignSelf:"center"}}>
        <Button
          title='Create Acount'
          onPress={onPressCreateAcount}
        />
      </View>

    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})