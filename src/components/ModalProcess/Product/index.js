import React, { useState } from "react";
import styles from "./Product.module.sass";
import cn from "classnames";
import Details from "./Details";

const Product = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn(styles.product, { [styles.active]: visible })}>
      <Details
        className={styles.details}
        setValue={setVisible}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default Product;
