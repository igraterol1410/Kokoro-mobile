import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import cn from "classnames";
import styles from "./Page.module.sass";
import Header3 from "../Header/Header3";

const Page4 = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={cn(styles.page, styles.page3)}>
        <Header3 onOpen={() => setVisible(true)} />
        {children}
      </div>
    </>
  );
};

export default withRouter(Page4);
