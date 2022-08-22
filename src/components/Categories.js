import { View, Image, Text, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { categoriesb } from '../categoriesb';

export default function Categories() {
  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
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
          {categoriesb.map((cat) => (
            <TouchableHighlight style={{ width: '30%' }}>
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
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
