import React from "react";
import cn from "classnames";
import styles from "./components.module.sass";
import Image from "../../../components/Image";
import Icon from "../../../components/Icon";

const Form = () => {
  return (
    <>
      <div className={styles.ms}>
        <div className="flex flex-wrap">
          <div className="col-6 mb-12">
            <input type="text" placeholder="Nombre" className={styles.field} />
          </div>
          <div className="col-6 mb-12">
            <input
              type="text"
              placeholder="Apellido"
              className={styles.field}
            />
          </div>
          <div className="col-6 mb-12">
            <input type="email" placeholder="Correo" className={styles.field} />
          </div>
          <div className="col-6 mb-12">
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
