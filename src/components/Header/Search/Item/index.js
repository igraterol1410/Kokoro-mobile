import React from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../../Icon";

const Item = ({ className, item, onClick }) => {
  return (
    <div className={cn(styles.link, className)} onClick={onClick}>
      <div className={styles.icon}>
        <Icon name={item.icon} size="24" />
      </div>
      <div className={styles.details}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.content}>{item.content}</div>
      </div>
      <div className={styles.arrow}>
        <Icon name="arrow-next" size="24" />
      </div>
    </div>
  );
};

export default Item;
