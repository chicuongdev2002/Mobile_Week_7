import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity, TextInput,ImageBackground } from "react-native";
import image from '../image/imageSC1.png'
import Screen2 from '../component/Screen2'
function Home({navigation}) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  return (
   <View style={{alignContent:'center',flex:1}}>
    <Image source={image} style={{height:271,weight:271}}/>
    <Text style={{
      fontSize:24,
      fontWeight:700,
   lineHeight:'36px',
    color:'#8353E2',
    fontFamily:'Epilogue',
    }}>MANAGE YOUR TASK</Text>
    <View style={{flexDirection:'row'}}>
    <View style={{marginTop:10}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M16 16.5L4 16.5C3.172 16.5 2.5 15.828 2.5 15L2.5 5C2.5 4.172 3.172 3.5 4 3.5L16 3.5C16.828 3.5 17.5 4.172 17.5 5L17.5 15C17.5 15.828 16.828 16.5 16 16.5Z" stroke="#171A1F" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.5 6.5L10 11L15.5 6.5" stroke="#171A1F" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </View>
    <TextInput 
    onChangeText={(text)=>setName(text)}
    value={name}
    placeholder='Enter your name' style={{borderBottomWidth:1,borderBottomColor:'#171A1F',width:343,height:40}}/>
    </View>
    <Pressable 
    onPress={()=>navigation.navigate('Screen2',{name:name})}
    style=
    {{
      backgroundColor:'#00BDD6'
      ,borderRadius:12,
      alighItem:'center',
      height:44,weight:190,
      alignContent:'center',
      justifiContent:'center'}}>
      <Text
       style={{color:'#FFF',fontSize:16}}>GET STARTED</Text>
    </Pressable>
   </View>
  );
}

export default Home;
