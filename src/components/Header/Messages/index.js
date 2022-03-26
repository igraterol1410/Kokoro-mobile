import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Messages.module.sass";
import Icon from "../../Icon";
import Actions from "../../Actions";
import Item from "./Item";

const messages = [
  {
    title: "Aprende lo básico",
    content: "When do you release the coded template",
    icon: "/images/svg/search.svg",
    time: "03:30PM",
    new: true,
    url: "#",
  },
  {
    title: "Orval Casper",
    content: "When do you release the coded template",
    icon: "/images/svg/v.svg",
    time: "11:59AM",
    online: true,
    url: "#",
  },
  {
    title: "Video tutorial",
    content: "When do you release the coded template",
    icon: "/images/svg/c.svg",
    time: "09:30AM",
    new: true,
    url: "#",
  },
];

const actions = [
  {
    title: "Mark as read",
    icon: "check",
    action: () => console.log("Mark as read"),
  },
  {
    title: "Delete message",
    icon: "trash",
    action: () => console.log("Delete message"),
  },
];

const Messages = ({ className }) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(styles.messages, className, {
          [styles.active]: visible,
        })}
      >
        <button
          className={cn("button", styles.button, styles.new_btn)}
          onClick={() => setVisible(!visible)}
        >
          <span className={styles.help_icon}>
            <img src="/images/svg/question.svg" alt="" />
          </span>
          <span>Necesito ayuda</span>
        </button>

        <div className={styles.body}>
          <div className={styles.top}>
            <div className={styles.title}>Centro de ayuda</div>
          </div>
          <div className={styles.list}>
            {messages.map((x, index) => (
              <Item
                className={cn(styles.item, className)}
                item={x}
                key={index}
                onClose={() => setVisible(false)}
              />
            ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.title}>
              {" "}
              <img src="/images/svg/sp.svg" alt="" />
              Soporte
            </div>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Messages;
