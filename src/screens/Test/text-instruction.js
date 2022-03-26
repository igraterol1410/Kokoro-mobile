import React, { useState } from "react";
import cn from "classnames";
import styles from "./test.module.sass";
import Card from "../../components/Card";
import Icon from "../../components/Icon";
import Image from "../../components/Image";
import Checkbox from "../../components/Checkbox";
import Dropdown from "../../components/Dropdown";

import { Link } from "react-router-dom";

import ModalCard from "../../components/ModalCard";
// data

const TestInstructions = ({ wide }) => {
  return (
    <React.Fragment>
      <div className={styles.inner}>
        <div
          className={cn(styles.container, {
            [styles.wide]: wide,
          })}
        >
          <div className="text-center">
            <h4 className={styles.mkd}>Subtitle</h4>
            <h2 className={styles.bkd}>Qualification</h2>
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
        </div>
      </div>
      <div className={cn(styles.footer, styles.item_center)}>
        <div className="flex-1">
          <span clasName=" inline">
            {" "}
            <img src="/images/svg/l.svg" alt="" />
          </span>
          <span className={styles.bati}>Duración</span>
        </div>
        <div className="flex-0">
          <Link className={cn("button-stroke", styles.button)}>Volver</Link>
          <Link
            to="/start-form"
            className={cn("button-primary", styles.button)}
          >
            <span className="inline mr-8">
              <img src="/images/svg/left.svg" alt="" />
            </span>{" "}
            Comenzar prueba
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TestInstructions;
