import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';

export default function Popular() {
  return (
    <View style={{ margin: 20 }}>
      <View>
        <Text style={{ marginTop: 30, fontSize: 30, fontWeight: 'bold' }}>Popular</Text>
      </View>

      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: 'transporant' }}>
        <View style={{ marginTop: 20 }}>
          <View style={{ marginTop: 20 }}>
            <View>
              <Image
                source={require('./img/images/beef.png')}
                style={{ width: 330, height: 200, borderRadius: 30 }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  height: 50,
                  width: 170,
                  backgroundColor: '#E7F305',
                  borderTopRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ fontSize: 20, fontWeight: '800' }}> 25-30 min</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('./img/star.png')}
                style={{ width: 30, height: 30, marginTop: 5 }}
              />
              <Text style={{ marginTop: 10, fontSize: 20 }}> 4.5</Text>
              <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 20, fontWeight: '800' }}>
                Beef kebab
              </Text>
              <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 20, color: '#650002' }}>
                10 € - 6 pieces
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: 700 }}></View>
      </ScrollView>
    </View>
  );
}
