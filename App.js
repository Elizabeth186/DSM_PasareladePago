import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen';
import StripeGateway from './Stripe';
import CuotaScreen from './CuotaScreen';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" 
        options={{headerShown: false}}
        
         component={HomeScreen}/> 
        <Stack.Screen name="Cuota"
        component={CuotaScreen}
        options={{ headerShown: false }}  />
         <Stack.Screen name="Stripe"
        component={StripeGateway} 
        options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});