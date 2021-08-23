import React from "react";
import { useState } from "react";
import style from "../styles/Faq.module.css";

const Faq=()=> {
  const [visible, setVisibility] = useState(true);
  var faq = [
    {
      question: "question1",
      answer: "answer1"
    },
    {
      question: "question2",
      answer: "answer2"
    },
    {
      question: "question3",
      answer: "answer3"
    }
  ];

  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      {faq.map((f) => (
        <section className={style["faq-container"]}>
          <li className={style["faq-question-container"]}>{f.question}</li>
            <div className={style["faq-button-container"]}>
                <button className={style["faq-button"]} onClick={() => setVisibility(visible ? false : true)}>
                +
                </button>
            </div>
          
          {visible && (
            <li className={style["faq-answer-container"]} style={{ color: visible ? "red" : "blue" }}>{f.answer}</li>
          )}
        </section>
      ))}
    </div>
  );
}

export default Faq;