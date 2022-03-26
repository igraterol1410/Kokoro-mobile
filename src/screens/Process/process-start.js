import React, { useState } from "react";
import cn from "classnames";
import styles from "./Process.module.sass";
import Card from "../../components/Card";
import Icon from "../../components/Icon";
import Image from "../../components/Image";
import Checkbox from "../../components/Checkbox";
import Form from "./components/form";
import Dropdown from "../../components/Dropdown";
import Market from "./Market";
import { processData } from "./sample-data";
import { Link } from "react-router-dom";
import ModalCard from "../../components/ModalCard";
// data

const ProcessStart = ({ wide }) => {
  return (
    <React.Fragment>
      <div className={styles.inner}>
        <div
          className={cn(styles.container, {
            [styles.wide]: wide,
          })}
        >
          <div className="text-center">
            <h4 className={styles.mkd}> Pruebas para X</h4>
            <h2 className={styles.bkd}>Hola Postulante</h2>
          </div>
          <div className={styles.plain_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
          <div className={cn(styles.post_p, " mb-32")}>
            {processData.map((x, index) => (
              <Card className={cn(styles.post_col, "mb-32")} key={index}>
                <div className={styles.header}>
                  <h4>{x.title}</h4>
                </div>
                <div className={styles.text}>{x.text}</div>
                <div className={styles.footers}>
                  <span>
                    <Icon name="clock" size="20" />
                    {x.time}
                  </span>
                  <Link to="/test-instruction">
                    <button className={cn(styles.btn_ne_black, styles.btn)}>
                      Instrucciones
                    </button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProcessStart;
