import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, ScrollView,View,Image, StyleSheet } from 'react-native';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



const CuotaScreen =({navigation}) => {
  return (
        <SafeAreaView style={styles.container}>
     
        <View style={styles.viewtitle}>
      <Text style={styles.txttitulo}>MENSUALIDAD</Text>
      </View>
      
      <View style={{height:500, marginHorizontal:"4%", borderRadius:23, backgroundColor: "#3B3933", padding:"8%", width:300}}>
      <ScrollView style={styles.scrollviewestyle}>
        <View style={{height:100, marginVertical:"4%", borderRadius:23, backgroundColor: "#7ED957", width:"100%", position:'absolute', padding:17}}>
              <Text style={styles.month}>Enero</Text>
              <Text style={styles.price}>18.99</Text>
              <View style={styles.botonbuy}>
                <TouchableOpacity 
                  onPress={() =>
                    navigation.navigate('Stripe')
                    }
                  ><Text style={styles.buy}>Pagar</Text></TouchableOpacity>
              </View>
            
        </View>
        <View style={{height:100, marginTop:"55%", borderRadius:23, backgroundColor: "#7ED957", width:"100%", position:'absolute', padding:17}}>
              <Text style={styles.month}>Febrero</Text>
              <Text style={styles.price}>18.99</Text>
              <View style={styles.botonbuy}>
                <TouchableOpacity 
                  onPress={() =>
                    navigation.navigate('Stripe')
                    }
                  ><Text style={styles.buy}>Pagar</Text></TouchableOpacity>
              </View>
        </View>
        <View style={{height:100, marginTop:255, borderRadius:23, backgroundColor: "#7ED957", width:"100%", position:'absolute', padding:17}}>
              <Text style={styles.month}>Marzo</Text>
              <Text style={styles.price}>18.99</Text>
              <View style={styles.botonbuy}>
                <TouchableOpacity 
                  onPress={() =>
                    navigation.navigate('Stripe')
                    }
                  ><Text style={styles.buy}>Pagar</Text></TouchableOpacity>
              </View>
        </View>
        <View style={{height:100, marginTop:380, borderRadius:23, backgroundColor: "#7ED957", width:"100%", position:'absolute', padding:17}}>
              <Text style={styles.month}>Abril</Text>
              <Text style={styles.price}>18.99</Text>
              <View style={styles.botonbuy}>
                <TouchableOpacity 
                  onPress={() =>
                    navigation.navigate('Stripe')
                    }
                  ><Text style={styles.buy}>Pagar</Text></TouchableOpacity>
              </View>
        </View>
        </ScrollView>
      </View>
      
      
      
</SafeAreaView>
  )
}
    

export default CuotaScreen
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
txttitulo:{
  fontSize:30,
  width:'100%',
  height:'100%',
  textAlign:'center',
  color:'#ffffff',
  marginTop:'5%',
  fontWeight:'bold'
},
month:{
  fontWeight:'bold',
  fontSize:35
},
price:{
  fontWeight:'bold',
  color:'#FFFFFF',
  fontSize:27,
},
botonbuy:{
  position:'absolute',
  alignSelf:'flex-end',
  marginRight:"19%",
  marginTop:"30%",
  backgroundColor:'#004AAD',
  borderRadius:23,  
  width: 80,
  height:30
  
},
buy:{
  fontSize: 25,
  textAlign:'center',
  marginTop:'12%',
  fontWeight:'bold',
  color:'#FFFFFF'
}

  })