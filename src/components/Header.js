import { Image, TouchableHighlight, View, Linking, Text } from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <TouchableHighlight onPress={() => Linking.openURL('https://google.com')}>
          <Image
            source={require('./img/logo.png')}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </TouchableHighlight>
      </View>

      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>FOOD WORLD</Text>
      </View>

      <View>
        <Image
          source={require('./img/Seek.png.png')}
          style={{
            height: 40,
            width: 40,
          }}
        />
      </View>
    </View>
  );
}
