/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, Fragment} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// what?
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// 1 wrap entire app root
import { NavigationNativeContainer } from '@react-navigation/native';

// TABS
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 2 import stack navigator util
import { createStackNavigator } from '@react-navigation/stack';

// 3 OPTION: native stack nav w/ less options and better perf
import { useScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// (3) req'd for native stack
useScreens();

const Tab = createBottomTabNavigator();

// JS STACK
// const Stack = createStackNavigator();

// NATIVE STACK
const Stack = createNativeStackNavigator();

export const App = () => {
  const [thirdTabName, setThirdTabName] = useState('Tab 🦅');

  // new naviagtion prop "route"!
  const MockStackScreen = ({ navigation, route }) => {
    return (
      <View style={{ flex: 1, width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{route.name}</Text>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
          {route.name !== 'Home' ? (
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.navButtonText}>Go Home</Text>
            </TouchableOpacity>
          ) : null}
          {route.name !== 'Profile' ? (
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => navigation.navigate('Profile')}
              >
                <Text style={styles.navButtonText}>Go to Profile</Text>
            </TouchableOpacity>
          ) : null}
          {route.name !== 'Tabs' ? (
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => navigation.navigate('Tabs')}
            >
              <Text style={styles.navButtonText}>Go to Tabs</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }

  const MockTabScreen = ({ navigation, route }) => {
    return (
      <View style={{ flex: 1, width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{route.name}</Text>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {
            setThirdTabName('Tab 🍋');
            navigation.navigate('Home');
          }}
        >
          <Text style={styles.navButtonText}>Change Third Tab Name</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const TabNav = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showIcon: false,
          tabStyle: {
            alignItems: 'center'
          },
          labelStyle: {
            fontSize: 20,
          },
        }}
      >
        <Tab.Screen name="Tab 🔥" component={MockTabScreen} />
        <Tab.Screen name="Tab ⛈️" component={MockTabScreen} />
        <Tab.Screen name={thirdTabName} component={MockTabScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
          title: "React Navigation 5 Example 🍃",
        }}
      >
        <Stack.Screen
          name="Home"
          component={MockStackScreen}
          options={{
            title: "You're on the Home Screen",
            headerTitleAlign: "center" // not working yet in docs... open-source :) ?
          }} 
        />
        <Stack.Screen name="Profile" component={MockStackScreen} />
        <Stack.Screen name="Tabs" component={TabNav} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

const styles = StyleSheet.create({
  navButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 12,
    width: 120,
  },
  navButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
