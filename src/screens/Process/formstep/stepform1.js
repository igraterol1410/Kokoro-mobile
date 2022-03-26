import React from "react";
import cn from "classnames";
import styles from "../Process.module.sass";
import Tooltip from "../../../components/Tooltip";
import axios from "axios"
import { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
const options = [
  { value: "Mi Perfil 1", label: "Mi Perfil 1" },
  { value: "Mi Perfil 2", label: "Mi Perfil 2" },
  { value: "Mi Perfil 3", label: "Mi Perfil 3" },
];

const StepFrom = forwardRef((props, ref) => {


  const [profileInformation, setProfileInformation] = useState([])
  const [processValues, setProcessValues] = useState({ profileId: "", processName: "" })

  useEffect(() => {
    const options = {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('kokoro-acess-token')}`,
      },
      data: {
        "buscador": "",
        "ID_AREA": "",
        "ID_JERARQUIA": ""
      },
      url: `${process.env.REACT_APP_SERVER_URL}/perfil/listar_perfil`
    };


    axios(options).then(function (response) {
      // handle success
      console.log("The Profileee data is", response.data.body)
      setProfileInformation(response.data.body)

    }).catch((err) => {
      console.error("Customer API error: ", err);
    });

  }, [])
  function handleProcessValues(e) {
    if (e.target.placeholder === "Nombra tu proceso") {
      processValues.processName = e.target.value
      setProcessValues(processValues)
    }

    else {
      processValues.profileId = e.target.value
      setProcessValues(processValues)


    }


  }

  useImperativeHandle(ref, () => ({
    onFilterChange(id) {

      if (processValues.profileId === "") {
        console.log("emptry")
        processValues.profileId = profileInformation[0].PERFIL_ID
        setProcessValues(processValues)
        console.log("Value from parent", processValues)
      }
      return processValues

    },
  }));
  return (
    <>
      <div className={styles.single_input_filed} >
        <label htmlFor="mk">
          Nombra tu proceso
          <Tooltip
            className={styles.tooltip}
            title="lorem ipsum dolar text"
            icon="info"
            place="top"
          />
        </label>

        <input onChange={handleProcessValues} type="text" id="mk" placeholder="Nombra tu proceso" />
      </div>
      {props.state === "Sí" && (
        <div className={cn(styles.single_input_filed, styles.has_arrow)}>
          <label>
            Perfil
            <Tooltip
              className={styles.tooltip}
              title="lorem ipsum dolar text"
              icon="info"
              place="top"
            />
          </label>
          <div className={styles.custom_select}>
            <select>
              {profileInformation.map((option, index) => (
                <option key={index}>{option.NOMBRE_PERFIL}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {props.state === "No" && (
        <div className={cn(styles.single_input_filed, styles.has_arrow)}>
          <label>
            Área
            <Tooltip
              className={styles.tooltip}
              title="lorem ipsum dolar text"
              icon="info"
              place="top"
            />
          </label>
          <div className={styles.custom_select}>
            <select>
              {options.map((option, index) => (
                <option key={index}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}
      {/* {state === "Sí" && (
          <div className={cn(styles.single_input_filed, styles.has_arrow)}>
            <label>
              Mi perfil
              <Tooltip
                className={styles.tooltip}
                title="lorem ipsum dolar text"
                icon="info"
                place="top"
              />
            </label>
            <div className={styles.custom_select}>
              <select>
                {options.map((option, index) => (
                  <option key={index}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        )} */}

      <div className={cn(styles.single_input_filed, styles.has_arrow)}>
        <label>
          Jerarquía del cargo
          <Tooltip
            className={styles.tooltip}
            title="lorem ipsum dolar text"
            icon="info"
            place="top"
          />
        </label>
        <div className={styles.custom_select}>
          <select onChange={handleProcessValues}>
            {profileInformation.map((option, index) => (
              <option key={index}>{option.PERFIL_ID}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );

})

export default StepFrom;
