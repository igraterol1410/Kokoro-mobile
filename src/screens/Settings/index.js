import React, { useState, useRef } from "react";
import cn from "classnames";
import styles from "./Settings.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Dropdown from "../../components/Dropdown";
import ProfileInformation from "./ProfileInformation";
import Login from "./CompanyInformation";
import Notifications from "./Notifications";
import Payment from "./Payment";

import ModalSetting from "../../components/ModalSetting";

const Settings = ({ wide }) => {
  const navigation = [
    {
      title: "Mi cuenta",
      action: () =>
        scrollToProfile.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      title: "Gestión de equipo",
      action: () =>
        scrollToLogin.current.scrollIntoView({ behavior: "smooth" }),
    },

    {
      title: "Facturación y pagos",
      action: () =>
        scrollToNotifications.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      title: "Notificaciones",
      action: () =>
        scrollToPayment.current.scrollIntoView({ behavior: "smooth" }),
    },

    {
      title: "Plantillas de correo",
      action: () =>
        scrollToPayment.current.scrollIntoView({ behavior: "smooth" }),
    },
  ];
  const options = [];
  navigation.map((x) => options.push(x.title));
  const [activeTab, setActiveTab] = useState(options[0]);

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollToProfile = useRef(null);
  const scrollToLogin = useRef(null);
  const scrollToNotifications = useRef(null);
  const scrollToPayment = useRef(null);
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  const handleClick = (x, index) => {
    setActiveIndex(index);
    x.action();
  };

  return (
    <>
      <div className={styles.inner}>
        <div
          className={cn(styles.container, {
            [styles.wide]: wide,
          })}
        >
          <div className={styles.settings}>
            <div className={styles.menu}>
              {navigation.map((x, index) => (
                <button
                  className={cn(styles.button, {
                    [styles.active]: activeIndex === index,
                  })}
                  key={index}
                  onClick={() =>
                    x.title !== "Plantillas de correo"
                      ? handleClick(x, index)
                      : setVisibleModalProduct(true)
                  }
                >
                  {x.title}
                </button>
              ))}
            </div>
            <div className={styles.wrapper}>
              <Dropdown
                className={styles.dropdown}
                classDropdownHead={styles.dropdownHead}
                value={activeTab}
                setValue={setActiveTab}
                options={options}
              />
              <div className={styles.list}>
                <div
                  className={cn(styles.item, {
                    [styles.active]: activeTab === options[0],
                  })}
                >
                  <div className={styles.anchor} ref={scrollToProfile}></div>
                  <ProfileInformation />
                </div>
                <div
                  className={cn(styles.item, {
                    [styles.active]: activeTab === options[1],
                  })}
                >
                  <div className={styles.anchor} ref={scrollToLogin}></div>
                  <Login />
                </div>
                <div
                  className={cn(styles.item, {
                    [styles.active]: activeTab === options[2],
                  })}
                >
                  <div
                    className={styles.anchor}
                    ref={scrollToNotifications}
                  ></div>
                  <Notifications />
                </div>
                <div
                  className={cn(styles.item, {
                    [styles.active]: activeTab === options[3],
                  })}
                >
                  <div className={styles.anchor} ref={scrollToPayment}></div>
                  <Payment />
                </div>
              </div>
              <button className={cn("button block w-full", styles.button)}>
                {" "}
                <img src="/images/svg/image.svg" alt="" />
                <span className=" inline-block ml-10">
                  Guardar configuración
                </span>
              </button>
            </div>
          </div>
          <TooltipGlodal />
          <ModalSetting
            visible={visibleModalProduct}
            onClose={() => setVisibleModalProduct(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Settings;
