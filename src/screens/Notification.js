import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Entypo from "react-native-vector-icons/Entypo"

const Notification = () => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 2, backgroundColor: "white" }}>

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 3, fontSize: 18, fontWeight: "bold", marginTop: 10, marginLeft: 10 }}>+91 9811077625</Text>
                    <View style={{ flex: 1, marginTop: 10, marginLeft: 10, borderWidth: 1, width: 70, height: 30, borderRadius: 15, backgroundColor: "white", marginRight: 10 }}>
                        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, }}>50</Text>
                    </View>

                </View>

                <View style={{ marginLeft: 10, marginTop: 10, flexDirection: "row" }}>
                    <Text>Explore</Text>
                    <Text style={{ fontWeight: "bold", color: "blue", marginLeft: 10 }}>Plus</Text>
                </View>

                <View>

                    <View style={{ alignSelf: "center", marginTop: 10, flexDirection: "row" }}>
                        <View style={{ height: 50, borderRadius: 10, width: 170, borderWidth: 1 }}>
                            <Text style={{ textAlign: "center", fontSize: 21, marginTop: 9, fontWeight: "bold" }}>Orders</Text>
                        </View>
                        <View style={{ height: 50, borderRadius: 10, width: 170, borderWidth: 1, marginLeft: 10 }}>
                            <Text style={{ textAlign: "center", fontSize: 21, marginTop: 9, fontWeight: "bold" }}>Whishlist</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: "center", marginTop: 10, flexDirection: "row" }}>
                        <View style={{ height: 50, borderRadius: 10, width: 170, borderWidth: 1 }}>
                            <Text style={{ textAlign: "center", fontSize: 21, marginTop: 9, fontWeight: "bold" }}>Coupons</Text>
                        </View>
                        <View style={{ height: 50, borderRadius: 10, width: 170, borderWidth: 1, marginLeft: 10 }}>
                            <Text style={{ textAlign: "center", fontSize: 21, marginTop: 9, fontWeight: "bold" }}>Help Center</Text>
                        </View>
                    </View>

                </View>

            </View>

            <View style={{ flex: 2, backgroundColor: "white", marginTop: 10 }}>

                <Text style={{ fontWeight: "bold", marginTop: 10, marginLeft: 10, fontSize: 18 }}>Credit Option</Text>

                <View style={{ flexDirection: "row", marginTop: 10 }}>

                    <AntDesign
                        name="mobile1"
                        size={30}
                        style={{ marginTop: 10, marginLeft: 10, flex: 1 }}

                    />

                    <View style={{ marginLeft: 10, flex: 9 }}>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>Personal Loan</Text>
                        <Text>Get loan of up to rs10Lakh instantly</Text>
                    </View>

                    <MaterialCommunityIcons
                        name="greater-than"
                        size={15}
                        style={{ flex: 1 }}
                    />
                </View>

                <View style={{ flexDirection: "row", marginTop: 10 }}>

                    <MaterialCommunityIcons
                        name="credit-card-outline"
                        size={30}
                        style={{ marginTop: 10, marginLeft: 10, flex: 1 }}

                    />

                    <View style={{ marginLeft: 10, flex: 9,marginTop:10 }}>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>Flipkart Axis Bank Credit Card</Text>
                    </View>

                    <MaterialCommunityIcons
                        name="greater-than"
                        size={15}
                        style={{ flex: 1 }}
                    />
                </View>

                <View style={{ flexDirection: "row", marginTop: 10 }}>

                    <AntDesign
                        name="calendar"
                        size={30}
                        style={{ marginTop: 10, marginLeft: 10, flex: 1 }}

                    />

                    <View style={{ marginLeft: 10, flex: 9 }}>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>Flipkart Pay Later</Text>
                        <Text>Available Balance:rs70000. Shop Now</Text>
                    </View>

                    <MaterialCommunityIcons
                        name="greater-than"
                        size={15}
                        style={{ flex: 1 }}
                    />
                </View>
                
            </View>
            <View style={{ flex: 2, backgroundColor: "white", marginTop: 10 }}>

                <Text style={{ fontWeight: "bold", marginTop: 10, marginLeft: 10, fontSize: 18 }}>Account Settings</Text>

                <View style={{ flexDirection: "row", marginTop: 10 }}>

                    <Entypo
                        name="language"
                        size={30}
                        style={{ marginTop: 10, marginLeft: 10, flex: 1 }}

                    />

                    <View style={{ marginLeft: 10, flex: 9 }}>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>Select language</Text>
                        
                    </View>

                    <MaterialCommunityIcons
                        name="greater-than"
                        size={15}
                        style={{ flex: 1 }}
                    />
                </View>

                <View style={{ flexDirection: "row", marginTop: 10 }}>

                    <AntDesign
                        name="profile"
                        size={30}
                        style={{ marginTop: 10, marginLeft: 10, flex: 1 }}

                    />

                    <View style={{ marginLeft: 10, flex: 9,marginTop:10 }}>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>Edit profile</Text>
                    </View>

                    <MaterialCommunityIcons
                        name="greater-than"
                        size={15}
                        style={{ flex: 1 }}
                    />
                </View>

                <View style={{ flexDirection: "row", marginTop: 10 }}>

                    <Entypo
                        name="location"
                        size={30}
                        style={{ marginTop: 10, marginLeft: 10, flex: 1 }}

                    />

                    <View style={{ marginLeft: 10, flex: 9 }}>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>Saved Adresses</Text>
                        
                    </View>

                    <MaterialCommunityIcons
                        name="greater-than"
                        size={15}
                        style={{ flex: 1 }}
                    />
                </View>
                
            </View>

        </View>
    )
}

export default Notification

const styles = StyleSheet.create({})