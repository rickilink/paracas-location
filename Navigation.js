import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
//Icons
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconEntypo from "react-native-vector-icons/Entypo";
//Screens
import LogInScreen from "./screens/LogInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MessagesScreen from "./screens/MessagesScreen";
import HotelsScreen from "./screens/HotelSection/HotelsScreen";
import RestaurantsScreen from "./screens/RestaurantSection/RestaurantsScreen";
import ToursScreen from "./screens/ToursSection/ToursScreen";
import MarketsScreen from "./screens/MarketSection/MarketsScreen";
import SelectedScreen from "./screens/SelectedScreen";
import TransportsScreen from "./screens/TransportSection/TransportsScreen";
import ExchangesScreen from "./screens/ExchangeScreen/ExchangesScreen";
import ServicesScreen from "./screens/ServiceScreen/ServicesScreen";

const Tab = createBottomTabNavigator();
const StackHomeScreen = createNativeStackNavigator();

function MyStackHome() {
  return (
    <StackHomeScreen.Navigator initialRouteName="Login">
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
        name="Restaurants"
        component={RestaurantsScreen}
        options={{
          headerShown: false,
        }}
      />

      <StackHomeScreen.Screen
        name="Tours"
        component={ToursScreen}
        options={{
          headerShown: false,
        }}
      />

      <StackHomeScreen.Screen
        name="Markets"
        component={MarketsScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackHomeScreen.Screen
        name="Transports"
        component={TransportsScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackHomeScreen.Screen
        name="Exchanges"
        component={ExchangesScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackHomeScreen.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackHomeScreen.Screen
        name="SelectedSection"
        component={SelectedScreen}
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
        name="Login"
        component={LogInScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <IconEntypo name="login" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Signup"
        component={SignUpScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Signup",
          tabBarIcon: ({ color, size }) => (
            <IconEntypo name="login" color={color} size={size} />
          ),
        }}
      />
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
