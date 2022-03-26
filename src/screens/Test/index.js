import React, { useState, useEffect } from "react";
import axios from 'axios'
import cn from "classnames";
import styles from "./test.module.sass";
import Card from "../../components/Card";
import Icon from "../../components/Icon";
import Image from "../../components/Image";
import Form from "../../components/Form";
import ModalTest from "../../components/ModalTest";

// data
export const processData = [
  {
    title: "Pruebaaaa",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "purple",
    categoryName: ["all", "cta-6"],
  },
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "purple",
    categoryName: ["all", "cta-2"],
  },
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "purple",
    categoryName: ["all", "cta-4"],
  },
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "light-sky",
    categoryName: ["all", "cta-4"],
  },
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "light-sky",
    categoryName: ["all", "cta-1", "cta-2"],
  },
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "light-sky",
    categoryName: ["all", "cta-6 cta-1"],
  },
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "light-success",
    categoryName: ["all", "cta-3 cta-1", "cta-2"],
  },
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "light-success",
    categoryName: ["all", "cta-4 cta-2"],
  },
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "light-success",
    categoryName: ["all", "cta-6"],
  },
];

export const processData2 = [
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "purple",
    categoryName: ["all", "cta-6"],
  },
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "purple",
    categoryName: ["all", "cta-2"],
  },
  {
    title: "Prueba22",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "purple",
    categoryName: ["all", "cta-2"],
  },
];
export const processData3 = [
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "purple",
    categoryName: ["all", "cta-2"],
  },
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "purple",
    categoryName: ["all", "cta-2"],
  },
];
export const processData4 = [
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "purple",
    categoryName: ["all", "cta-2"],
  },
  {
    title: "Prueba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time: "10 mins",
    button: "Ver Detalles",
    buttonLink: "/",
    button_color: "purple",
    categoryName: ["all", "cta-2"],
  },
];

export const listItems = [
  {
    title: "Todas las pruebas",
  },
  {
    title: "Inteligencia y cognitivo",
  },
  {
    title: "Personalidad y comportamiento",
  },
  {
    title: "Habilidades y destreza",
  },
];

const navigation = [
  "Todas las pruebas",
  "Inteligencia y cognitivo",
  "Personalidad y comportamiento",
  "Habilidades y destreza",
];

