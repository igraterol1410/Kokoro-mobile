import React, { useCallback, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./ModalReport.module.sass";
import Icon from "../Icon";
import Product from "./Product";

import Image from "../Image";

const ModalProduct = ({ visible, onClose }) => {
  const escFunction = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  useEffect(() => {
    if (visible) {
      const target = document.querySelector("#modal-product");
      disableBodyScroll(target);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [visible]);

  return createPortal(
    visible && (
      <div id="modal-product" className={styles.modal}>
        <div className={styles.modal_header}>
          <div className="logo">
            {/* <img src="/images/svg/logo-text.svg" alt="" /> */}
            <Image
              className={styles.pic2}
              src="/images/svg/logo-text.svg"
              srcDark="/images/svg/logo-text-dark.svg"
              alt="Core"
            />
          </div>
          <div className={styles.button_logo}>
            <Link to="#" className={cn("button-primary caps", styles.button)}>
              <img src="/images/svg/share.svg" alt="" className="mr-10" />
              Compartir
            </Link>
            <div className={styles.avatar2}>
              <img src="/images/svg/avatar2.png" alt="" />
            </div>
          </div>
        </div>

        <div className={styles.outer}>
          <Product />
        </div>
      </div>
    ),
    document.body
  );
};

export default ModalProduct;
