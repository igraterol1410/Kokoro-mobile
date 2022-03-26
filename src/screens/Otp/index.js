import React, { useState } from "react";
import cn from "classnames";
import styles from "./Otp.module.scss";
import { use100vh } from "react-div-100vh";
import { Link } from "react-router-dom";
import OTPInput from "react-otp-input";
import Image from "../../components/Image";
import { SignUplist } from "./mocdata.js";

const Otp = () => {
  const [OTP, setOTP] = useState("");
  function handleChange(OTP) {
    setOTP(OTP);
  }

  const heightWindow = use100vh();
  const items = SignUplist.map((item, index) => (
    <li key={index} className={styles.single_list_item}>
      <Image src={item.icon} srcDark={item.iconDark} alt="Core" />
      {item.title}
    </li>
  ));

  return (
    <div className={styles.login} style={{ minHeight: heightWindow }}>
      <div className={styles.logo_sidebar}>
        <Link className={styles.logo} to="/process">
          <Image
            className={styles.logo_img}
            src="/images/svg/signup-logo.svg"
            srcDark="/images/svg/signup-logo.svg"
            alt="Core"
          />
        </Link>
        <div className={styles.text_logo}>
          <Image
            src="/images/svg/text-logo.svg"
            srcDark="/images/svg/text-logo.svg"
            alt="Core"
          />
        </div>
        <ul>{items}</ul>
      </div>
      <div className={styles.login_form}>
        <div className={styles.wrap_box}>
          <Image
            className={styles.logo_goup}
            src="/images/svg/single-fox.svg"
            srcDark="/images/svg/single-foxsvg"
            alt="Apple"
          />
          <div className={cn("h2", styles.title)}>
            Revisa tu correo
          </div>
          <div className={styles.subtitle}>
            Te enviamos un código de verificación para ingresar.
          </div>

          <div className={styles.border}></div>

          <div className={styles.otp_box}>
            <OTPInput
              onChange={handleChange}
              value={OTP}
              inputStyle={styles.otp_input}
              focusStyle={styles.otp_input_focus}
              numInputs={4}
            />
          </div>
          <button
            className={cn(
              "button",
              styles.button,
              styles.primary_btn,
              styles.mb_32
            )}
            disabled
          >
            Continuar
          </button>
          <div className={(styles.subtitle, styles.new_color)}>
            Este sitio está protegido con reCAPTCHA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
