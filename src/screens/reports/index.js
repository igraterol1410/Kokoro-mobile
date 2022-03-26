import React, { useState } from "react";
import cn from "classnames";
import styles from "./reports.module.sass";
import Card from "../../components/Card";
import Icon from "../../components/Icon";
import Image from "../../components/Image";
import Checkbox from "../../components/Checkbox";
import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";
import ModalReport from "../../components/ModalReport";
// data
export const processData = [
  {
    title: "Prueba 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Resultados",
    buttonLink: "/",
    button_color: "dark-sky",
  },
  {
    title: "Prueba 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Resultados",
    buttonLink: "/",
    button_color: "dark-sky",
  },
  {
    title: "Prueba 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
    time: "10 mins",
    button: "Resultados",
    buttonLink: "/",
    button_color: "dark-sky",
  },
];
const Reports = ({ wide }) => {
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);
  return (
    <React.Fragment>
      <div className={styles.inner}>
        <div
          className={cn(styles.container, {
            [styles.wide]: wide,
          })}
        >
          <div className={styles.title_wrapper}>
            <div className="flex-1">
              <div className={cn("h3", styles.title)}>
                Reporte de evaluación
              </div>
            </div>
          </div>
          <Card className={(cn, (styles.card, "mb-32"))}>
            <div className={cn(styles.heading)}>
              <div
                className={cn(styles.icon_box, styles.new_icon_box, "flex-1")}
              >
                <div className={styles.single_icon}>
                  <div className={styles.icon}>
                    <Image
                      src="/images/svg/user.svg"
                      srcDark="/images/svg/user-dark.svg"
                    />
                  </div>
                  <div>
                    <span className="block mb-4">
                      Rodrigo Echeverria Scheel
                    </span>
                    <div>
                      {" "}
                      <span className="gray-bdage">32 años</span>
                    </div>
                  </div>
                </div>
                <div className={styles.single_icon}>
                  <div className={styles.icon}>
                    <Image
                      src="/images/svg/star.svg"
                      srcDark="/images/svg/star-dark.svg"
                    />
                  </div>
                  <span>Puntaje 53%</span>
                </div>
                <div className={styles.single_icon}>
                  <div className={styles.icon}>
                    <Image
                      src="/images/svg/mail.svg"
                      srcDark="/images/svg/mail-dark.svg"
                    />
                  </div>
                  <span>rodrigo@setaverso.com</span>
                </div>
              </div>
            </div>
          </Card>
          <Card
            className={(cn, (styles.card, "mb-32"))}
            title="Asistente de administraciónt"
          >
            <div className={styles.text_base}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              <br />
              <br />
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              <button
                className={cn("button-primary caps", styles.button_dark)}
                onClick={() => setVisibleModalProduct(true)}
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5 1C13.6046 1 14.5 1.89543 14.5 3H18.5C20.1569 3 21.5 4.34315 21.5 6V19C21.5 20.6569 20.1569 22 18.5 22H6.5C4.84315 22 3.5 20.6569 3.5 19V6C3.5 4.34315 4.84315 3 6.5 3H10.5C10.5 1.89543 11.3954 1 12.5 1ZM7.5 11C7.5 10.4477 7.94772 10 8.5 10H16.5C17.0523 10 17.5 10.4477 17.5 11C17.5 11.5523 17.0523 12 16.5 12H8.5C7.94772 12 7.5 11.5523 7.5 11ZM8.5 14C7.94772 14 7.5 14.4477 7.5 15C7.5 15.5523 7.94772 16 8.5 16H12.5C13.0523 16 13.5 15.5523 13.5 15C13.5 14.4477 13.0523 14 12.5 14H8.5Z"
                    fill="white"
                  />
                </svg>
                Ver reporte general
              </button>
            </div>
          </Card>
          <div className={styles.post_p}>
            {processData.map((x, index) => (
              <Card className={cn(styles.post_col, "mb-32")} key={index}>
                <div className={styles.header}>
                  <h4>{x.title}</h4>
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
        </div>
      </div>
      <ModalReport
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
      />
    </React.Fragment>
  );
};

export default Reports;
