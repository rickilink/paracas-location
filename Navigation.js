import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Icons
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconAnt from "react-native-vector-icons/AntDesign";
//Screens
import LogInScreen from "./screens/LogInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MessagesScreen from "./screens/MessagesScreen";
import { useSelector } from "react-redux";
import HotelsScreen from "./screens/HotelSection/HotelsScreen";
import HotelSelectedScreen from "./screens/HotelSection/HotelSelectedScreen";
import RestaurantsScreen from "./screens/RestaurantSection/RestaurantsScreen";
import RestaurantSelectedScreen from "./screens/RestaurantSection/RestaurantSelectedScreen";

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
        name="Login"
        component={LogInScreen}
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
        /* Hotels Section */
      />
      <StackHomeScreen.Screen
        name="Hotels"
        component={HotelsScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackHomeScreen.Screen
        name="HotelSelected"
        component={HotelSelectedScreen}
        options={{
          headerShown: false,
        }}
      />

      <StackHomeScreen.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackHomeScreen.Screen
        name="RestaurantSelected"
        component={RestaurantSelectedScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackHomeScreen.Navigator>
  );
}

function MyStackProfile() {
  return (
    <StackHomeScreen.Navigator initialRouteName="Home">
      <StackHomeScreen.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackHomeScreen.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackHomeScreen.Navigator>
  );
}

function MyTabs() {
  const { primaryContrast, primaryText, secondaryBackground } = useSelector(
    (state) => state.theme.colors
  );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: primaryContrast,
        tabBarInactiveTintColor: primaryText,
        tabBarStyle: {
          backgroundColor: secondaryBackground,
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="HomeTabScreen"
        component={MyStackHome}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <IconIonicons name="home" color={color} size={size} />
          ),
        }}
      />
      {/*  <Tab.Screen
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
      /> */}
      <Tab.Screen
        name="SettingsTabScreen"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <IconIonicons name="settings-sharp" color={color} size={size} />
          ),
        }}
      />
      {/*   <Tab.Screen
        name="ProfilesTabScreen"
        component={MyStackProfile}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <IconAnt name="user" color={color} size={size} />
          ),
        }}
      /> */}
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
