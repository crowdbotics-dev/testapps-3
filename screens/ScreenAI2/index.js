import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
const iceCreamFlavors = [{
  id: "1",
  name: "Vanilla",
  description: "A classic, creamy flavor made from vanilla beans."
}, {
  id: "2",
  name: "Chocolate",
  description: "A rich, smooth flavor made from cocoa beans."
}, {
  id: "3",
  name: "Strawberry",
  description: "A fruity, refreshing flavor made from fresh strawberries."
}, {
  id: "4",
  name: "Mint Chocolate Chip",
  description: "A cool, minty flavor with chocolate chips mixed in."
}, {
  id: "5",
  name: "Cookie Dough",
  description: "A sweet, creamy flavor with chunks of cookie dough."
}, {
  id: "6",
  name: "Rocky Road",
  description: "A chocolate flavor with nuts and marshmallows."
}, {
  id: "7",
  name: "Cookies and Cream",
  description: "A creamy flavor with crushed cookies mixed in."
}, {
  id: "8",
  name: "Pistachio",
  description: "A nutty, unique flavor made from pistachios."
}, {
  id: "9",
  name: "Butter Pecan",
  description: "A buttery, rich flavor with pecans mixed in."
}, {
  id: "10",
  name: "Rum Raisin",
  description: "A sweet, rum-flavored ice cream with raisins."
}];

const IceCreamFlavorsScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.descriptionText}>{item.description}</Text>
    </View>;

  return <View style={styles.container}>
      <FlatList data={iceCreamFlavors} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  itemText: {
    fontSize: 18,
    fontWeight: "500"
  },
  descriptionText: {
    fontSize: 14,
    color: "#757575"
  }
});
export default IceCreamFlavorsScreen;