import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Noah",
      company: "samsung",
      theme: "dark",
      title: "software Engineer",
      email: "Noah@gmail.com",
      message: "go for it",
      fileName: "Noah",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Noah2",
      company: "samsung2",
      theme: "light",
      title: "software Engineer2",
      email: "Noah@gmail.com2",
      message: "go for it2",
      fileName: "Noah2",
      fileURL: "Noah.png2",
    },
    3: {
      id: "3",
      name: "Noah3",
      company: "samsung3",
      theme: "colorful",
      title: "software Engineer3",
      email: "Noah@gmail.com3",
      message: "go for it3",
      fileName: "Noah3",
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const CreateOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={CreateOrUpdateCard}
          updateCard={CreateOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
