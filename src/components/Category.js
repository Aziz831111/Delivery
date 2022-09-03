import { View, Text, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Category() {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ marginBottom: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 35, fontWeight: 'bold', alignItems: 'center' }}>
          Main Category
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ margin: 5 }}>
          <View
            style={{
              borderColor: '#F4CA16',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 15,
              backgroundColor: '#F4CA16',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Burgers')}>
              <View>
                <Text style={{ fontSize: 20, fontWeight: '800', textAlign: 'center' }}>Burger</Text>
              </View>
              <View>
                <Image
                  source={require('./img/burger.png')}
                  style={{
                    width: 200,
                    height: 70,
                    borderBottomRightRadius: 6,
                    borderBottomLeftRadius: 6,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ margin: 5 }}>
          <View
            style={{
              borderColor: '#F4CA16',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 15,
              backgroundColor: '#F4CA16',
            }}>
            <TouchableOpacity>
              <View>
                <Text style={{ fontSize: 20, fontWeight: '800', textAlign: 'center' }}>Pizza</Text>
              </View>
              <View>
                <Image
                  source={require('./img/pizza.png')}
                  style={{
                    width: 200,
                    height: 70,
                    borderBottomRightRadius: 6,
                    borderBottomLeftRadius: 6,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ margin: 5 }}>
          <View
            style={{
              borderColor: '#F4CA16',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 15,
              backgroundColor: '#F4CA16',
            }}>
            <TouchableOpacity>
              <View>
                <Text style={{ fontSize: 20, fontWeight: '800', textAlign: 'center' }}>Susi</Text>
              </View>
              <View>
                <Image
                  source={require('./img/susi.png')}
                  style={{
                    width: 200,
                    height: 70,
                    borderBottomRightRadius: 6,
                    borderBottomLeftRadius: 6,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ margin: 5 }}>
          <View
            style={{
              borderColor: '#F4CA16',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 15,
              backgroundColor: '#F4CA16',
            }}>
            <TouchableOpacity>
              <View>
                <Text style={{ fontSize: 20, fontWeight: '800', textAlign: 'center' }}>Kebab</Text>
              </View>
              <View>
                <Image
                  source={require('./img/steak.png')}
                  style={{
                    width: 200,
                    height: 70,
                    borderBottomRightRadius: 6,
                    borderBottomLeftRadius: 6,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
