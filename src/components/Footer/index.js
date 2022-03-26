import React from "react";
import cn from "classnames";
import styles from "./footer.module.sass";
import Icon from "../Icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Link to="#" className={cn("button-stroke", styles.button)}>
          Actualizar suscripción
        </Link>
        <Link to="/new-process" className={cn("button-primary", styles.button)}>
          <Icon name="add" size="24" />
          Nuevo proceso
        </Link>
      </div>
    </>
  );
};

export default Footer;
