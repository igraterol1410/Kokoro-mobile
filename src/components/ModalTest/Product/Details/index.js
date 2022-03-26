import React, { useState } from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import Icon from "../../../Icon";
import Tooltip from "../../../Tooltip";
import TextInput from "../../../TextInput";
import Dropdown from "../../../Dropdown";

const Details = ({ className, setValue, activeIndex, setActiveIndex }) => {
  const intervals = ["Welcome to the process", "active", "inactive", "nothing"];
  const intervals2 = [
    "vai eta kono kam er ciri",
    "active",
    "inactive",
    "nothing",
  ];
  const [sorting, setSorting] = useState(intervals[0]);
  const [sorting2, setSorting2] = useState(intervals[0]);
  return (
    <div className={cn(styles.details, className)}>
      <div className={styles.faltu_header}>
        <div className="mb-24">
          <h4>Título</h4>
          <p>Descripción corta</p>
        </div>
        <ul className={styles.ulli}>
          <li className=" inline ">
            <span> Categoría </span> Valor
          </li>
          <li className=" inline ">
            <span> Duración </span> Valor
          </li>
          <li className=" inline ">
            <span> Idioma </span> Valor
          </li>
        </ul>
        <div className={styles.falto_image}>
          <img src="/images/svg/fl.svg" alt="" />
        </div>
      </div>
      <div className="btn-group-vertical mb-44">
        <button className={cn("button mr-10", styles.button)}>
          {/* <img src="/images/svg/pluse-c.svg" alt="" /> */}
          <span className=" inline-block ml-10">Agregar a tu Proceso</span>
        </button>
        <button className={cn("button mr-10", styles.black_btn)}>
          {/* <img src="/images/svg/up.svg" alt="" /> */}
          <span className=" inline-block ml-10">Descargar Reporte</span>
        </button>
        <button className={cn("button", styles.black_btn)}>
          {/* <img src="/images/svg/up.svg" alt="" /> */}
          <span className=" inline-block ml-10">Descargar Certificado</span>
        </button>
      </div>
      <div className="flex">
        <div className="col-9">
          <h3 className="title">Relevancia</h3>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <br />
          <br />
          <div className="title">Detalles de la prueba</div>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="col-3">
          <h3 className="title">Conceptos</h3>
          <ul className={styles.ls2}>
            <li>
              <img src="/images/svg/bc.svg" alt="" /> Concepto 1
            </li>
            <li>
              <img src="/images/svg/bc.svg" alt="" /> Concepto 1
            </li>
            <li>
              <img src="/images/svg/bc.svg" alt="" /> Concepto 1
            </li>
            <li>
              <img src="/images/svg/bc.svg" alt="" /> Concepto 1
            </li>
            <li>
              <img src="/images/svg/bc.svg" alt="" /> Concepto 1
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
