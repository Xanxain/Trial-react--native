import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/Screens/Login/LoginScreen';
import HomeScreen from './src/Screens/Home/HomeScreen';
import ListScreen from './src/Screens/Home/Components/ListScreen';
import DetailScreen from './src/Screens/Home/Components/DetailScreen';
import ProfileScreen from './src/Screens/Profile/ProfileScreen';
import SettingsScreen from './src/Screens/Settings/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({ email }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" options={{ title: 'Home' }}>
        {props => <HomeScreen {...props} email={email} />}
      </Stack.Screen>
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ title: 'List' }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Detail' }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack({ email }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" options={{ title: 'Profile' }}>
        {props => <ProfileScreen {...props} email={email} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
      
    </Stack.Navigator>
    
  );
}

function TabNavigator({ route }: any) {
  const { email } = route.params || {};

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

          tabBarIcon: ({ color, size, focused }) => {
            let iconName = '';

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },

        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        initialParams={{ email }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        initialParams={{ email }}
      />

      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
