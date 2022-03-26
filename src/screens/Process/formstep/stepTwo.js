import React from "react";
import cn from "classnames";
import styles from "../Process.module.sass";
import Card from "../../../components/Card";
import Image from "../../../components/Image";
import { processData } from "../sample-data";
import Icon from "../../../components/Icon";

const StepTwo = () => {
  return (
    <>
      <div className={styles.post_p}>
        {processData.map((x, index) => (
          <Card className={cn(styles.post_col, "mb-32")} key={index}>
            <div className={styles.header}>
              <h4>{x.title}</h4>
              <span>
                <Image
                  src="/images/svg/close.svg"
                  srcDark="/images/svg/close.svg"
                />
              </span>
            </div>
            <div className={styles.text}>{x.text}</div>
            <div className={styles.footers}>
              <span>
                <Icon name="clock" size="20" />
                {x.time}
              </span>
              <button className={cn(x.button_color, styles.btn)}>
                {x.button}
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default StepTwo;
