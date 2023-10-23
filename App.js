import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/Home';
import {View,Image} from 'react-native';
<div id="root"></div>
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
           <Stack.Screen
          name="Electronics"
          component={Home}
          options={{title:'Electronics',
            headerLeft:()=>{},
          headerRight:()=>(
            <View style={{flexDirection:'row'}}>
              <Image source={cart} style={{width:30,height:30}}/>
              <View style={{width:10}}></View>
              <View style={{backgroundColor:'#CC66FF',borderRadius:50}}>
              <Image source={avatar} style={{width:30,height:30}}/>
              </View>
            </View>
          ),
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


