import { Image, TouchableHighlight, View, Linking } from 'react-native';
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
        <TouchableHighlight onPress={() => Linking.openURL('https//google.com')}>
          <Image
            source={{
              uri: 'https://reactjs.org/logo-og.png',
            }}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </TouchableHighlight>
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
