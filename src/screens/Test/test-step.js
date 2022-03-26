import React, { useState } from "react";
import cn from "classnames";
import styles from "./test.module.sass";

// data

const Question = [
  {
    question: "Opción 1",
  },
  {
    question: "Opción 1",
  },
  {
    question: "Opción 1",
  },
  {
    question: "Opción 1",
  },
];
const TestInstructions = ({ wide }) => {
  const [activeindex, setactiveindex] = useState();
  return (
    <React.Fragment>
      <div className="flex flex-wrap">
        {Question.map((item, index) => (
          <div className="col-6 mb-12" key={index}>
            <div
              className={cn(styles.single_option, {
                [styles.active]: item === activeindex,
              })}
              onClick={() => setactiveindex(item)}
            >
              <input type="checkbox" />
              <label> {item.question}</label>
              <div className={styles.sbg}></div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default TestInstructions;
