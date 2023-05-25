import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
const iceCreamFlavors = [{
  id: '1',
  name: 'Vanilla'
}, {
  id: '2',
  name: 'Chocolate'
}, {
  id: '3',
  name: 'Strawberry'
}, {
  id: '4',
  name: 'Mint Chocolate Chip'
}, {
  id: '5',
  name: 'Cookie Dough'
}, {
  id: '6',
  name: 'Rocky Road'
}, {
  id: '7',
  name: 'Cookies and Cream'
}, {
  id: '8',
  name: 'Pistachio'
}, {
  id: '9',
  name: 'Butter Pecan'
}, {
  id: '10',
  name: 'Rum Raisin'
}];

const IceCreamFlavorsScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>;

  return <View style={styles.container}>
      <FlatList data={iceCreamFlavors} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500'
  }
});
export default IceCreamFlavorsScreen;