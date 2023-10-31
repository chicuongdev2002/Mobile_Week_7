import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity, TextInput,ImageBackground } from "react-native";
import image from '../image/imageSC1.png'
import Screen2 from '../component/Screen2'
function Screen3({navigation}) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  return (
   <View style={{alignContent:'center',flex:1}}>
    <Text style={{
      fontSize:24,
      fontWeight:700,
   lineHeight:'36px',
    color:'#000',
    fontFamily:'Epilogue',
    }}>ADD TO JOB</Text>
    <View style={{flexDirection:'row'}}>
    <TextInput 
    onChangeText={(text)=>setName(text)}
    value={name}
    placeholder='Enter your name' style={{borderBottomWidth:1,borderBottomColor:'#171A1F',width:343,height:40}}/>
    </View>
    <Pressable 
    onPress={()=>navigation.navigate('Screen2')}
    style=
    {{
      backgroundColor:'#00BDD6'
      ,borderRadius:12,
      alighItem:'center',
      height:44,weight:190,
      alignContent:'center',
      justifiContent:'center'}}>
      <Text
       style={{color:'#FFF',fontSize:16}}>Finish</Text>
    </Pressable>
    <View style={{marginTop:50}}>
    <Image source={image} style={{height:100,weight:50,resizeMode:'cover'}}/>
    </View>
  
   </View>
  );
}

export default Screen3;
