import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./test.module.sass";
import Card from "../../components/Card";
import Icon from "../../components/Icon";
import Market from "./Market";
import axios from "axios"

import Dropdown from "../../components/Dropdown";

const intervals = ["Área", "Nuevo", "Este año"];
const intervals2 = ["Jerarquía", "Nuevo", "Este año"];

const Profile = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    alert();
  };

  const [sorting, setSorting] = useState(intervals[0]);
  const [sorting2, setSorting2] = useState(intervals2[0]);
  const [profileData, setProfileData] = useState([]);
  const [profileSearch, setprofileSearch] = useState("");

  useEffect(() => {
    getProfilesData(" ")

  }, [])

  function getProfilesData(searchValue) {
    const options = {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('kokoro-acess-token')}`,
      },
      data: {
        "buscador": searchValue,
        "ID_AREA": "",
        "ID_JERARQUIA": ""
      },
      url: `${process.env.REACT_APP_SERVER_URL}/perfil/listar_perfil`
    };


    axios(options).then(function (response) {
      // handle success
      console.log("The Profileee data is", response.data.body)
      setProfileData(response.data.body)
      console.log(profileData)


    }).catch((err) => {
      console.error("Customer API error: ", err);
    });
  }

  const getprofileSearch = (e) => {
    console.log(e.target.value)
    var i = e.target.value
    if (e.target.value === '' || e.target.value === " " || e.target.value === undefined) {
      console.log("in the empty if")
      var setStateValue = " "
      setprofileSearch(i)
    }
    else {


      console.log("the non empt if")
      setprofileSearch(e.target.value)
    }
    getProfilesData(i)
  }


  return (

    <React.Fragment>
      <div className={styles.inner}>
        <div className={styles.title_wrapper}>
          <div className="flex-1">
            <div className={cn("h3", styles.title)}>Mis perfiles</div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="flex-0">
            <img src="/images/svg/image16.svg" alt="" />
          </div>
        </div>

        <Card className="mb-32">
          <div className={styles.custom_header}>
            <div className={styles.mini_title}>Tus postulantes</div>
            <div
              className={cn(
                styles.search_box,
                "plain-search mb-0",
                styles.mx_267
              )}
            >
              <input type="text" placeholder="Busca perfiles..." value={profileSearch} onChange={getprofileSearch} />
              <Icon name="search" size="24" />
            </div>
            <div className={styles.mx_150}>
              <Dropdown
                className={styles.dropdown}
                classDropdownHead={styles.dropdownHead}
                value={sorting}
                setValue={setSorting}
                options={intervals}
                small
              />
            </div>
            <div className={styles.mx_150}>
              <Dropdown
                className={styles.dropdown}
                classDropdownHead={styles.dropdownHead}
                value={sorting2}
                setValue={setSorting2}
                options={intervals2}
                small
              />
            </div>
          </div>

          <div className="mt-48">
            <Market items={profileData} />
          </div>
          <div className={styles.foot}>
            <button className={styles.arrow}>
              <Icon name="arrow-left" size="20" />
            </button>
            <button className={styles.arrow}>
              <Icon name="arrow-right" size="20" />
            </button>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Profile;
