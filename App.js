import { View } from 'react-native';
import CategoriesBurger from './src/components/CategoriesBurger';
import Header from './src/components/Header';
import Popular from './src/components/Popular';

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      <Header />
      <CategoriesBurger />
      <Popular />
    </View>
  );
}
