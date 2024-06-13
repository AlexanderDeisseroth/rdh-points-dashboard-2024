import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import GetMatches from "./components/get_matches";

import { Provider } from "react-redux";
import store from "./store/store";
import Dashboard from './screens/dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
       <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#03572C',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
            <Stack.Screen 
              name="Dashboard" 
              component={Dashboard} 
              options={{
                title: 'RDH Scouting Dashboard',
                
              }}
              />
         
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
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
