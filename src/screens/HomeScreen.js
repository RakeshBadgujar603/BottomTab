import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const HomeScreen = (navigation) => {

    const data = [{name1:"Team OneCard",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
    {name1:"AmbitionBox",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
    {name1:"HDFC",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
    {name1:"Kotak Credit Card",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
    {name1:"Groww",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
    {name1:"Noukri",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
    {name1:"OneScore",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
    {name1:"AmbitionBox",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
    {name1:"HDFC",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
    {name1:"Kotak Credit Card",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
    {name1:"Groww",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
    {name1:"Noukri",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
    {name1:"OneScore",name2:"Rate Training anonymously ",name3:"Hiring season is here,and millions....."},
]

    const onRenderItem = ({ item, index }) => {
        return (
            <View>

                <View style={{flexDirection:"row",marginTop:30,marginLeft:10}}>

                    <Text style={{height:50,width:50,borderRadius:25,textAlign:"center",fontSize:33,backgroundColor:index%2==0?"skyblue":"orange"}}>{item.name1[0]}</Text>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>{item.name1}</Text>
                        <Text style={{fontWeight:"bold"}}>{item.name2}</Text>
                        <Text>{item.name3}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{marginBottom:10}}>
            <FlatList
                data={data}
                renderItem={onRenderItem}
            />
        </View>
    )

}

export default HomeScreen

const styles = StyleSheet.create({})