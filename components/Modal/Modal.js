import { Card, ListItem } from "react-native-elements";
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const Modal = ({ isOpen, setIsOpen }) => {
  let body;

  if (isOpen) {
    body = null;
  } else {
    body = (
    <View>
        <Card containerStyle={{backgroundColor: 'rgb(0, 131, 143)'}}>
          <Card.Title style={styles.item}>Latest News</Card.Title>
          <Card.Divider/>
          <Text style={styles.itemSaying}>Try saying: &quot;Give me the latest news&quot;</Text>
        </Card>
        <Card containerStyle={{backgroundColor: 'rgb(21, 101, 192)'}}>
          <Card.Title style={styles.item}>News by Categories</Card.Title>
          <Card.Divider/>
          <View>
            <Text style={styles.item}>Categories:</Text>
            <Text style={styles.item}>Business, Entertainment, General, Health, Science, Sports, Technology</Text>
          </View>
          <Text style={styles.itemSaying}>Try saying: &quot;Give me the latest Business news&quot;</Text>
        </Card>
        <Card containerStyle={{backgroundColor: 'rgb(69, 39, 160)'}}>
          <Card.Title style={styles.item}>News by Terms</Card.Title>
          <Card.Divider/>
          <View>
            <Text style={styles.item}>Terms:</Text>
            <Text style={styles.item}>Donald Trump, Bitcoin, PlayStation 5, Smartphones</Text>
          </View>
          <Text style={styles.itemSaying}>Try saying: &quot;What&apos;s up with PlayStation 5&quot;</Text>
        </Card>
        <Card containerStyle={{backgroundColor: 'rgb(40, 53, 147)'}}>
          <Card.Title style={styles.item}>News by Sources</Card.Title>
          <Card.Divider/>
          <View>
            <Text style={styles.item}>Sources:</Text>
            <Text style={styles.item}>CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News</Text>
          </View>
          <Text style={styles.itemSaying}>Try saying: &quot;Give me the news from CNN&quot;</Text>
        </Card>
    </View>
    );
  }
  return (
    <ScrollView>
      {body}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'
  },
  itemSaying: {
    marginTop: 20,
    fontWeight: "bold",
    color: 'white'
  }
});

export default Modal;
