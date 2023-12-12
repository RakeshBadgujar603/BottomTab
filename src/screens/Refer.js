import { StyleSheet, Text, View, TextInput, FlatList, Image } from 'react-native'
import React from 'react'

const Refer = () => {

  const data = [
    { name: "sachin", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "manoj", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "harish", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "vinod", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "rahul", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "vivek", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "hariom", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "manish", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "harishankar", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "manohar", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "vishal", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "kalu", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "shyam", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "rinku", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "virender", Mobile: 8872992778, Rs: "Flat Rs 100" },
    { name: "kirshan", Mobile: 8872992778, Rs: "Flat Rs 100" },
]

  const onRenderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, flexDirection: "row", marginTop: 20,marginHorizontal:10,borderBottomWidth:1,paddingBottom:10,borderColor:"lightgray" }}>

        <View style={{ flex: 1, }}>
          <View style={{ height: 45, width: 45, borderRadius: 22.5, backgroundColor: (index % 2 == 0) ? "red" : "green"}}>
          <Text style={{ fontSize: 30, textAlign: "center"}}>{item.name[0]}</Text>
          </View>
        </View>

        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>{item.name}</Text>

          <View style={{ flexDirection: "row" }}>
            <Text style={{}}>{item.Mobile}</Text>
            <Text style={{ color: "green", marginLeft: 10 }}>{item.Rs}</Text>
          </View>

        </View>

        <View style={{flex:1}}>
          <Image
            source={require("../assets/wht.jpeg")}
            style={{ height: 30, width: 30, borderRadius: 7.5 }}
          />
        </View>

      </View>
    )
  }


  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 21, color: "black", fontWeight: "bold" }}>Refer</Text>

      <TextInput
        placeholder='Search Name or Mobile No.'
        style={{ borderWidth: 1, marginHorizontal: 10, marginTop: 10, borderRadius: 10, paddingHorizontal: 10, fontSize: 18 }}

      />

      <FlatList
        data={data}
        renderItem={onRenderItem}
      />
    </View>
  )
}

export default Refer

const styles = StyleSheet.create({})