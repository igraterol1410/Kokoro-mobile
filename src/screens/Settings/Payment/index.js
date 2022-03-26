import React from "react";
import cn from "classnames";
import styles from "./Payment.module.sass";
import Item from "../Item";
import Tooltip from "../../../components/Tooltip";

const Payment = ({ className }) => {
  return (
    <Item
      className={cn(styles.card, className)}
      title="Billing and payments"
      classTitle="title-green"
    >
      <div className={styles.line}>
        <div className={styles.title}>
          Concepto{" "}
          <Tooltip
            className={styles.tooltip}
            title="lorem impsu dollar"
            icon="info"
            place="top"
          />
        </div>
        <button className={cn("button-stroke button-small", styles.button)}>
          To update
        </button>
      </div>
      <div className={styles.content}>
        Payout fee is 1% of the amount transferred, with a minimum of USD $0.25
        and a maximum of USD $20
      </div>
    </Item>
  );
};

export default Payment;
