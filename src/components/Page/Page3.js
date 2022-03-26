import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import cn from "classnames";
import styles from "./Page.module.sass";
import Header3 from "../Header/Header3";

const Page3 = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={cn(styles.page, styles.page3)}>
        <Header3 onOpen={() => setVisible(true)} />
        {children}
      </div>
      <div className={styles.bg_imge}>
        <img src="/images/bg.png" alt="" />
      </div>
    </>
  );
};

export default withRouter(Page3);
