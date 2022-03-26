import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Details.module.sass";
import Icon from "../../../Icon";
import Tooltip from "../../../Tooltip";
import TextInput from "../../../TextInput";
import Dropdown from "../../../Dropdown";

const Details = ({ className, setValue, activeIndex, setActiveIndex }) => {
  const intervals = ["País", "active", "inactive", "nothing"];

  const [sorting, setSorting] = useState(intervals[0]);
  const [sorting2, setSorting2] = useState(intervals[0]);
  return (
    <div className={cn(styles.details, className)}>
      <div className={styles.faltu_header} style={{ display: "flex" }}>
        <div style={{ width: "80%" }}>
          <h4>Mejora tu experiencia en Kokoro</h4>
          <p>Completa tus datos para personalizar tu cuenta</p>
        </div>
        <div style={{ width: "20%" }}>
          <img src="/images/svg/fox_kiss.svg" alt="Avatar" />
        </div>
      </div>

      <div className={styles.fieldset}>
        <div className="flex flex-wrap">
          <div className="col-6 mb-32">
            <TextInput
              className={styles.field}
              name="display-name"
              type="text"
              placeholder="Nombre"
              tooltip="Maximum 100 characters. No HTML or emoji allowed"
              required
            />
          </div>
          <div className="col-6 mb-32">
            <TextInput
              className={styles.field}
              name="Last-name"
              type="text"
              placeholder="Apellido"
              tooltip="Maximum 100 characters. No HTML or emoji allowed"
              required
            />
          </div>
          <div className="col-6 mb-32">
            <TextInput
              className={styles.field}
              name="email"
              type="email"
              placeholder="Correo electrónico"
              tooltip="Maximum 100 characters. No HTML or emoji allowed"
              required
            />
          </div>
          <div className="col-6 mb-32">
            <Dropdown
              className={styles.dropdown}
              classDropdownHead={styles.dropdownHead}
              value={sorting}
              setValue={setSorting}
              options={intervals}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="col-6 mb-32">
            <TextInput
              className={styles.field}
              name="companyName"
              placeholder="Nombre de tu empresa"
              type="password"
              tooltip="Maximum 100 characters. No HTML or emoji allowed"
              required
            />
          </div>
          <div className="col-6 mb-32">
            <TextInput
              className={styles.field}
              name="rut-name"
              placeholder="RUT de tu empresa"
              type="password"
              tooltip="Maximum 100 characters. No HTML or emoji allowed"
              required
            />
          </div>
          <div className="col-6 mb-32">
            <TextInput
              className={styles.field}
              name="workars-name"
              placeholder="Cantidad de trabajadores"
              type="password"
              tooltip="Maximum 100 characters. No HTML or emoji allowed"
              required
            />
          </div>
          <div className="col-6 mb-32">
            <div className={styles.profile}>
              <div className={styles.file}>
                <input type="file" />
                <button className={cn("button", styles.button)} type="button">
                  <img src="/images/svg/up.svg" alt="" />
                  <span>Subir tu logo</span>
                </button>
              </div>
              <div className={styles.avatar2}>
                <img src="/images/svg/avatar2.png" alt="Avatar" />
              </div>
            </div>
          </div>
          <div className="col-12 mb-32">
            <Link
              to="/start-form"
              className={cn("button-primary", styles.button)}
              style={{ width: "100%" }}
            >
              Guardar y publicar proceso
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
