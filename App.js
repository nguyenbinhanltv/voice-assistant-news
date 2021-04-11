import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import alanBtn from "@alan-ai/alan-sdk-web";
import { Modal, NewsCards } from "./components/index";
import wordsToNumbers from "words-to-numbers";
import { Header } from 'react-native-elements';

export default function App() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    alanBtn({
      key:
        "6e2f30a591a971a8b161db583bbed7582e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "instructions") {
          setIsOpen(true);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, {
                  fuzzy: true,
                })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);

  return (
    <SafeAreaProvider>
      <Header
        centerComponent={{ text: "NEWS", style: { color: "#fff" } }}
      />
      <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />{" "}
    </SafeAreaProvider>
  );
}
