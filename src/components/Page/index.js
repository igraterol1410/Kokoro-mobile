import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import cn from "classnames";
import styles from "./Page.module.sass";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Footer from "../Footer";

const Page = ({ wide, children, title, subtitle }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles.page}>
        <Sidebar
          className={cn(styles.sidebar, { [styles.visible]: visible })}
          onClose={() => setVisible(false)}
        />
        <Header onOpen={() => setVisible(true)} />
        <div className={styles.inner}>
          <div
            className={cn(styles.container, {
              [styles.wide]: wide,
            })}
          >
            <div className={styles.title_wrapper}>
              {title && <div className={cn("h3", styles.title)}>{title}</div>}
              {subtitle && (
                <div className={cn("p", styles.subtitle)}>{subtitle}</div>
              )}
            </div>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default withRouter(Page);
