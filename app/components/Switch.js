import React, { useState, useEffect } from "react";
import "../sass/Switch.scss";
import moon from "../images/moon.png";
import sun from "../images/sun.svg";
export default function Switch() {
  const [theme, setTheme] = useState(false);
  const [icon, setIcon] = useState("");
  useEffect(() => {
    handleTheme();
  }, [theme]);
  function setProperty(name, value) {
    document.documentElement.style.setProperty(name, value);
  }
  function handleTheme() {
    const darkColor = "#191919";
    const white = "#ececec";
    const lightBlue = "#1e5f74";
    const gray = "rgba(199, 199, 199, 1)";
    const colorBodyDark = "#202020";
    if (theme) {
      setProperty("--bg-principal", darkColor);
      setProperty("--white", darkColor);
      setProperty("--black", white);
      setProperty("--shadow", darkColor);
      setProperty("--border", white);
      setProperty("--bg-btn-edit", darkColor);
      setProperty("--bg-btn-delete", darkColor);
      setProperty("--body", colorBodyDark);
      setProperty("--bg-form", darkColor);
      setIcon(sun);
    } else {
      setProperty("--bg-principal", lightBlue);
      setProperty("--white", white);
      setProperty("--black", darkColor);
      setProperty("--shadow", gray);
      setProperty("--border", lightBlue);
      setProperty("--bg-btn-edit", lightBlue);
      setProperty("--bg-btn-delete", lightBlue);
      setProperty("--body", white);
      setProperty("--bg-form", white);

      setIcon(moon);
    }
  }
  function handleChangeTheme() {
    setTheme(!theme);
  }
  return (
    <div className="switch">
      <button className="button" onClick={handleChangeTheme}>
        <img src={icon} alt="" />
      </button>
    </div>
  );
}
