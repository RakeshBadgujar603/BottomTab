import { StyleSheet, Text, TextInput, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import React from 'react'

const Wallet = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue" }}>
      <Text style={{ textAlign: "center", fontSize: 21, color: "black", fontWeight: "bold" }}>Wallet</Text>


      <View style={{ height: 200, width: 350, alignSelf: "center", marginTop: 20, backgroundColor: "white", borderRadius: 20, }}>

        <View style={{ flexDirection: "row" }}>

          <View>

            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 18, color: "black", fontWeight: "bold" }}>Total Wallet Balance</Text>
            <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 18, color: "black", fontWeight: "bold" }}>Rs:- 122</Text>
          </View>

          <Entypo
            name={"wallet"}
            size={40}
            color={"black"}
            style={{ marginTop: 20, marginLeft: 80 }}
          />
        </View>


        <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}>

          <View style={{ flex: 1 }}>
            <MaterialCommunityIcons
              name={"barcode-scan"}
              size={60}
              color={"skyblue"}
              style={{ alignSelf: "center" }}

            />

            <Text style={{ marginTop: 5, fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Pay</Text>

          </View>

          <View style={{ flex: 1 }}>
            <MaterialCommunityIcons
              name={"bank-transfer-in"}
              size={60}
              color={"skyblue"}
              style={{ alignSelf: "center" }}

            />

            <Text style={{ marginTop: 5, fontSize: 18,  fontWeight: "bold", textAlign: "center" }}>bank-transfer</Text>

          </View>

          <View style={{ flex: 1 }}>
            <MaterialCommunityIcons
              name={"barcode-scan"}
              size={60}
              color={"skyblue"}
              style={{ alignSelf: "center" }}
            />

            <Text style={{ marginTop: 5, fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Add Money</Text>

          </View>

        </View>

      </View>


      <View style={{ height: 300, width: 350, alignSelf: "center", marginTop: 20, backgroundColor: "white", borderRadius: 20, }}>

        <View style={{ flexDirection: "row",marginLeft:20 }}>

            <Text style={{  marginTop: 10, fontSize: 18, color: "black", fontWeight: "bold" }}>Add Money to</Text>
            <Text style={{  marginTop: 10, fontSize: 18, color: "skyblue", fontWeight: "bold" }}>Wallet</Text>
          

          <MaterialIcons
            name={"keyboard-arrow-down"}
            size={40}
            color={"skyblue"}
            style={{ marginTop: 5 }}
          />
        </View>

        <TextInput
        placeholder='Amount to be add'
        style={{borderWidth:1,marginHorizontal:10,paddingHorizontal:10,borderRadius:10,borderColor:"lightgray",marginTop:10}}
        />

        <View style={{marginTop:10,alignSelf:"center",flexDirection:"row"}}>

          <View style={{height:40,borderWidth:1,borderColor:"lightgray",width:80,borderRadius:20}}>
            <Text style={{textAlign:"center",marginTop:5,fontSize:18,color:"black"}}>+100</Text>
          </View>

          <View style={{height:40,borderWidth:1,borderColor:"lightgray",width:80,borderRadius:20,marginLeft:20}}>
            <Text style={{textAlign:"center",marginTop:5,fontSize:18,color:"black"}}>+200</Text>
          </View>

          <View style={{height:40,borderWidth:1,borderColor:"lightgray",width:80,borderRadius:20,marginLeft:20}}>
            <Text style={{textAlign:"center",marginTop:5,fontSize:18,color:"black"}}>+500</Text>
          </View>
        </View>

        <View style={{height:60,borderRadius:10,width:300,alignSelf:"center",marginTop:20,backgroundColor:"skyblue"}}>
          <Text style={{color:"white",fontSize:22,textAlign:"center",marginTop:10}}>Proceed to add Rs1000</Text>
        </View>


       
      </View>




    </View>
  )
}

export default Wallet

const styles = StyleSheet.create({})