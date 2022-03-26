import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import cn from "classnames";
import styles from "./Process.module.sass";
import Card from "../../components/Card";
import StepFrom from "./formstep/stepform1";
import Icon from "../../components/Icon";
import axios from "axios"
import Image from "../../components/Image";
import StepTwo from "./formstep/stepTwo";
import Checkbox from "../../components/Checkbox";
import { listItems } from "./sample-data";
import ModalProcess from "../../components/ModalProcess";

import TooltipGlodal from "../../components/TooltipGlodal";
import Tooltip from "../../components/Tooltip";

const Process = ({ wide }) => {
  const childRef = useRef();
  let history = useHistory();
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step !== 2) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step === 1) {
      history.push("/process");
    }

    if (step !== 1) {
      setStep(step - 1);
    }
  };

  const navigation = ["Sí", "No"];
  const [activeTab, setActiveTab] = useState(navigation[0]);
  const [chooseAll, setСhooseAll] = useState(false);


  const [activeTab2, setActiveTab2] = useState(navigation[1]);
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);
  const [processData, setProcessData] = useState({ profileId: "", processName: "" });

  function handleAdd(e) {
    console.log(e)
    setProcessData(e)
    console.log(processData)

  }
  function getChildData() {
    var processApiData = childRef.current.onFilterChange("");
    const options = {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('kokoro-acess-token')}`,
      },
      data: {
        "nombre": processApiData.processName,
        "perfil_id": processApiData.profileId
      },
      url: `${process.env.REACT_APP_SERVER_URL}/proceso/ingresar_proceso`
    };


    axios(options).then(function (response) {
      // handle success
      console.log("The Profileee data is", response.data.body)


    }).catch((err) => {
      console.error("Customer API error: ", err);
    });


  }
  return (
    <>
      <div className={styles.inner}>
        <div
          className={cn(styles.container, {
            [styles.wide]: wide,
          })}
        >
          {(() => {
            switch (step) {
              case 1:
                return (
                  <div className="sttep-1">
                    <div className={styles.title_wrapper}>
                      <div className="flex-1">
                        <div className={styles.countStep}>Paso 1 de 2</div>
                        <div className={cn("h3", styles.title)}>
                          Comienza tu nuevo proceso
                        </div>
                      </div>
                      <div className="flex-0">
                        <img src="/images/svg/fx1.svg" alt="" />
                      </div>
                    </div>
                    <Card className={(cn, (styles.card, "mb-32"))}>
                      <div className={cn(styles.heading)}>
                        <span className={styles.yes_no}>
                          ¿Deseas recomendaciones inteligentes para tu proceso?
                        </span>
                        <div className={cn(styles.nav, "dad")}>
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
                      </div>
                    </Card>

                    {activeTab === navigation[0] && (
                      <div className="content block">
                        {/* <span className={cn(styles.text_base, "block mb-32")}>
                          Completa la información
                          <span className="inline ml-5">
                            <Tooltip
                              className={styles.tooltip}
                              title="lorem ipsum info"
                              placement="top"
                              icon="info"
                            />
                          </span>
                        </span> */}
                        <Card>
                          <StepFrom ref={childRef} updateData={handleAdd} state={navigation[0]} />
                        </Card>
                      </div>
                    )}
                    {activeTab === navigation[1] && (
                      <div className="content block">
                        {/* <span className={cn(styles.text_base, "block mb-32")}>
                          Complete la información para crear un proceso con una
                          de tus perfiles
                          <span className="inline ml-5">
                            <Tooltip
                              title="loremimpsum info"
                              placement="top"
                              icon="info"
                              className={styles.tooltip}
                            />
                          </span>
                        </span> */}
                        <Card>
                          <StepFrom state={activeTab} />
                        </Card>
                      </div>
                    )}
                  </div>
                );
              case 2:
                return (
                  <React.Fragment>
                    <div className={styles.title_wrapper}>
                      <div className="flex-1">
                        <div className={styles.countStep}>Paso 2 de 2</div>
                        <div className={cn("h3", styles.title)}>
                          Revisa tu proceso antes de publicar
                        </div>
                      </div>
                      <div className="flex-0">
                        <img src="/images/svg/fx2.svg" alt="" />
                      </div>
                    </div>
                    {activeTab2 === navigation[0] && (
                      <div className="content block">
                        <Card className={(cn, (styles.card, "mb-32"))}>
                          <div className={cn(styles.heading)}>
                            <span className={styles.yes_no}>ProcessX</span>
                            <div className={styles.icon_box}>
                              <div className={styles.single_icon}>
                                <div className={styles.icon}>
                                  <Icon
                                    name="breef-case"
                                    size="24"
                                    viewBox=" 0 0 24 24"
                                  />
                                </div>
                                <span>3 tests</span>
                                <Image
                                  src="/images/svg/field.svg"
                                  srcDark="/images/svg/field.svg"
                                />
                              </div>
                              <div className={styles.single_icon}>
                                <div className={styles.icon}>
                                  <Icon name="clock" size="24" />
                                </div>
                                <span>30 min</span>
                                <Image
                                  src="/images/svg/field.svg"
                                  srcDark="/images/svg/field.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </Card>
                        <span className={cn(styles.text_base, "block mb-32")}>
                          Pruebas seleccionadas de tu proceso
                          <span className="inline ml-5">
                            <Image
                              src="/images/svg/field.svg"
                              srcDark="/images/svg/field.svg"
                            />
                          </span>
                        </span>

                        <StepTwo />
                      </div>
                    )}
                    {activeTab2 === navigation[1] && (
                      <div className="content block">
                        <Card className={(cn, (styles.card, "mb-32"))}>
                          <div className={cn(styles.heading)}>
                            <span className={styles.yes_no}>ProcessX</span>
                            <div className={styles.icon_box}>
                              <div className={styles.single_icon}>
                                <div className={styles.icon}>
                                  <Icon
                                    name="breef-case"
                                    size="24"
                                    viewBox=" 0 0 24 24"
                                  />
                                </div>
                                <span>3 tests</span>
                                <Image
                                  src="/images/svg/field.svg"
                                  srcDark="/images/svg/field.svg"
                                />
                              </div>
                              <div className={styles.single_icon}>
                                <div className={styles.icon}>
                                  <Icon name="clock" size="24" />
                                </div>
                                <span>30 min</span>
                                <Image
                                  src="/images/svg/field.svg"
                                  srcDark="/images/svg/field.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </Card>
                        <span className={cn(styles.text_base, "block mb-32")}>
                          Complete the information to create a process with one
                          of your profiles
                          <span className="inline ml-5">
                            <Image
                              src="/images/svg/field.svg"
                              srcDark="/images/svg/field.svg"
                            />
                          </span>
                        </span>

                        <StepTwo />
                      </div>
                    )}
                    <Card className={(cn, (styles.card, "mb-32"))}>
                      <div className={cn(styles.heading)}>
                        <span className={styles.yes_no}>
                          ¿Desea agregar más pruebas?
                        </span>
                        <div className={cn(styles.nav, "dad")}>
                          {navigation.map((x, index) => (
                            <button
                              className={cn(styles.link, {
                                [styles.active]: x === activeTab2,
                              })}
                              onClick={() => setActiveTab2(x)}
                              key={index}
                            >
                              {x}
                            </button>
                          ))}
                        </div>
                      </div>
                    </Card>

                    {activeTab2 === navigation[0] && (
                      <div className="content block">
                        <ul className={styles.listitems}>
                          {listItems.map((item, index) => (
                            <li key={index}>
                              <span>{item.title}</span>{" "}
                            </li>
                          ))}
                        </ul>
                        <div className={styles.search_box}>
                          <input
                            type="text"
                            placeholder="Encuentra una prueba..."
                          />
                          <Icon name="search" size="24" />
                        </div>
                        <StepTwo />
                      </div>
                    )}
                  </React.Fragment>
                );
              default:
                return null;
            }
          })()}
        </div>
      </div>
      <div className={styles.footer}>
        <div className="flex-1">
          {step === 2 && (
            <div className="flex">
              <Checkbox
                className={styles.checkbox}
                value={chooseAll}
                onChange={() => setСhooseAll(!chooseAll)}
              />
              <span className=" inline-block ml-5">
                Guardar perfil para futuros procesos
              </span>
            </div>
          )}
        </div>
        <div className="flex-0">
          <button
            onClick={prevStep}
            className={cn("button-stroke", styles.button)}
          >
            Volver
          </button>
          {step === 1 && (
            <button
              onClick={() => {
                getChildData()
                nextStep()
              }}
              className={cn("button-primary", styles.button)}
            >
              <span className="inline mr-8">
                <img src="/images/svg/left.svg" alt="" />
              </span>{" "}
              Continuar
            </button>
          )}
          {step === 2 && (
            <button
              onClick={() => setVisibleModalProduct(true)}
              className={cn("button-primary", styles.button)}
            >
              Publicar
            </button>
          )}
        </div>
      </div>
      <ModalProcess
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
      />
      <TooltipGlodal />
    </>
  );
};

export default Process;
