import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/Home';
import Screen2 from './src/component/Screen2';
import Screen3 from './src/component/Screen3';
import {View,Image} from 'react-native';
<div id="root"></div>
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen3">
           <Stack.Screen
          name="Home"
          component={Home}
          options={{title:'Home',
          headerShown:false,
        }}
        />
           <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{title:'Screen2',
          headerShown:false,
        }}
        />
           <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{title:'Screen3',
          headerShown:false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


