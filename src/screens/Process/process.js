import React, { useState } from "react";
import cn from "classnames";
import styles from "./Process.module.sass";
import Card from "../../components/Card";
import Icon from "../../components/Icon";
import Image from "../../components/Image";
// import Checkbox from "../../components/Checkbox";

import Form from "./components/form";
import FormMasiva from "./components/formMasiva";

import Dropdown from "../../components/Dropdown";
import Market from "./Market";
import { processData } from "./sample-data";
import { Link } from "react-router-dom";
import ModalCard from "../../components/ModalCard";
import ModalTest from "../../components/ModalTest";
import Tooltip from "../../components/Tooltip";
// data
const market = [
  {
    name: "Nombre Apellido",
    invite: "3/22",
    p: [
      {
        step: "Evaluación Completa",
        badge: "bg-green",
      },
    ],
    percent: "0%",
    time: "1 min ago",
  },
  {
    name: "Nombre Apellido",
    invite: "3/22",
    p: [
      {
        step: "En Proceso",
        badge: "bg-orange",
      },
    ],
    percent: "0%",
    time: "1 min ago",
  },
  {
    name: "Nombre Apellido",
    invite: "3/22",
    p: [
      {
        step: "Ingresado",
        badge: "bg-black",
      },
    ],
    percent: "0%",
    time: "1 min ago",
  },
  {
    name: "Nombre Apellido",
    invite: "3/22",
    p: [
      {
        step: "Eliminado",
        badge: "bg-tomato",
      },
    ],
    percent: "0%",
    time: "1 min ago",
  },
];

const intervals = ["Estado", "Nuevo", "Este año"];
const intervals2 = ["Etapa", "Nuevo", "Este año"];
const MainProcess = ({ wide }) => {
  const navigation = ["Carga Manual", "Carga Masiva"];

  const [sorting, setSorting] = useState(intervals[0]);
  const [sorting2, setSorting2] = useState(intervals2[0]);
  const [activeTab, setActiveTab] = useState(navigation[0]);

  // const [visible, setVisible] = useState(false);

  const [visibleModalProduct, setVisibleModalProduct] = useState(false);
  const [visibleModalTest, setVisibleModalTest] = useState(false);
  return (
    <React.Fragment>
      <div className={styles.inner}>
        <div
          className={cn(styles.container, {
            [styles.wide]: wide,
          })}
        >
          <Card className={(cn, (styles.card, "mb-32"))}>
            <div className={cn(styles.heading)}>
              <span className={styles.yes_no}>ProcessX</span>
              <div className={styles.icon_box}>
                <div className={styles.single_icon}>
                  <div className={styles.icon}>
                    <Image
                      src="/images/svg/user.svg"
                      srcDark="/images/svg/user.svg"
                    />
                  </div>
                  <span>4 postulantes </span>
                </div>
                <div className={styles.single_icon}>
                  <div className={styles.icon}>
                    <Image
                      src="/images/svg/file.svg"
                      srcDark="/images/svg/file.svg"
                    />
                  </div>
                  <span>1 evaluado</span>
                </div>
                <div className={styles.single_icon}>
                  <div className={styles.icon}>
                    <Image
                      src="/images/svg/file2.svg"
                      srcDark="/images/svg/file2.svg"
                    />
                  </div>
                  <span>3 sin evaluar</span>
                </div>
              </div>
            </div>
          </Card>
          <span className={cn(styles.text_base, "block mb-32")}>
            Tienes 30 días para invitar postulantes a tu proceso
            <span className="inline ml-5">
              <Image
                src="/images/svg/field.svg"
                srcDark="/images/svg/field.svg"
              />
            </span>
          </span>
          <Card
            className={cn(styles.card, "mb-32")}
            title="Invita un postulante por correo"
            classTitle={cn("title-purple", styles.title)}
            classCardHead={styles.head}
            head={
              <>
                <div className={cn(styles.nav, "tablet-hide")}>
                  {navigation.map((x, index) => (
                    <button
                      className={cn(styles.link, {
                        [styles.active]: x === activeTab,
                      })}
                      onClick={() => setActiveTab(x)}
                      key={index}
                    >
                      {x}
                    </button>
                  ))}
                </div>
                <div className={cn(styles.dropdown, "tablet-show")}></div>
              </>
            }
          >
            <div className={styles.products}>
              <div className={styles.wrapper}>
                {activeTab === navigation[0] && <Form />}
                {activeTab === navigation[1] && <FormMasiva />}
              </div>
            </div>
          </Card>
          <Card className="mb-32">
            <div className={styles.custom_header}>
              <div className={styles.mini_title}>Tus postulantes</div>
              <div className={cn(styles.search_box)}>
                <input type="text" placeholder="Busca postulante" />
                <Icon name="search" size="24" />
              </div>
              <div className={styles.mx_150}>
                <Dropdown
                  className={styles.dropdown}
                  classDropdownHead={styles.dropdownHead}
                  value={sorting}
                  setValue={setSorting}
                  options={intervals}
                  small
                />
              </div>
              <div className={styles.mx_150}>
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

            <div className="mt-48">
              <Market items={market} />
            </div>
            <div className={styles.foot}>
              <button className={styles.arrow}>
                <Icon name="arrow-left" size="20" />
              </button>
              <button className={styles.arrow}>
                <Icon name="arrow-right" size="20" />
              </button>
            </div>
          </Card>
          <Card className={(cn, (styles.card, "mb-32"))}>
            <div className={cn(styles.heading)}>
              <span className={styles.yes_no}>Pruebas seleccionadas</span>
              <div className={styles.icon_box}>
                <div className={styles.single_icon}>
                  <div className={styles.icon}>
                    <Icon name="breef-case" size="24" viewBox=" 0 0 24 24" />
                  </div>
                  <span>4 pruebas </span>
                  <Tooltip
                    title="lorem in ada"
                    icon="info"
                    placement="top"
                    className={styles.tooltip}
                  />
                </div>
                <div className={styles.single_icon}>
                  <div className={styles.icon}>
                    <Icon name="clock" size="24" />
                  </div>
                  <span>40 minutos</span>
                  <Tooltip
                    title="lorem in ada"
                    icon="info"
                    placement="top"
                    className={styles.tooltip}
                  />
                </div>
              </div>
            </div>
          </Card>
          <div className={styles.post_p}>
            {processData.map((x, index) => (
              <Card className={cn(styles.post_col, "mb-32")} key={index}>
                <div className={styles.header}>
                  <h4>{x.title}</h4>
                  <span
                    className="p"
                    onClick={() => setVisibleModalProduct(true)}
                  >
                    <Image
                      src="/images/svg/set.svg"
                      srcDark="/images/svg/set.svg"
                    />
                  </span>
                </div>
                <div className={styles.text}>{x.text}</div>
                <div className={styles.footers}>
                  <span>
                    <Icon name="clock" size="20" />
                    {x.time}
                  </span>
                  <button
                    className={cn(x.button_color, styles.btn)}
                    onClick={() => setVisibleModalTest(true)}
                  >
                    {x.button}
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className={cn(styles.footer, styles.flexend)}>
        <Link to="/process" className={cn("button-stroke", styles.button)}>
          Volver
        </Link>
        <Link to="#" className={cn("button-primary caps", styles.button)}>
          <Icon name="edit" size="24" />
          Editar proceso
        </Link>
      </div>
      <ModalCard
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
      />
      <ModalTest
        visible={visibleModalTest}
        onClose={() => setVisibleModalTest(false)}
      />
    </React.Fragment>
  );
};

export default MainProcess;
