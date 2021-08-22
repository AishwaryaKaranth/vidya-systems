import React from "react";
import { useState } from "react";

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
      <h1>Hello CodeSandbox</h1>
      {faq.map((f) => (
        <>
          <li>{f.question}</li>

          <button onClick={() => setVisibility(visible ? false : true)}>
            Click
          </button>
          {visible && (
            <li style={{ color: visible ? "red" : "blue" }}>{f.answer}</li>
          )}
        </>
      ))}
    </div>
  );
}

export default Faq;