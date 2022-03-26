import React from "react";
import cn from "classnames";
import styles from "./components.module.sass";
// import Image from "../../../components/Image";
import Icon from "../../../components/Icon";

const Form = () => {
  return (
    <>
      <div className={styles.ms}>
        <div className="flex flex-wrap">
          <div className="col-12 mb-12">
            <div className={cn(styles.upload)}>
              <button
                className={cn(styles.btn_white, "common-btn w-full block")}
              >
                <Icon name="upload" size="25" style={{ marginRight: 10 }} />
                Cargar contactos
              </button>
            </div>
          </div>
          <div className="col-12 mb-12">
            <button className={cn(styles.btn_black, "common-btn w-full block")}>
              <span className=" inline-block mr-10">
                <img src="/images/svg/msg.svg" alt="" />
              </span>
              Enviar invitación
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
