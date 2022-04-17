import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StripeScreen from './StripeScreen';
import { StripeProvider } from '@stripe/stripe-react-native';
export default function App() {
  return (
  <StripeProvider PUBLISH_KEY='pk_test_51KpEFrIf8DlQtP9ZWhcxGpQS3krrfkT2MuxnYAlK8Lw6ByVvKMufNFyo2E7LVEfnOz3xhsTP3BdUFSdwkvqkxYUR00GwT6K4Dw'>
    <StripeScreen/>
  </StripeProvider>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
