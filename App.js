import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodWorld from './src/components/Home';
import Burgers from './src/components/Burgers';
// import { NativeRouter, Switch, Route, Routes } from 'react-router-native';

const OldStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <OldStack.Navigator>
        <OldStack.Screen name="FoodWorld" component={FoodWorld} />
        <OldStack.Screen name="Burgers" component={Burgers} />
      </OldStack.Navigator>
    </NavigationContainer>
  );
}
