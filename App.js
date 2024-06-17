import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Dashboard from './screens/dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
