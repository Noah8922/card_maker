import React from "react";
import CardEditForm from "../card-edit_form/cardEditForm";
import CardAddForm from "../card_add_form/cardAddForm";

import styles from "./editor.module.css";

const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map((card) => (
      <CardEditForm key={card.id} card={card} />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