const MainProcess = ({ wide }) => {
  const [activeTab, setActiveTab] = useState(navigation[0]);
  const [search, setSearch] = useState("");
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);
  const [processDataApi, setProcessData] = useState([])
  const [intelligenceAndCognitiveData, setintelligenceAndCognitive] = useState([])
  const [personalityAndBehaviourData, setpersonalityAndBehaviourData] = useState([])
  const [skillsAndDexterityData, setSkillsandDexterity] = useState([])


  const handleSubmit = (e) => {
    alert();
  };

  useEffect(() => {
    const options = {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('kokoro-acess-token')}`,
      },

      url: `${process.env.REACT_APP_SERVER_URL}/evaluaciones/listar_evaluaciones`
    };
    axios(options).then(function (response) {
      // handle success
      console.log("The body data is", response.data.body)
      setProcessData(response.data.body)

    }).catch((err) => {
      console.error("Customer API error: ", err);
    });
    intelligenceAndCognitive()
    personalityAndBehaviour()
    skillsAndDexterity()

  }, [])

  function intelligenceAndCognitive() {

    const options = {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('kokoro-acess-token')}`,
      },

      url: `${process.env.REACT_APP_SERVER_URL}/evaluaciones/listar_evaluaciones_x_categoria/4`
    };
    axios(options).then(function (response) {
      // handle success
      console.log("The cognitive data is", response.data.body)
      setintelligenceAndCognitive(response.data.body)


    }).catch((err) => {
      console.error("Customer API error: ", err);
    });
  }

  function personalityAndBehaviour() {

    const options = {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('kokoro-acess-token')}`,
      },

      url: `${process.env.REACT_APP_SERVER_URL}/evaluaciones/listar_evaluaciones_x_categoria/9`
    };
    axios(options).then(function (response) {
      // handle success
      console.log("The personality data is", response.data.body)
      setpersonalityAndBehaviourData(response.data.body)


    }).catch((err) => {
      console.error("Customer API error: ", err);
    });
  }

  function skillsAndDexterity() {
    const options = {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('kokoro-acess-token')}`,
      },

      url: `${process.env.REACT_APP_SERVER_URL}/evaluaciones/listar_evaluaciones_x_categoria/10`
    };
    axios(options).then(function (response) {
      // handle success
      console.log("The dexterity data is", response.data.body)
      setSkillsandDexterity(response.data.body)


    }).catch((err) => {
      console.error("Customer API error: ", err);
    });
  }
  return (
    <React.Fragment>
      <div className={styles.inner}>
        <div
          className={cn(styles.container, {
            [styles.wide]: wide,
          })}
        >
          <Card
            className={cn(styles.card, "mb-32")}
            title="Biblioteca de Pruebas"
            classTitle={cn("title-purple", styles.title)}
            classCardHead={styles.head}
            head={
              <>
                <Form
                  className={styles.form}
                  value={search}
                  setValue={setSearch}
                  onSubmit={() => handleSubmit()}
                  placeholder="Busca una Prueba"
                  type="text"
                  name="search"
                  icon="search"
                />
              </>
            }
          ></Card>
          <ul className={styles.listitems}>
            {navigation.map((x, index) => (
              <button
                className={cn(styles.link, styles.kklinks, {
                  [styles.active]: x === activeTab,
                })}
                onClick={() => setActiveTab(x)}
                key={index}
              >
                {x}
              </button>
            ))}
          </ul>
          <div className={styles.post_p}>
            {activeTab === navigation[0] && (
              <>
                {processDataApi.map((x, index) => (
                  <Card className={cn(styles.post_col, "mb-32")} key={index}>
                    <div className={styles.header}>
                      <h4>{x.NOMBRE}</h4>
                    </div>
                    <div className={styles.text}>{x.DESCRIPCION_CORTA}</div>
                    <div className={styles.footers}>
                      <span>
                        <Icon name="clock" size="20" />
                        {x.TIEMPO}
                      </span>
                      <button
                        className={cn(x.button_color, styles.btn)}
                        onClick={() => setVisibleModalProduct(true)}
                      >
                        {x.button}
                      </button>
                    </div>
                  </Card>
                ))}
              </>
            )}
            {activeTab === navigation[1] && (
              <>
                {intelligenceAndCognitiveData.map((x, index) => (
                  <Card className={cn(styles.post_col, "mb-32")} key={index}>
                    <div className={styles.header}>
                      <h4>{x.NOMBRE}</h4>
                    </div>
                    <div className={styles.text}>{x.OBJETIVO}</div>
                    <div className={styles.footers}>
                      <span>
                        <Icon name="clock" size="20" />
                        {x.TIEMPO}
                      </span>
                      <button
                        className={cn(x.button_color, styles.btn)}
                        onClick={() => setVisibleModalProduct(true)}
                      >
                        {x.button}
                      </button>
                    </div>
                  </Card>
                ))}
              </>
            )}
            {activeTab === navigation[2] && (
              <>
                {personalityAndBehaviourData.map((x, index) => (
                  <Card className={cn(styles.post_col, "mb-32")} key={index}>
                    <div className={styles.header}>
                      <h4>{x.NOMBRE}</h4>
                    </div>
                    <div className={styles.text}>{x.OBJETIVO}</div>
                    <div className={styles.footers}>
                      <span>
                        <Icon name="clock" size="20" />
                        {x.TIEMPO}
                      </span>
                      <button
                        className={cn(x.button_color, styles.btn)}
                        onClick={() => setVisibleModalProduct(true)}
                      >
                        {x.button}
                      </button>
                    </div>
                  </Card>
                ))}
              </>
            )}
            {activeTab === navigation[3] && (
              <>
                {skillsAndDexterityData.map((x, index) => (
                  <Card className={cn(styles.post_col, "mb-32")} key={index}>
                    <div className={styles.header}>
                      <h4>{x.NOMBRE}</h4>
                    </div>
                    <div className={styles.text}>{x.OBJETIVO}</div>
                    <div className={styles.footers}>
                      <span>
                        <Icon name="clock" size="20" />
                        {x.TIEMPO}
                      </span>
                      <button
                        className={cn(x.button_color, styles.btn)}
                        onClick={() => setVisibleModalProduct(true)}
                      >
                        {x.button}
                      </button>
                    </div>
                  </Card>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <ModalTest
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
      />
    </React.Fragment>
  );
};

export default MainProcess;
