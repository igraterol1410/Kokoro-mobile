import React from "react";
import { useHistory } from "react-router-dom";
import cn from "classnames";
import styles from "./SignIn.module.scss";
import { use100vh } from "react-div-100vh";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Image from "../../components/Image";
import { SignUplist } from "./mocdata.js";
import { useEffect } from "react";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

import { useForm, Controller } from "react-hook-form";

const SignIn = () => {
  let history = useHistory();

  /*
    PASSWORD NOT YET
  */

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "JOR.ARELLANOB@GMAIL.COM",
      // password: "",
    },
  });

  const handleLogin = (data) => {
    const options = {
      method: "post",
      data: {
        correo: data.email,
      },

      url: `${process.env.REACT_APP_SERVER_URL}/auth/login_admin`,
    };

    axios(options)
      .then(function (response) {
        // handle success
        // console.log(
        //   "The json web token table data is",
        //   response.data.body.token
        // );
        sessionStorage.setItem("kokoro-acess-token", response.data.body.token);
        sessionStorage.setItem(
          "kokoro-acess-datauser",
          response.data.body.datos_admin
        );

        history.push("/process");

        // console.log(
        //   "From storage",
        //   sessionStorage.getItem("kokoro-acess-token")
        // );
      })
      .catch((err) => {
        console.error("Customer API error: ", err);
        toast.error("Error al iniciar sesión");
      });
  };

  const heightWindow = use100vh();
  const items = SignUplist.map((item, index) => (
    <li key={index} className={styles.single_list_item}>
      <Image src={item.icon} srcDark={item.iconDark} alt="Core" />
      {item.title}
    </li>
  ));

  return (
    <div className={styles.login} style={{ minHeight: heightWindow }}>
      <Toaster />
      <div className={styles.logo_sidebar}>
        <Link className={styles.logo} to="/">
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
            srcDark="/images/svg/text-logo-white.svg"
            alt="Core"
          />
        </div>
        <ul>{items}</ul>
      </div>
      <div className={styles.login_form}>
        <form onSubmit={handleSubmit(handleLogin)} autoComplete="off">
          <div className={styles.wrap_box}>
            <Image
              className={styles.logo_goup}
              src="/images/svg/group-fox.svg"
              srcDark="/images/svg/group-fox.svg"
              alt="Apple"
            />
            <div className={cn("h2", styles.title)}>Conéctate</div>
            {/* <div className={styles.subtitle}>Inicia con una de tus cuentas</div> */}
            <div className={styles.subtitle}>Iniciar sesión</div>

            {/* <div className={styles.btns}>
            <button className={cn("button-stroke", styles.button)}>
              <img src="/images/content/google.svg" alt="Google" />
              Google
            </button>
            <button className={cn("button-stroke", styles.button)}>
              <Image
                className={styles.pic}
                src="/images/content/apple-dark.svg"
                srcDark="/images/content/apple-light.svg"
                alt="Apple"
              />
              Apple ID
            </button>
          </div>
          <div className={styles.border}></div>
          <div className={styles.subtitle}>
            O continúa con tu correo electrónico
          </div> */}

            <Controller
              name="email"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextInput
                  className={styles.field}
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  icon="mail"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            {/* 
            <Controller
              name="password"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextInput
                  className={styles.field}
                  type="password"
                  placeholder="Contraseña"
                  required
                  icon="lock"
                  value={value}
                  onChange={onChange}
                />
              )}
            /> */}

            <button
              type="submit"
              className={cn("button", styles.button, styles.primary_btn)}
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
