import React from "react";
import styles from "./Market.module.sass";
// import cn from "classnames";

import Icon from "../../../components/Icon";
import Row from "./Row";

const Market = ({ items }) => {
  return (
    <div className={styles.market}>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>NOMBRE</div>
          <div className={styles.col}>FECHA</div>
          <div className={styles.col}>ESTADO</div>
          <div className={styles.col}> PUNTAJE</div>
          <div className={styles.col}> ETAPA DE CONTRATACIÓN</div>
        </div>
        {items.map((x, index) => (
          <Row item={x} key={index} up={items.length - index <= 2} />
        ))}
      </div>
    </div>
  );
};

export default Market;
