import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Row.module.sass";
import cn from "classnames";

import OutsideClickHandler from "react-outside-click-handler";
import Icon from "../../../../../components/Icon";

const actions = [
  {
    title: "Invitar postulante",
    icon: "file_icon",
    action: () => console.log("Invitar postulante"),
  },
  {
    title: "Editar",
    icon: "edit",
    action: () => console.log("Editar"),
  },
  {
    title: "Clonar",
    icon: "copy",
    action: () => console.log("Clonar"),
  },
  {
    title: "Archivar",
    icon: "trash",
    action: () => console.log("Archivar"),
  },
];

const Row = ({ item, value, onChange, up, className, index }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>{item.CODIGO}</div>
        <div className={styles.col}>
          <Link to={`/process/${item.CODIGO}`}>{item.NOMBRE}</Link>
        </div>
        <div className={styles.col}>{item.CANTIDAD}</div>
        <div className={styles.col}>
          {/* <div className={styles.flex}>
            {item.p.map((x, index) => (
              <div key={index} className={cn(styles.back, x.badge)}>
                {x.step}
              </div>
            ))}
          </div> */}
          {item.PROGRESO}
        </div>
        <div className={styles.col}>{item.INGRESADO}</div>
        <div className={styles.col}>
          <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div
              className={cn(styles.dropdown_parent, className, {
                [styles.active]: visible,
              })}
            >
              <button onClick={() => setVisible(!visible)}>
                <svg
                  className={styles.threedot}
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.334 8.006c0 .736-.597 1.333-1.333 1.333s-1.333-.597-1.333-1.333S3.264 6.673 4 6.673s1.333.597 1.333 1.333zm4 0c0 .736-.597 1.333-1.333 1.333s-1.333-.597-1.333-1.333S7.264 6.673 8 6.673s1.333.597 1.333 1.333zm4 0c0 .736-.597 1.333-1.333 1.333s-1.333-.597-1.333-1.333.597-1.333 1.333-1.333 1.333.597 1.333 1.333z"></path>
                </svg>
              </button>
              <div className={styles.body}>
                <ul>
                  {actions.map((x, index) => (
                    <li key={index}>
                      <button
                        onClick={x.action}
                        className={styles.action_buttons}
                        npm
                      >
                        {x.icon && <Icon name={x.icon} size="20" />}
                        {x.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    </>
  );
};

export default Row;
