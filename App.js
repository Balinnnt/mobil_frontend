import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Proba from './proba';
import Proba2 from './proba2';
import Proba3 from './Proba3';
import Proba4 from './proba4';
import Lenyilo from './Lenyilo'
import Ipcim from './Ipcim';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Root({ navigation }) {
  return (
          <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  );
}

function ProbaScreen({ navigation }) {
  return (
    <Proba/>
  );
}

function ProbaScreen2({ navigation }) {
  return (
    <Proba2/>
  );
}

function ProbaScreen3({ navigation }) {
  return (
    <Proba3/>
  );
}

function Lenyilo({ navigation }) {
  return (
    <Lenyilo/>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Próba" component={ProbaScreen} />
        <Drawer.Screen name="Próba2" component={ProbaScreen2} />
        <Drawer.Screen name="Próba3" component={ProbaScreen3} />
        <Drawer.Screen name="Lenyilo" component={Lenyilo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}