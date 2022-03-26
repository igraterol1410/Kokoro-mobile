import React, { useState } from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import Icon from "../../../Icon";
import Tooltip from "../../../Tooltip";
import TextInput from "../../../TextInput";
import Dropdown from "../../../Dropdown";
import Switch from "../../../Switch";

const Details = ({ className, setValue, activeIndex, setActiveIndex }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };
  return (
    <div className={cn(styles.details, className)}>
      <div className={styles.faltu_header}>
        <div className="mb-24">
          <h4>Configuración avanzada</h4>
          <p>Prueba</p>
        </div>
        <ul className={styles.ulli}>
          <li className=" inline ">
            <span>Categoría</span> Valor
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
      <div className={styles.tab_content}>
        <div className={styles.hudalist}>
          <span>Dimensión</span>
          <span>Resultado</span>
          <span>Valor</span>
        </div>

        <div className={styles.single_cd}>
          <div className={styles.single_cd_header}>
            <div className={styles.tp}>
              <span>Nombre de dimensión</span>
            </div>
            <div className={styles.badge}>
              <input
                type="range"
                min="-10"
                max="10"
                style={{ width: "100%" }}
              />
              {/* <div className={styles.box}>
                <span>%</span>
                <input type="text" placeholder="100"/>
              </div> */}
              <div style={{ width: "100%", textAlign: "center" }}>100 %</div>
            </div>
            <div className={styles.count}>
              <Switch
                className={styles.switch}
                value={selectedFilters.includes()}
                onChange={() => handleChange()}
              />
            </div>
          </div>
        </div>
        <button className={cn("button block w-full", styles.button)}>
          {" "}
          <img src="/images/svg/flash.svg" alt="" />
          <span className=" inline-block ml-10">Optimizar prueba</span>
        </button>
      </div>
    </div>
  );
};

export default Details;
