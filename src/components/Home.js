import { View } from 'react-native';
import React, { Component } from 'react';
import Category from './Category';
import Header from './Header';
import Popular from './Popular';

export default class FoodWorld extends Component {
  render() {
    return (
      <View>
        <Header />
        <Category />
        <Popular />
      </View>
    );
  }
}
