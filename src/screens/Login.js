import { StyleSheet, Text, View, Switch, TextInput, Image } from 'react-native'
import React from 'react'



const Notification = ({ navigation }) => {


    return (
        <View style={{ flex: 1 ,backgroundColor:"skyblue"}}>

            <View style={{ marginTop: 10, backgroundColor: "skyblue", flex: 1 }}>

                <View style={{ flexDirection: "row", }}>
                    <View style={{ flex: 1, backgroundColor: "skyblue" }}>
                        <Text style={{ marginLeft: 10 }}>Brand Mall</Text>
                        <Switch
                            style={{ alignSelf: "flex-start", marginLeft: 10 }}
                        />
                    </View>

                    <View style={{ flex: 2, marginRight: 10 }}>
                        <TextInput
                            style={{ borderWidth: 1,textAlign:"center", paddingHorizontal: 10, borderRadius: 10, backgroundColor: "white" }}
                            placeholder='Search for products'
                        />
                    </View>
                </View>

                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <View style={{ height: 180, width: 160, backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
                        <Image
                            source={require("../assets/p1.png")}
                            style={{ height: 100, width: 80, alignSelf: "center" }}
                            resizeMode='contain'
                        />

                        <Text style={{ fontSize: 18,textAlign:"center", fontWeight: "bold" }}>pizza</Text>
                        <Text style={{ fontSize: 18, textAlign:"center",fontWeight: "bold", color: "green" }}>Min. 50% off</Text>
                    </View>
                    <View style={{ height: 180, marginLeft: 10, width: 160, backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
                        <Image
                            source={require("../assets/p2.jpeg")}
                            style={{ height: 100, width: 80, alignSelf: "center" }}
                            resizeMode='contain'
                        />

                        <Text style={{ fontSize: 15, textAlign:"center", fontWeight: "bold" }}>pizza</Text>
                        <Text style={{ fontSize: 15, textAlign:"center", fontWeight: "bold", color: "green" }}>Min. 50% off</Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1.5 }}>
                <Text style={{ fontSize: 21, fontWeight: "bold", marginTop: 10, marginLeft: 10 }}>Sponsored</Text>
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <View style={{ height: 160, width: 120, backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
                        <Image
                            source={require("../assets/p1.png")}
                            style={{ height: 100, width: 80, alignSelf: "center" }}
                            resizeMode='contain'
                        />

                        <Text style={{ fontSize: 15, textAlign:"center", fontWeight: "bold" }}>pizza</Text>
                        <Text style={{ fontSize: 15,textAlign:"center", fontWeight: "bold", color: "green" }}>Min. 50% off</Text>
                    </View>

                    <View style={{ height: 160, marginLeft: 10, width: 110, backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
                        <Image
                            source={require("../assets/Bur.jpeg")}
                            style={{ height: 100, width: 80, alignSelf: "center" }}
                            resizeMode='contain'
                        />

                        <Text style={{ fontSize: 15,textAlign:"center", fontWeight: "bold" }}>burger</Text>
                        <Text style={{ fontSize: 15, textAlign:"center", fontWeight: "bold", color: "green" }}>Min. 20% off</Text>
                    </View>

                    <View style={{ height: 160, marginLeft: 10, width: 110, backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
                        <Image
                            source={require("../assets/chowm.jpeg")}
                            style={{ height: 100, width: 80, alignSelf: "center" }}
                            resizeMode='contain'
                        />

                        <Text style={{ fontSize: 15, textAlign:"center", fontWeight: "bold" }}>chowmin</Text>
                        <Text style={{ fontSize: 15, textAlign:"center", fontWeight: "bold", color: "green" }}>Min. 30% off</Text>
                    </View>
                </View>
                
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <View style={{ height: 160, width: 110, backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
                        <Image
                            source={require("../assets/p1.png")}
                            style={{ height: 100, width: 80, alignSelf: "center" }}
                            resizeMode='contain'
                        />

                        <Text style={{ fontSize: 15, textAlign:"center", fontWeight: "bold" }}>pizza</Text>
                        <Text style={{ fontSize: 15, textAlign:"center", fontWeight: "bold", color: "green" }}>Min. 50% off</Text>
                    </View>

                    <View style={{ height: 160, marginLeft: 10, width: 110, backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
                        <Image
                            source={require("../assets/Bur.jpeg")}
                            style={{ height: 100, width: 80, alignSelf: "center" }}
                            resizeMode='contain'
                        />

                        <Text style={{ fontSize: 15, textAlign:"center", fontWeight: "bold" }}>burger</Text>
                        <Text style={{ fontSize: 15, textAlign:"center", fontWeight: "bold", color: "green" }}>Min. 20% off</Text>
                    </View>

                    <View style={{ height: 160, marginLeft: 10, width: 110, backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
                        <Image
                            source={require("../assets/chowm.jpeg")}
                            style={{ height: 100, width: 80, alignSelf: "center" }}
                            resizeMode='contain'
                        />

                        <Text style={{ fontSize: 15, textAlign:"center", fontWeight: "bold" }}>chowmin</Text>
                        <Text style={{ fontSize: 15, textAlign:"center", fontWeight: "bold", color: "green" }}>Min. 30% off</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

export default Notification

const styles = StyleSheet.create({})