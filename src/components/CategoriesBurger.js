import { View, Image, Text, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { categoriesb } from '../categoriesb';
import { COLORS } from '../../constats';

export default function Categories() {
  const [active, setActive] = useState(null);
  return (
    <ScrollView>
      <View style={{ paddingTop: 60 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Hey,
        </Text>
        <Text
          style={{
            fontSize: 20,
          }}>
          What's up?
        </Text>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {categoriesb.map((cat, index) => (
            <View
              style={{
                marginBottom: 20,
                alignItems: 'center',
                width: '30%',
                borderRadius: 10,
                backgroundColor: active === index ? COLORS.primary : COLORS.white,
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <TouchableHighlight underlayColor={COLORS.white} onPress={() => setActive(index)}>
                <View style={{ alignItems: 'center' }}>
                  <View style={{ justifyContent: 'center' }}>
                    <Image
                      source={{ uri: cat.image }}
                      style={{ width: 70, height: 70, resizeMode: 'center' }}
                    />
                  </View>

                  <Text style={{ fontSize: 20, color: '#000', marginTop: 10 }}> {cat.name}</Text>
                  <Text style={{ textAlign: 'center', fontSize: 15, color: '#000', marginTop: 10 }}>
                    {' '}
                    {cat.title}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
