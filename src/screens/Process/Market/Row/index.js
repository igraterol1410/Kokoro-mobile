import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Row.module.sass";
import cn from "classnames";

import OutsideClickHandler from "react-outside-click-handler";
import Icon from "../../../../components/Icon";
import Dropdown from "../../../../components/Dropdown";

const actions = [
  {
    title: "Envíar resultados",
    icon: "message",
    action: () => console.log("Edit title & description"),
  },
  {
    title: "Borrar",
    icon: "trash",
    action: () => console.log("Delete forever"),
  },
];

const Row = ({ item, value, onChange, up, className }) => {
  const [visible, setVisible] = useState(false);
  const intervals2 = ["Not Assessed", "Assessed"];
  const [sorting2, setSorting2] = useState(intervals2[0]);
  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <Link href="#">{item.name}</Link>
        </div>
        <div className={styles.col}>
          <span>{item.invite}</span>
        </div>
        <div className={styles.col}>
          {item.p.map((x, index) => (
            <div key={index} className={cn(styles.back, x.badge)}>
              {x.step}
            </div>
          ))}
        </div>
        <div className={styles.col}>{item.percent}</div>
        <div className={styles.col}>
          <div className={styles.mx_new}>
            <Dropdown
              className={styles.dropdown}
              classDropdownHead={styles.dropdownHead}
              value={sorting2}
              setValue={setSorting2}
              options={intervals2}
              small
            />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.icon_drop}>
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
                        >
                          <Icon name={x.icon} size="20" />
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
      </div>
    </>
  );
};

export default Row;
