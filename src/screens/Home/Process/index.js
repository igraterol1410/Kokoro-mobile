import React, { useState, useEffect } from "react";
import axios from 'axios'
import styles from "./Process.module.sass";
import cn from "classnames";
import Card from "../../../components/Card";
import Form from "../../../components/Form";
import Dropdown from "../../../components/Dropdown";
import Market from "./Market";

// data
const market = [
  {
    name: "Proceso analista de sistemas",
    candidates: 3,
    p: [
      {
        step: 1,
        badge: "badge-success",
      },
      {
        step: 2,
        badge: "badge-gray big",
      },
    ],
    time: "Hace 1 min",
  },
  {
    name: "Proceso 2021 - Contador",
    candidates: 3,
    p: [
      {
        step: 0,
        badge: "badge-gray",
      },
    ],
    time: "Hace 1 min",
  },
  {
    name: "Machine learning Noviembre",
    candidates: 6,
    p: [
      {
        step: 1,
        badge: "badge-success big",
      },
      {
        step: 2,
        badge: "badge-gray big",
      },
    ],
    time: "Hace 1 min",
  },
];

const Products = () => {
  const [marketData, setMarketData] = useState([])

  useEffect(() => {
    const options = {
      method: "post",
      headers: {
        "Content-type": "application/json",

        "Authorization": `Bearer ${sessionStorage.getItem('kokoro-acess-token')}`,
      },

      data: {
        "buscador": ""
      },
      url: `${process.env.REACT_APP_SERVER_URL}/proceso/listar_proceso/`
    };
    axios(options).then(function (response) {
      // handle success
      setMarketData(response.data.body)

    }).catch((err) => {
      console.error("Customer API error: ", err);
    });
  }, [])

  const navigation = ["Activos (3)", "Archivados (0)"];

  const [activeTab, setActiveTab] = useState(navigation[0]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  };
  function setSearchField(e) {
    console.log("The changed value", e)
    setSearch(e)
    const options = {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('kokoro-acess-token')}`,
      },

      data: {
        "buscador": e
      },
      url: `${process.env.REACT_APP_SERVER_URL}/proceso/listar_proceso/`
    };
    axios(options).then(function (response) {
      console.log("Iam called in search")
      // handle success
      setMarketData(response.data.body)

    }).catch((err) => {
      console.error("Customer API error: ", err);
    });

  }
  return (
    <Card
      className={styles.card}
      title="Mis procesos"
      classTitle={cn("title-purple", styles.title)}
      classCardHead={styles.head}
      head={
        <>
          <Form
            className={styles.form}
            value={search}
            setValue={setSearchField}
            onSubmit={() => handleSubmit()}
            placeholder="Busca en tu procesos"
            type="text"
            name="search"
            icon="search"
          />
          <div className={styles.control}>
            <button className={cn("button-stroke button-small", styles.button)}>
              Deleted
            </button>
            <button className={cn("button-stroke button-small", styles.button)}>
              Set status
            </button>
            <div className={styles.counter}>3 selected</div>
          </div>
          <div className={cn(styles.nav, "tablet-hide")}>
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
          <div className={cn(styles.dropdown, "tablet-show")}>
            <Dropdown
              classDropdownHead={styles.dropdownHead}
              value={activeTab}
              setValue={setActiveTab}
              options={navigation}
              small
            />
          </div>
        </>
      }
    >
      <div className={styles.products}>
        <div className={styles.wrapper}>
          {console.log("Market in the mid", marketData)}
          {activeTab === navigation[0] && <Market items={marketData} />}
          {activeTab === navigation[1] && <Market items={marketData} />}
        </div>
      </div>
    </Card>
  );
};

export default Products;
