import React from 'react';
import { SafeAreaView, Text,
     TouchableOpacity, ScrollView,View,Image,
      StyleSheet, TextInput } from 'react-native';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useState } from 'react/cjs/react.development';



const HomeScreen =({navigation}) => {


  return (
        <SafeAreaView style={styles.container}>
     
        <View style={styles.viewtitle}>
      <Text style={styles.txttitulo}>Bienvenido</Text>
      </View>
      <View style={{width:'100%', height:'100%'}}>
    
 <Text>Ingresa tu numero de registro para consultar tus facturas</Text>
 <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
     
     <TouchableOpacity 
     onPress={() =>
       navigation.navigate('Cuota')
      }
     ><Text>Couta</Text></TouchableOpacity>
         
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
backgroundColor:'#154C59',
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
 
}

  })