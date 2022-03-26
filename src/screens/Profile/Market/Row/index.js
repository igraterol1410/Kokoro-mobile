import React, { useState } from "react";


import styles from "./Row.module.sass";
import cn from "classnames";
import axios from 'axios'
import OutsideClickHandler from "react-outside-click-handler";
import Icon from "../../../../components/Icon";
import toast, { Toaster } from "react-hot-toast";

const actions = [
  {
    title: "Editar",
    icon: "edit",
    action: (e) => { console.log("Edit title & description", e) },
  },
  {
    title: "Borrar",
    icon: "trash",
    action: (e) => deleteProfile(e),
  },
];
const deleteProfile = (e) => {
  console.log("in the delete profile")

  const options = {
    method: "get",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${sessionStorage.getItem('kokoro-acess-token')}`,
    },

    url: `${process.env.REACT_APP_SERVER_URL}/perfil/eliminar_perfil/${e}`
  };
  axios(options).then(function (response) {
    // handle success
    console.log("The delete profile  data is", response.data)
    toast.success(response.data.body)



  }).catch((err) => {
    toast.error("This didn't work.", err)
  });

}

const Row = ({ item, value, onChange, up, className }) => {
  const [visible, setVisible] = useState(false);
  const intervals2 = ["Not Assessed", "Assessed"];

  return (
    <>
      <Toaster />
      <div className={styles.row}>

        <div className={styles.col}>
          <span>{item.NOMBRE_PERFIL}</span>
        </div>
        <div className={styles.col}>
          <span>{item.AREA}</span>
        </div>
        <div className={styles.col}>
          <span>{item.JERARQUIA}</span>
        </div>

        <div className={styles.col}>
          <div className={styles.icon_drop}>
            <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
              <div
                className={cn(styles.dropdown_parent, className, {
                  [styles.active]: visible,
                })}
              >
                <button onClick={() => setVisible(!visible)}>
                  <svg
                    className={styles.threedot}
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.334 8.006c0 .736-.597 1.333-1.333 1.333s-1.333-.597-1.333-1.333S3.264 6.673 4 6.673s1.333.597 1.333 1.333zm4 0c0 .736-.597 1.333-1.333 1.333s-1.333-.597-1.333-1.333S7.264 6.673 8 6.673s1.333.597 1.333 1.333zm4 0c0 .736-.597 1.333-1.333 1.333s-1.333-.597-1.333-1.333.597-1.333 1.333-1.333 1.333.597 1.333 1.333z"></path>
                  </svg>
                </button>
                <div className={styles.body}>
                  <ul>
                    {actions.map((x, index) => (
                      <li key={index}>
                        <button
                          onClick={() => { x.action(item.PERFIL_ID) }}
                          className={styles.action_buttons}
                        >
                          <Icon name={x.icon} size="20" />
                          {x.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
    </>
  );
};

export default Row;
