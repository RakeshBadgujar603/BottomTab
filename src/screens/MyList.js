import { StyleSheet, Text, TextInput, View, Alert, Button, alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


let selectIndex = -1

const Todoo = () => {

    const [data, setData] = useState(["Sita Ram", "Ram Ram ji"])
    const [name, setName] = useState('')


    const onPressAdd = () => {

        if (name == "") {
            alert("kindly enter the name")
            return;
        }

        const existingList = [...data]
        existingList.push(name)
        setData(existingList)
        setName("")

    }

    const onPressDelete = (item, index) => {
        Alert.alert(
            '',
            'Are you sure you want to delete? ' + item,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'), style: 'cancel'
                },
                {
                    text: 'Sure yes I want to delete',
                    onPress: () => {
                        console.log('OK Pressed')

                        const existinList = [...data]
                        existinList.splice(index, 1)
                        setData(existinList)
                        console.log(index)
                    }
                },

            ],
            { cancelable: false }
        )
    }

    const onPressEdit = (item, index) => {
        setName(item)
        selectIndex = index

    }

    const onPressUpdate = () => {

        if (name == "") {
            alert("kindly enter the name")
            return;
        }

        const existingList = [...data]
        existingList.splice(selectIndex, 1, name)
        setData(existingList)
        setName("")
        selectIndex = -1
    }


    const onRenderItem = ({ item, index }) => {
        return (
            <View style={{ mineHight: 100, borderRadius: 20, width: 350, backgroundColor: "black", marginTop: 10, marginHorizontal: 10, padding: 10,flex:1,alignSelf:"center" }}>


                <View style={{ flexDirection: "row", alignSelf: "center" }}>

                   <View style={{flex:4}}>
                    <Text style={{ color: "white", fontSize: 44, textAlign: "center", paddingHorizontal:10}}>{item}</Text>
                    </View>


                    <TouchableOpacity style={{ alignSelf: "center", marginRight: 10,marginLeft:10,flex:.5 }}
                        onPress={() => { onPressDelete(item, index) }}
                    >
                        <AntDesign name={'delete'} size={21} color={"red"} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf: "center",paddingRight:10,flex:.5 }}
                        onPress={() => { onPressEdit(item, index) }}
                    >
                        <AntDesign name={'edit'} size={21} color={"white"} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>


            <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <TextInput
                    placeholder='Enter Your Name'
                    style={{ marginHorizontal: 10,borderRadius:10,borderColor:"red", flex:1,marginTop: 10, paddingHorizontal: 10, borderWidth: 1 }}
                    value={name}
                    defaultValue={name}
                    onChangeText={(text) => { setName(text) }}
                    
                />

                <TouchableOpacity style={{ alignSelf: "center",marginRight:10 }}
                onPress={onPressAdd} 
                >
                    <Ionicons
                       name={"add-circle"}
                       size={33}
                       color={"black"}
                        
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: "center",marginRight:10 }}
                onPress={onPressUpdate}
                >
                    <MaterialIcons
                        name={"update"}
                        size={33}
                        color={"black"}
                        
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                data={data}
                renderItem={onRenderItem}
            />
        </View>
    )
}

export default Todoo

const styles = StyleSheet.create({})