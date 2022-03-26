import React, { useState } from "react";
import cn from "classnames";
import styles from "./test.module.sass";
import Card from "../../components/Card";
import Icon from "../../components/Icon";
import Image from "../../components/Image";
import Checkbox from "../../components/Checkbox";
import Dropdown from "../../components/Dropdown";
import TestStep from "./test-step";

import { Link } from "react-router-dom";
import ModalCard from "../../components/ModalCard";
// data

const TestFrom = ({ wide }) => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step !== 10) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step !== 1) {
      setStep(step - 1);
    }
  };

  return (
    <React.Fragment>
      <div className={styles.inner}>
        <div
          className={cn(styles.container, {
            [styles.wide]: wide,
          })}
        >
          <div className="text-center">
            <h4 className={styles.mkd}>Pregunta {step}/10</h4>
            <h2 className={styles.bkd}>Pregunta</h2>
          </div>

          <div className="step-box">
            {(() => {
              switch (step) {
                case 1:
                  return (
                    <React.Fragment>
                      <TestStep />
                    </React.Fragment>
                  );
                case 2:
                  return (
                    <React.Fragment>
                      <TestStep />
                    </React.Fragment>
                  );
                case 3:
                  return (
                    <React.Fragment>
                      <TestStep />
                    </React.Fragment>
                  );
                case 4:
                  return (
                    <React.Fragment>
                      <TestStep />
                    </React.Fragment>
                  );
                case 5:
                  return (
                    <React.Fragment>
                      <TestStep />
                    </React.Fragment>
                  );
                case 6:
                  return (
                    <React.Fragment>
                      <TestStep />
                    </React.Fragment>
                  );
                case 7:
                  return (
                    <React.Fragment>
                      <TestStep />
                    </React.Fragment>
                  );
                case 8:
                  return (
                    <React.Fragment>
                      <TestStep />
                    </React.Fragment>
                  );
                case 9:
                  return (
                    <React.Fragment>
                      <TestStep />
                    </React.Fragment>
                  );
                case 10:
                  return (
                    <React.Fragment>
                      <TestStep />
                    </React.Fragment>
                  );
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>
      <div className={cn(styles.footer, styles.flex_end)}>
        <button
          onClick={prevStep}
          className={cn("button-stroke", styles.button)}
        >
          Volver
        </button>

        <button
          onClick={nextStep}
          className={cn("button-primary", styles.button)}
        >
          >  Continuar
        </button>
      </div>
    </React.Fragment>
  );
};

export default TestFrom;
