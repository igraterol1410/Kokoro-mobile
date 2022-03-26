import React, { useState } from "react";
import cn from "classnames";
import styles from "./Header.module.sass";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import Search from "./Search";
import Messages from "./Messages";
import Notification from "./Notification";
import User from "./User";

import Image from "../Image";

const Header = ({ onOpen }) => {
  return (
    <header className={cn(styles.header, styles.header_3)}>
      <Link to="/process">
        {/* <img
          src="/images/svg/icon-logo.svg"
          alt="logo"
          className={styles.logo}
        /> */}
      </Link>
      <Link to="/process">
        {/* <img
          src="/images/svg/logo-text.svg"
          alt="logo"
          className={styles.logo}
        /> */}
        <Image
          className={styles.pic2}
          src="/images/svg/logo-text.svg"
          srcDark="/images/svg/logo-text-dark.svg"
          alt="Core"
        />
      </Link>
      <Link to="/process" className={styles.avatar2}>
        <img src="/images/svg/avatar2.png" alt="logo" className={styles.logo} />
      </Link>
    </header>
  );
};

export default Header;
