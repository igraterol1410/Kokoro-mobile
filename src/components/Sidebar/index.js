import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.sass";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import Icon from "../Icon";
import Theme from "../Theme";
import Dropdown from "./Dropdown";
import Help from "./Help";
import axios from "axios";
import Image from "../Image";

const navigation = [
  // {
  //   title: "Mis procesos",
  //   slug: "procesos",
  //   icon: "home",
  //   dropdown: [
  //     {
  //       title: "New procesos",
  //       url: "/new-process",
  //     },
  //     {
  //       title: "procesos",
  //       url: "/process",
  //       // counter: "2",
  //       colorCounter: "#FFBC99",
  //     },
  //   ],
  // },

  {
    title: "Mis procesos",
    icon: "heart",
    url: "/process",
  },

  {
    title: "Mis perfiles",
    icon: "profile-circle",
    url: "/profile",
  },
  {
    title: "Pruebas",
    icon: "promotion",
    url: "/test",
  },
];

const Sidebar = ({ className, onClose }) => {
  const [visibleHelp, setVisibleHelp] = useState(false);
  const [visible, setVisible] = useState(false);
  const [profileData, setProfileData] = useState([]);

  return (
    <>
      <div
        className={cn(styles.sidebar, className, { [styles.active]: visible })}
      >
        <button className={styles.close} onClick={onClose}>
          <Icon name="close" size="24" />
        </button>
        <Link className={styles.logo_wrap} to="/" onClick={onClose}>
          <div className={styles.logo}>
            <Image
              className={styles.pic}
              src="/images/logo-dark.svg"
              srcDark="/images/logo-dark.svg"
              alt="Core"
            />
          </div>
          <div className={styles.logo_right}>
            <Image
              className={styles.pic2}
              src="/images/svg/logo-text.svg"
              srcDark="/images/svg/logo-text-dark.svg"
              alt="Core"
            />
          </div>
        </Link>
        <div className={styles.menu}>
          {navigation.map((x, index) =>
            x.url ? (
              <NavLink
                className={styles.item}
                activeClassName={styles.active}
                to={x.url}
                key={index}
                exact
                onClick={onClose}
              >
                <Icon name={x.icon} size="24" />
                {x.title}
              </NavLink>
            ) : (
              <Dropdown
                className={styles.dropdown}
                visibleSidebar={visible}
                setValue={setVisible}
                key={index}
                item={x}
                onClose={onClose}
              />
            )
          )}
        </div>
        <button className={styles.toggle} onClick={() => setVisible(!visible)}>
          <Icon name="arrow-right" size="24" />
          <Icon name="close" size="24" />
        </button>
        <div className={styles.foot}>
          <Theme className={styles.theme} visibleSidebar={visible} />
        </div>
      </div>
      <Help
        visible={visibleHelp}
        setVisible={setVisibleHelp}
        onClose={onClose}
      />
      <div
        className={cn(styles.overlay, { [styles.active]: visible })}
        onClick={() => setVisible(false)}
      ></div>
    </>
  );
};

export default Sidebar;
