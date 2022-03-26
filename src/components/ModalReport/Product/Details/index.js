import React, { useState } from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import styles_helper from "../../../../styles/helpers.sass";

// import LogoFox from "../../../../../public/images/svg/fox_reporte.svg";

// import Icon from "../../../Icon";
// import Tooltips from "../../../Tooltip";
// import TextInput from "../../../TextInput";
// import Dropdown from "../../../Dropdown";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useDarkMode from "use-dark-mode";
const data = [
  {
    name: "Concepto 1",
    views: 1823,
  },
  {
    name: "Concepto 2",
    views: 1674,
  },
  {
    name: "Concepto 3",
    views: 1498,
  },
  {
    name: "Concepto 4",
    views: 1123,
  },
  {
    name: "Concepto 5",
    views: 758,
  },
  {
    name: "Concepto 6",
    views: 432,
  },
];
const desc = [
  {
    title: "Concepto 1",
    badge: "Muy Alto",
    count: "116",
  },
  {
    title: "Concepto 1",
    badge: "Alto",
    count: "116",
  },
  {
    title: "Concepto 1",
    badge: "Medio",
    count: "116",
  },
  {
    title: "Concepto 1",
    badge: "Bajo",
    count: "116",
  },
];

const Details = ({ className, setValue, activeIndex, setActiveIndex }) => {
  const darkMode = useDarkMode(false);

  console.log(styles_helper);

  return (
    <div className={cn(styles.details, className)}>
      <div className={styles.faltu_header}>
        <div className="mb-24">
          <h4>Reporte de Prueba X</h4>
        </div>
        <ul className={styles.ulli}>
          <li className=" inline ">
            <span>Categoría</span> Personalidad y Comportamiento
          </li>
          <li className=" inline ">
            <span> Duración </span> 10 minutos
          </li>
          <li className=" inline ">
            <span> Idioma </span> Español
          </li>
        </ul>
        <div className={styles.falto_image}>
          <img src="/images/svg/fl.svg" alt="" />
        </div>
      </div>

      <div className="flex">
        <div className="flex-8">
          <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="flex-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width="100%"
              height={300}
              data={data}
              layout="vertical"
              margin={{
                top: 0,
                right: 0,
                left: 5,
                bottom: 0,
              }}
              barSize={24}
              barGap={8}
            >
              <CartesianGrid
                strokeDasharray="none"
                stroke={darkMode.value ? "#272B30" : "#EFEFEF"}
                horizontal={false}
              />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fontWeight: "500", fill: "#6F767E" }}
                padding={{ left: 10 }}
              />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fontWeight: "500", fill: "#6F767E" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#272B30",
                  borderColor: "rgba(255, 255, 255, 0.12)",
                  borderRadius: 8,
                  boxShadow:
                    "0px 4px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1), inset 0px 0px 1px #000000",
                }}
                labelStyle={{ fontSize: 12, fontWeight: "500", color: "#fff" }}
                itemStyle={{
                  padding: 0,
                  textTransform: "capitalize",
                  fontSize: 12,
                  fontWeight: "600",
                  color: "#fff",
                }}
                cursor={{ fill: "#f3f2f3" }}
              />
              <Bar dataKey="views" fill="#B5E4CA" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.tab_content}>
        <div className={styles.hudalist}>
          <span>Concepto</span>
          <span> Resultado</span>
          <span>Valor</span>
        </div>
        {desc.map((item, index) => (
          <div className={styles.single_cd}>
            <div className={styles.single_cd_header}>
              <div className={styles.tp}>
                <span>{item.title}</span>
              </div>

              <div>
                {item.badge === "Muy Alto" || item.badge === "Alto" ? (
                  <div
                    className={cn(styles.badge)}
                    style={{ background: "#83BF6E", color: "white" }}
                  >
                    {item.badge}
                  </div>
                ) : null}
                {item.badge === "Medio" ? (
                  <div
                    className={cn(styles.badge)}
                    style={{ background: "#FFD88D", color: "white" }}
                  >
                    {item.badge}
                  </div>
                ) : null}
                {item.badge === "Bajo" || item.badge === "Muy Bajo" ? (
                  <div
                    className={cn(styles.badge)}
                    style={{ background: "#FF6A55", color: "white" }}
                  >
                    {item.badge}
                  </div>
                ) : null}
              </div>
              <div className={styles.count}>{item.count}</div>
            </div>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        ))}
      </div>

      <div className={styles.foxReport}>
        <img src="/images/svg/fox_reporte.svg" alt="logo_fox" />
      </div>
    </div>
  );
};

export default Details;
