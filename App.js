import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPrincipalComponent from './Component/TelaPricipalComponent';
import TelaLoginComponent from './Component/telaloginComponent';
import TelaCadastroComponent from './Component/TelacadastroComponet';
import TelaNoticiaComponent from './Component/TelaNoticiaComponent';


const stack = createNativeStackNavigator();

function app(){

  return(
    <NavigationContainer>
      <stack.navigation inicialRouterName = "">
        <stack.Screen name = "" component = {TelaPrincipalComponent}></stack.Screen>
        <stack.Screen name = "login" component = {TelaLoginComponent}></stack.Screen>
        <stack.Screen name = "cadastro" component = {TelaCadastroComponent}></stack.Screen>
        <stack.Screen name = "entrar como visitante" component = {TelaNoticiaComponent}></stack.Screen>
      </stack.navigation>
    </NavigationContainer>

  )
}
export default app;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
