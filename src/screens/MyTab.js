import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Login from './Login';
import Notification from './Notification';
import Feed from './Feed';
import Article from './Article';
import MyList from './MyList';
import Profile from './Profile';



const Tab = createBottomTabNavigator();


function MyTab() {
  return (


    <Tab.Navigator>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={'home'} size={size} color={focused ? 'black' : 'gray'} />
          ),
        }} />


      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarLabel: 'Login',
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name={'login'} size={size} color={focused ? 'black' : 'gray'} />
          ),
        }} />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarLabel: 'Notification',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={'notifications'} size={size} color={focused ? 'black' : 'gray'} />
          ),
        }} />

      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarLabel: 'Feed',
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name={'feed'} size={size} color={focused ? 'black' : 'gray'} />
          ),
        }} />

      <Tab.Screen
        name="Article"
        component={Article}
        options={{
          headerShown: false,
          tabBarLabel: 'Article',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name={'article'} size={size} color={focused ? 'black' : 'gray'} />
          ),
        }} />

      <Tab.Screen
        name="MyList"
        component={MyList}
        options={{
          headerShown: false,
          tabBarLabel: 'MyList',
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name={'pluscircleo'} size={size} color={focused ? 'black' : 'gray'} />
          ),
        }} />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={'settings'} size={size} color={focused ? 'black' : 'gray'} />
          ),
        }} />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name={'user'} size={size} color={focused ? 'black' : 'gray'} />
          ),
        }} />



    </Tab.Navigator>

  );
}



export default MyTab;