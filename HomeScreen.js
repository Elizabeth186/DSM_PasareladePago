import React from 'react';
import { SafeAreaView, Text,
     TouchableOpacity, ScrollView,View,Image,
      StyleSheet, TextInput } from 'react-native';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useState } from 'react/cjs/react.development';



const HomeScreen =({navigation}) => {


  return (
        <SafeAreaView style={styles.container}>
     <Image source={require('./assets/a1.jpeg')} style={{width: 100,
    height: 100}}/>
        <View style={styles.viewtitle}>
        
      <Text style={styles.txttitulo} >BIENVENIDO</Text>
      </View>
      <View style={{height:'45%', marginHorizontal:"4%", borderRadius:23, backgroundColor: "#004AAD", padding:"8%"}}>
      <Text style={{fontSize:18, color:'white'}}>Ingresa tu numero de registro para consultar tus facturas:</Text>
      <TextInput
        style={styles.input}
        placeholder="numero de cliente"
        keyboardType="numeric"
        maxLength={3}
        
       />
     
     <TouchableOpacity 
     onPress={() =>
       navigation.navigate('Cuota')
      } style={{marginTop:"20%", alignSelf:'center', borderRadius:8, backgroundColor:"#7ED957", height:'30%', width:250, alignItems:'center'}}
     ><Text style={{marginTop:22, fontSize:18, fontWeight:'bold', color:'#3B3933'}}>Ver coutas</Text></TouchableOpacity>
      </View>
    
      
         
      
</SafeAreaView>
  )
}
    

export default HomeScreen
const styles = StyleSheet.create({
container:{
  flex: 1,
  height:'100%',
  alignItems:'center',
  alignContent:'center',
  backgroundColor:'#ffffff'
},
viewtitle:{
width:'100%',
height:75,
backgroundColor:'#004AAD',
marginBottom:'5%'
},
img:{
  width:400,
  height:250,
  marginTop: 20,
  borderRadius: 12,
  marginLeft:'8%'
},
txttitulo:{
  fontSize:30,
  width:'100%',
  height:'100%',
  textAlign:'center',
  color:'#ffffff',
  marginTop:'5%',
  fontWeight:'bold'
},
scrollviewestyle:{
  width:475,
  alignContent:'center',
 
},
input:{
  height:60,
  backgroundColor:"rgba(255,255,252,0.9)",
  marginTop:10,
  fontSize:18,
  borderRadius:8,
  paddingHorizontal:"5%",
  color:'#3B3933'
},

  })