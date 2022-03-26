import React, { useState } from "react";
import cn from "classnames";
import styles from "./Login.module.sass";
import Item from "../Item";
import TextInput from "../../../components/TextInput";
import Icon from "../../../components/Icon";
import Tooltip from "../../../components/Tooltip";
import Dropdown from "../../../components/Dropdown";
// import ModalSetting from "../../../components/ModalSetting";

import Market from "./Market";
const market = [
  {
    name: "Nombre Apellido",
    invite: "Director RRHH",

    percent: "16/11/22",
    time: "1 min ago",
  },
  {
    name: "Nombre Apellido",
    invite: "Director RRHH",

    percent: "16/11/22",
    time: "1 min ago",
  },
  {
    name: "Nombre Apellido",
    invite: "Director RRHH",

    percent: "16/11/22",
    time: "1 min ago",
  },
  {
    name: "Nombre Apellido",
    invite: "Director RRHH",

    percent: "16/11/22",
    time: "1 min ago",
  },
];

const Login = ({ className }) => {
  const intervals = ["Type of user", "active", "inactive", "nothing"];
  const intervals2 = ["Correo", "active", "inactive", "nothing"];
  const [sorting, setSorting] = useState(intervals[0]);
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  return (
    <Item
      className={cn(styles.card, className)}
      title="Gestión de equipo"
      classTitle="title-purple"
    >
      <div className={styles.title}>
        Añade hasta 5 usuarios a tu equipo
        <Tooltip
          className={cn(styles.tooltip, "mb-32")}
          title="lorem ipsum dollae"
          icon="info"
          place="top"
        />
      </div>
      <div className={styles.fieldset}>
        <div className="flex flex-wrap">
          <div className="col-6 mb-32">
            <TextInput
              className={styles.field}
              name="Name"
              placeholder="Nombre"
              type="password"
              tooltip="Maximum 100 characters. No HTML or emoji allowed"
              required
            />
          </div>
          <div className="col-6 mb-32">
            <TextInput
              className={styles.field}
              name="l-name"
              placeholder="Apellido"
              type="text"
              tooltip="Maximum 100 characters. No HTML or emoji allowed"
              required
            />
          </div>
          <div className="col-6 mb-32">
            <TextInput
              className={styles.field}
              name="Correo"
              placeholder="Correo"
              type="email"
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
              options={intervals2}
            />
          </div>
          <div className="col-6"></div>
          <div className="col-6">
            <button
              className={cn(
                "button block w-full",
                styles.button,
                styles.black_btn
              )}
              // onClick={() => setVisibleModalProduct(true)}
              type="button"
            >
              <Icon name="plus" className={styles.icon} />
              <span>Añadir usuario</span>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-32">
        <Market items={market} />
      </div>
      {/* <ModalSetting
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
      /> */}
    </Item>
  );
};

export default Login;
