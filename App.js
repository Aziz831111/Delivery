import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import Popular from './src/components/Popular';

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      <Header />
      <Categories />
      <Popular />
    </View>
  );
}
