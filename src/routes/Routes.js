import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "../screens/Signup";
import SplashScreen from "../screens/SplashScreen";
import MyTab from "../screens/MyTab";
import SettingsScreen from "../screens/SettingsScreen";
import Refer from "../screens/Refer";
import Wallet from "../screens/Wallet";
import Allorders from "../screens/Allorders";
import BankDetails from "../screens/BankDetails";
import CustomerSupport from "../screens/CustomerSupport";
import Reports from "../screens/Reports";

const Stack = createNativeStackNavigator();

function Routes() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={Signup}
                    name="Signup"
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={SplashScreen}
                    name="SplashScreen"
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={SettingsScreen}
                    name="SettingsScreen"
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={MyTab}
                    name="MyTab"
                />
                
                <Stack.Screen
                    options={{ headerShown: false }}
                    component={Refer}
                    name="Refer"
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={Wallet}
                    name="Wallet"
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={Allorders}
                    name="Allorders"
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={BankDetails}
                    name="BankDetails"
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={CustomerSupport}
                    name="CustomerSupport"
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={Reports}
                    name="Reports"
                />

            </Stack.Navigator>
        </NavigationContainer>


    )
}

export default Routes;