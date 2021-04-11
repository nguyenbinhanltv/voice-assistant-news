import { Card, Button } from "react-native-elements";
import React, { useState, useEffect, createRef } from "react";
import { Text, View, StyleSheet } from "react-native";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  activeArticle,
  i,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop + 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <View ref={elRefs[i]}>
      <Card>
        <Card.Title
          style={activeArticle == i ? styles.cardActive : styles.item}
        >
          {title}
        </Card.Title>
        <Card.Divider />
        <Card.Image
          source={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
        ></Card.Image>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Text> {new Date(publishedAt).toDateString()} </Text>
          <Text> {source.name} </Text>
        </View>
        <Text style={styles.itemDescription}> {description} </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Button type="clear" title="Learn More" />
          <Text> {i + 1} </Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
  itemDescription: {
    color: "gray",
    marginTop: 20,
  },
  cardActive: {
    color: "rgb(32, 137, 220)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default NewsCard;
