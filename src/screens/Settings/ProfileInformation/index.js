import React, { useState } from "react";
import cn from "classnames";
import styles from "./ProfileInformation.module.sass";
import Item from "../Item";
import Icon from "../../../components/Icon";
import TextInput from "../../../components/TextInput";
import Dropdown from "../../../components/Dropdown";

const ProfileInformation = ({ className }) => {
  const intervals = ["RUT de tu empresa", "Usa", "Chine", "Russia"];
  const [content, setContent] = useState();
  const [sorting, setSorting] = useState(intervals[0]);

  return (
    <Item
      className={cn(styles.card, className)}
      title="Mi cuenta"
      classTitle="title-green"
    >
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
              placeholder="Email"
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
        <h4 className={styles.custom_title}>Información de empresa</h4>
        <div className="flex flex-wrap">
          <div className="col-6 mb-32">
            <TextInput
              className={styles.field}
              name="companyName"
              placeholder="Información de empresa"
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
                  <span>Sube tu logo</span>
                </button>
              </div>
              <div className={styles.avatar2}>
                <img src="/images/svg/avatar2.png" alt="Avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Item>
  );
};

export default ProfileInformation;
