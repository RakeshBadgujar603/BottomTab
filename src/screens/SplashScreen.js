import { StyleSheet, Image, View } from 'react-native'
import React,{useEffect} from 'react'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("MyTab")
    }, 500);
  }, [])
  
  return (
    <View style={{flex:1,alignSelf:"center",justifyContent:"center"}}>
      <Image
      source={require("../assets/Grow.png")}
      style={{height:200,width:200,borderRadius:100}}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})