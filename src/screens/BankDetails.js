import { StyleSheet, Text, View, TextInput, FlatList, Image } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import React from 'react'

const Refer = () => {

  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 21, color: "black", fontWeight: "bold",marginTop:10 }}>Bank Details</Text>

      <TextInput
        placeholder='Search the bank name'
        style={{ borderWidth: 1, marginHorizontal: 10, marginTop: 10, borderRadius: 10, paddingHorizontal: 10, fontSize: 18 }}

      />

      <Text style={{ marginLeft:10,marginTop:10, fontSize: 21, color: "black", fontWeight: "bold" }}>Popular Bank</Text>

      <View>
        <Image
        source={require("../assets/bank.jpeg")}
        style={{width:400,height:400,marginTop:10}}
        />
      </View>

      <Text style={{ marginLeft:10,marginTop:10, fontSize: 21, color: "black", fontWeight: "bold" }}>All Other Banks</Text>

      <View style={{flexDirection:"row"}}>

        <FontAwesome
        name="bank"
        size={33}
        style={{marginTop:20,marginLeft:10}}
        />

        <Text style={{marginTop:20,fontSize:22,marginLeft:20,color:"black"}}>AU Small Finance Bank</Text>

      </View>

     
    </View>
  )
}

export default Refer

const styles = StyleSheet.create({})