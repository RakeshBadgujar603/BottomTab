import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const SettingsScreen = ({navigation}) => {

   const onPressSignUp=()=>{
    navigation.navigate("Signup")
   }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 33, fontWeight: "600", marginTop: 50, marginLeft: 10 }}>Settings</Text>

      <TextInput
        placeholder='Search'
        style={{ borderRadius: 30, paddingHorizontal: 20, backgroundColor: "white", marginHorizontal: 10, marginTop: 10 }}
      />
      <View style={{ backgroundColor: "white", marginHorizontal: 20, marginTop: 20, height: 100, borderRadius: 20, flexDirection: "row" }}>
        <Image

          style={{ height: 80, width: 80, borderRadius: 40, backgroundColor: "black", marginLeft: 20, marginTop: 10 }}
          source={require("../assets/emoji.jpeg")}
        />
        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Omoji</Text>
          <Text style={{}}>create an animated omoji as</Text>
          <Text style={{}}>as unique as you are.</Text>
        </View>
      </View>

      <View style={{ backgroundColor: "white", marginHorizontal: 20, marginTop: 20, height: 100, borderRadius: 20, flexDirection: "row" }}>
        <Image

          style={{ height: 80, width: 80, borderRadius: 40, backgroundColor: "black", marginLeft: 20, marginTop: 10 }}
          source={require("../assets/user.jpg")}
        />
        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Sign in</Text>
          <Text style={{}}>Hey Tap Cloud, Find My, Dwvices</Text>
          <Text style={{}}>and more</Text>
        </View>
      </View>


      <View style={{ backgroundColor: "white", marginHorizontal: 20, marginTop: 20, height: 300, borderRadius: 20,}}>
        <View style={{ flexDirection: "row" }}>
        <View style={{marginLeft:20,marginTop:20}}>
          <MaterialIcons
            name="network-wifi"
            size={22}
            color={"black"}
          />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18,marginTop:20,marginLeft:20 }}>Wi-fi</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
        <View style={{marginLeft:20,marginTop:20}}>
          <MaterialIcons
            name="network-cell"
            size={22}
            color={"black"}
          />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18,marginTop:20,marginLeft:20 }}>Mobile network</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
        <View style={{marginLeft:20,marginTop:20}}>
          <Feather
            name="bluetooth"
            size={22}
            color={"black"}
          />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18,marginTop:20,marginLeft:20 }}>bluetooth</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
         
         <View style={{marginLeft:20,marginTop:20}}>
          <Entypo
            name="share"
            size={22}
            color={"black"}
          />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18,marginTop:20,marginLeft:20 }}>connection and sharing</Text>
        </View>

        <View style={{alignSelf:"center",marginTop:10}}>
          <Button
          title='signup'
          onPress={onPressSignUp}
          />
        </View>
       
      </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})