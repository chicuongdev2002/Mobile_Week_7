import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,Pressable } from "react-native";
import Screen3 from '../component/Screen3'
function Home({ route }) {
  const { name } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://6540a53a45bedb25bfc23dad.mockapi.io/todo')
      .then(response => response.json())
      .then(json => {
        setData(json);
        console.log(json);
      })
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "700", lineHeight: 30 }}>
        Hi: {name}
      </Text>
      {data.map((item) => (
        <View style={{backgroundColor:'#9095A0',borderRadius:10,weight:200,height:50}}
        key={item.id}>
          <Text>{item.name}</Text>
        </View>
      ))}
      <View style={{alighContent:'center',alignItem:'center',justifiContent:'center'}}>
      <Pressable 
      onPress={()=>navigation.navigate('Screen3')}
      style={{borderRadius:50,height:50,weight:20,backgroundColor:'blue'}}>
        <View style={{marginLeft:200}}>
        <Text style={{fontSize:50,color:'#fff'}}>+</Text>
        </View>
      </Pressable>
      </View>
    </View>
  );
}

export default Home;
