import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Icons
import IconButton from "react-native-vector-icons/Ionicons";
import IconAnt from "react-native-vector-icons/AntDesign";
//Screens
import LogInScreen from "./screens/LogInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MessagesScreen from "./screens/MessagesScreen";

const Tab = createBottomTabNavigator();
const StackHomeScreen = createNativeStackNavigator();

function MyStackHome() {
  return (
    <StackHomeScreen.Navigator initialRouteName="Home">
      <StackHomeScreen.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackHomeScreen.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackHomeScreen.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#1BC4B9",
      }}
    >
      <Tab.Screen
        name="HomeTabScreen"
        component={MyStackHome}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <IconButton name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MessagesTabScreen"
        component={MessagesScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <IconAnt name="message1" color={color} size={size} />
          ),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="SettingsTabScreen"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <IconButton name="settings-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
