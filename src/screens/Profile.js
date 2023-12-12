import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import Octicons from "react-native-vector-icons/Octicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import React from 'react'

const Profile = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10, borderBottomWidth: 1, borderColor: "lightgray", paddingBottom: 10 }}>

                <Image
                    source={require("../assets/rakesh.jpg")}
                    style={{ height: 80, width: 80, borderRadius: 40 }}
                />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 22, fontWeight: "bold", color: "black" }}>Rakesh</Text>
                    <Text>account details</Text>
                </View>
            </View>

            <TouchableOpacity style={{ flexDirection: "row", marginTop: 10, marginLeft: 20, borderBottomWidth: 1, borderColor: "lightgray", paddingBottom: 10 }}
            onPress={()=>{navigation.navigate("Refer")}}
            >

                <View style={{ flex: .5 }}>
                    <Entypo
                        name="creative-commons-sharealike"
                        size={33}
                    />
                </View>

                <View style={{ marginLeft: 10, flex: 2.5 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>Refer</Text>
                    <Text style={{ fontSize: 10 }}>invite friends</Text>
                </View>

                <View style={{ height: 30, width: 100, borderRadius: 15, backgroundColor: "lightgray", flexDirection: "row", flex: 1 }}>
                    <View style={{ marginTop: 5, marginLeft: 5 }}>
                        <FontAwesome
                            name="user-plus"
                            size={15}
                        />
                    </View>

                    <Text style={{ color: "green", fontWeight: "bold", textAlign: "center", marginLeft: 10, marginTop: 5 }}>invite</Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row", marginTop: 10, marginLeft: 20, borderBottomWidth: 1, borderColor: "lightgray", paddingBottom: 10 }}
            onPress={()=>{navigation.navigate("Wallet")}}
            >

                <View style={{ flex: .5 }}>
                    <Entypo
                        name="wallet"
                        size={33}
                    />
                </View>

                <View style={{ marginLeft: 10, flex: 2.5 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>Wallet</Text>
                    <Text style={{ fontSize: 10 }}>Stocks, balance</Text>
                </View>

                <View style={{ height: 30, width: 130, borderRadius: 15, backgroundColor: "lightgray", flexDirection: "row", flex: 1.5 }}>

                    <Text style={{ color: "green", fontWeight: "bold", marginLeft: 10, textAlign: "center", marginTop: 5 }}>+your money</Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row", marginTop: 10, marginLeft: 20, borderBottomWidth: 1, borderColor: "lightgray", paddingBottom: 10 }}
            onPress={()=>{navigation.navigate("Allorders")}}
            >


                <FontAwesome
                    name="reorder"
                    size={33}
                />


                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>All orders</Text>
                    <Text style={{ fontSize: 10 }}>Track orders, order details</Text>
                </View>


            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row", marginTop: 10, marginLeft: 20, borderBottomWidth: 1, borderColor: "lightgray", paddingBottom: 10 }}
            onPress={()=>{navigation.navigate("BankDetails")}}
            >


                <FontAwesome
                    name="bank"
                    size={33}
                />


                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>Bank Details</Text>
                    <Text style={{ fontSize: 10 }}>Banks & AutoPay mandates</Text>
                </View>


            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row", marginTop: 10, marginLeft: 20, borderBottomWidth: 1, borderColor: "lightgray", paddingBottom: 10 }}
            onPress={()=>{navigation.navigate("CustomerSupport")}}
            >


                <AntDesign
                    name="customerservice"
                    size={33}
                />


                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>Customer Support 24*7</Text>
                    <Text style={{ fontSize: 10 }}>FAQs,contact</Text>
                </View>


            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row", marginTop: 10, marginLeft: 20, borderBottomWidth: 1, borderColor: "lightgray", paddingBottom: 10 }}
            onPress={()=>{navigation.navigate("Reports")}}
            >


                <Octicons
                    name="report"
                    size={33}
                />


                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>Reports</Text>
                    <Text style={{ fontSize: 10 }}>Stocks & mutual funds reports</Text>
                </View>


            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row", marginTop: 10, marginLeft: 20, borderBottomWidth: 1, borderColor: "lightgray", paddingBottom: 10 }}
                onPress={() => { navigation.navigate("SplashScreen") }}
            >


                <SimpleLineIcons
                    name="logout"
                    size={44}
                    color={"red"}
                />


                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", color: "red" }}>Logout</Text>

                </View>


            </TouchableOpacity>





        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})