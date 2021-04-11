import React from 'react';
import { ScrollView } from 'react-native';
import { Modal } from '..';
import NewsCard from './NewsCard/NewsCard';

const NewsCards = ({ articles, activeArticle }) => {

  return (
    <ScrollView>
      {articles.map((article, i) => (<NewsCard activeArticle={activeArticle} article={article} i={i} key={i}></NewsCard>))}
    </ScrollView>
  );
}

export default NewsCards;