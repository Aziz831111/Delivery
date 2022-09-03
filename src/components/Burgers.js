import { View, Image, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { categoriesb } from '../categoriesb';
import { COLORS } from '../../constats';
import BurgerImg from '../ConstansBurger';
import Header from './Header';
import Popular from './Popular.js';

export default function Burgers() {
  const [active, setActive] = useState(null);
  return (
    <ScrollView>
      <Header />
      <View style={{ paddingTop: 20 }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 20,
            marginBottom: 30,
          }}>
          Burgers Category
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {categoriesb.map((cat, index) => (
            <View
              style={{
                marginBottom: 20,
                width: '90%',
                borderRadius: 10,
                backgroundColor: COLORS.white,
                paddingTop: 10,
                paddingBottom: 10,
                marginLeft: 20,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 25,
                    color: '#000',
                    marginTop: 10,
                    alignItems: 'center',
                    textAlign: 'right',
                    marginRight: 10,
                  }}>
                  {' '}
                  {cat.name}
                </Text>
                <Text style={{ textAlign: 'right', fontSize: 20, color: '#000', marginRight: 10 }}>
                  {' '}
                  {cat.title}
                </Text>
                <View style={{ height: 50 }}>
                  <Image
                    source={BurgerImg[cat.image]}
                    style={{
                      width: 150,
                      height: 150,
                      resizeMode: 'center',
                      position: 'absolute',
                      top: -90,
                    }}
                  />
                </View>
                <View>
                  <Text style={{ marginLeft: 10, fontSize: 15 }}>Price: {cat.price}</Text>
                </View>
              </View>
              <View
                style={{
                  width: 150,
                  height: 70,
                  position: 'absolute',
                  bottom: -20,
                  right: 25,
                  borderBottomRightRadius: 10,
                }}>
                <Button title="Add to Cart" color="#7D7D7D" />
              </View>
            </View>
          ))}
        </View>
      </View>
      <Popular />
    </ScrollView>
  );
}
