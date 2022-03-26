import React, { useState } from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import Icon from "../../../Icon";
import Tooltip from "../../../Tooltip";
import TextInput from "../../../TextInput";
import Dropdown from "../../../Dropdown";

const Details = ({ className, setValue, activeIndex, setActiveIndex }) => {
  const intervals = ["Bievenidos al proceso", "active", "inactive", "nothing"];
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
        <h4>Tus plantillas de correo</h4>
        <p>Personaliza los correos que se enviarán a tus postulantes</p>
      </div>

      <div className={styles.fieldset}>
        <div className="flex flex-wrap">
          <div className={styles.title}>
            Plantillas
            <Tooltip
              className={cn(styles.tooltip, "mb-26")}
              title="Small description"
              icon="info"
              place="top"
            />
          </div>
          <div className="col-12 mb-24">
            <Dropdown
              className={styles.dropdown}
              classDropdownHead={styles.dropdownHead}
              value={sorting}
              setValue={setSorting}
              options={intervals}
            />
          </div>
          <div className={styles.title}>
            Asunto
            <Tooltip
              className={cn(styles.tooltip, "mb-12")}
              title="Small description"
              icon="info"
              place="top"
            />
          </div>
          <div className="col-12 mb-24">
            <TextInput
              className={cn(styles.field, styles.input_white)}
              name="Name"
              placeholder="Name"
              type="text"
              tooltip="Maximum 100 characters. No HTML or emoji allowed"
              required
            />
          </div>
          <div className={styles.title}>
            Mensaje
            <Tooltip
              className={cn(styles.tooltip, "mb-12")}
              title="Small description"
              icon="info"
              place="top"
            />
          </div>
          <div className="col-12 mb-24">
            <div className={styles.bgc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </div>
          </div>
          <button className={cn("button block w-full", styles.button)}>
            {" "}
            <img src="/images/svg/image.svg" alt="" />
            <span className="inline-block ml-10">Guardar plantilla</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
