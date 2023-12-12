import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import React from 'react'

const Allorders = () => {
  return (
    <View style={{flex:1}}>
      <Text style={{ textAlign: "center", fontSize: 21, color: "black", fontWeight: "bold",textDecorationLine:"underline" }}>My Orders</Text>

      <View style={{height:80,borderColor:"lightgray",width:"100%",marginTop:10,borderWidth:1,flexDirection:"row"}}>
        
        <View style={{flex:3}}>
        <TextInput
        placeholder='Search your order here'
        style={{borderWidth:1,borderColor:"lightgray",marginLeft:10,marginTop:10,marginBottom:10,borderRadius:10,paddingHorizontal:10,fontSize:15}}
        />
        </View>
        
       <View style={{flex:.5,marginTop:10,marginLeft:10}}>
        <Ionicons
        name={"filter"}
        size={33}
        />
        </View>

        <View style={{flex:.5,marginTop:10}}>
        <Text>Filters</Text>
        </View>

      </View>

      <View style={{height:180,borderColor:"white",width:"100%",borderWidth:1,flexDirection:"row",borderColor:"lightgray"}}>

        <View style={{flex:2}}>
          <Image
          source={require("../assets/s1.jpg")}
          style={{width:80,height:180}}
          />
        </View>

        <View style={{flex:4}}>
          <Text style={{fontSize:18,marginTop:20}}>Delivered on May 16</Text>
          <Text style={{fontSize:15,marginTop:10}}>lakhani shoe pair .....</Text>
          <View style={{marginTop:10,flexDirection:"row"}}>
            <Entypo
            name={"star"}
            size={20}
            color={"green"}
            />
            <Entypo
            name={"star"}
            size={20}
            color={"green"}
            />
            <Entypo
            name={"star"}
            size={20}
            color={"green"}
            />
            <Entypo
            name={"star"}
            size={20}
            color={"green"}
            />
            <Entypo
            name={"star"}
            size={20}
            
            />
          </View>
          <Text style={{fontSize:15,marginTop:10,color:"blue"}}>Write a Reviw</Text>
        </View>

        <View style={{flex:1}}>
          <MaterialCommunityIcons
          name={"greater-than"}
          size={33}
          style={{marginTop:50}}
          />
        </View>
        

      </View>

      <View style={{height:180,borderColor:"white",width:"100%",borderWidth:1,flexDirection:"row",borderColor:"lightgray"}}>

        <View style={{flex:2}}>
          <Image
          source={require("../assets/s3.jpg")}
          style={{width:80,height:180}}
          />
        </View>

        <View style={{flex:4}}>
          <Text style={{fontSize:18,marginTop:20}}>Delivered on May 16</Text>
          <Text style={{fontSize:15,marginTop:10}}>lakhani shoe pair .....</Text>
          <View style={{marginTop:10,flexDirection:"row"}}>
            <Entypo
            name={"star"}
            size={20}
            color={"green"}
            />
            <Entypo
            name={"star"}
            size={20}
            color={"green"}
            />
            <Entypo
            name={"star"}
            size={20}
            color={"green"}
            />
            <Entypo
            name={"star"}
            size={20}
            color={"green"}
            />
            <Entypo
            name={"star"}
            size={20}
            
            />
          </View>
          <Text style={{fontSize:15,marginTop:10,color:"blue"}}>Write a Reviw</Text>
        </View>

        <View style={{flex:1}}>
          <MaterialCommunityIcons
          name={"greater-than"}
          size={33}
          style={{marginTop:50}}
          />
        </View>
        

      </View>

      <View style={{height:180,borderColor:"white",width:"100%",borderWidth:1,flexDirection:"row",borderColor:"lightgray"}}>

        <View style={{flex:2}}>
          <Image
          source={require("../assets/s2.jpeg")}
          style={{width:80,height:180}}
          />
        </View>

        <View style={{flex:4}}>
          <Text style={{fontSize:18,marginTop:20}}>Delivered on May 16</Text>
          <Text style={{fontSize:15,marginTop:10}}>lakhani shoe pair .....</Text>
          <View style={{marginTop:10,flexDirection:"row"}}>
            <Entypo
            name={"star"}
            size={20}
            color={"green"}
            />
            <Entypo
            name={"star"}
            size={20}
            color={"green"}
            />
            <Entypo
            name={"star"}
            size={20}
            color={"green"}
            />
            <Entypo
            name={"star"}
            size={20}
            color={"green"}
            />
            <Entypo
            name={"star"}
            size={20}
            
            />
          </View>
          <Text style={{fontSize:15,marginTop:10,color:"blue"}}>Write a Reviw</Text>
        </View>

        <View style={{flex:1}}>
          <MaterialCommunityIcons
          name={"greater-than"}
          size={33}
          style={{marginTop:50}}
          />
        </View>
        

      </View>


    </View>
  )
}

export default Allorders

const styles = StyleSheet.create({})