import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Context } from "../../context/provider";

import "./style.scss";

const Header = () => {
  useEffect(() => {
    showContent();
    show();
  }, []);

  const { mode, setMode } = useContext(Context);
  const [position, setPosition] = useState(1200);

  const DarkMode = () => {
    localStorage.setItem("mode", "Dark");
    setMode(false);
  };
  const LightMode = () => {
    localStorage.setItem("mode", "Light");
    setMode(true);
  };

  const show = () => {
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
      const windowScroll = parseInt(window.scrollY);
      windowScroll != 0
        ? (header.style.background = "#00000093")
        : (header.style.background = "#00000028");
    });
  };

  const showContent = () => {
    let name = window.document.getElementById("name");
    let desc = window.document.getElementById("desc");
    name.style.transform = "translateY(-130px)";
    setTimeout(() => {
      desc.style.transform = "translateY(-130px)";
    }, 900);
  };

  const showSide = () => {
    setPosition(position == 1200 ? 0 : 1200);
  };

  return (
    <div
      className="main-header"
      style={{ backgroundColor: mode ? "" : "#454645" }}
    >
      <div className="header-list" id="header">
        <div className="name-person">
          <strong style={{ color: "#d9115b", fontWeight: 400 }}>W</strong>ARLLEI{" "}
          <strong style={{ fontWeight: 400, color: "#d9115b", marginLeft: 10 }}>
            M
          </strong>
          ARTINS
        </div>

        <ul>
          <li>
            <a href="https://github.com/warlleism">GITHUB</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/warllei-martins-823510153/">
              LINKEDIN
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/warlleimartins/">INSTAGRAM</a>
          </li>
          <li>
            <a href="mailto:warlleimartinsdev@outlook.com">CONTATO</a>
          </li>
        </ul>
      </div>

      <div className="mobile-bar" onClick={() => showSide()}>
        <div
          style={{
            outline: "2px solid #ffff",
            padding: 10,
            borderRadius: 100,
          }}
        >
          <div
            style={{
              background: "#ffff",
              width: 20,
              height: 2,
              marginBottom: 5,
            }}
          ></div>
          <div
            style={{
              background: "#ffff",
              width: 20,
              height: 2,
              marginBottom: 5,
            }}
          ></div>
          <div
            style={{
              background: "#ffff",
              width: 20,
              height: 2,
            }}
          ></div>
        </div>
      </div>

      <div
        className="side-bar-mobile"
        style={{ transform: `translateX(${position}px)` }}
      >
        <ul>
          <li>
            <a href="https://github.com/warlleism">GITHUB</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/warllei-martins-823510153/">
              LINKEDIN
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/warlleimartins/">INSTAGRAM</a>
          </li>
          <li>
            <a href="mailto:warlleimartinsdev@outlook.com">CONTATO</a>
          </li>
        </ul>
      </div>

      <div
        className="header-content"
        style={{ backgroundColor: mode ? "" : "#454645" }}
      >
        <div className="name-content">
          <div
            className="text"
            id="name"
            style={{ color: mode ? "" : "#ffff" }}
          >
            Warllei Martins
          </div>
          <div
            className="board"
            style={{ backgroundColor: mode ? "" : "#454645" }}
          ></div>
        </div>
        <div
          className="cargo-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div
            className="text"
            id="desc"
            style={{ color: mode ? "" : "#ffffff2e" }}
          >
            Front-end Developer{" "}
          </div>
          <div
            className="board"
            style={{ backgroundColor: mode ? "" : "#454645" }}
          ></div>
        </div>
      </div>

      <div className="darkMode">
        {mode ? (
          <span
            className="material-symbols-outlined modeIcon"
            onClick={() => DarkMode()}
            style={{ color: mode ? "" : "black" }}
          >
            light_mode
          </span>
        ) : (
          <span
            className="material-symbols-outlined modeIcon"
            onClick={() => LightMode()}
            style={{ color: mode ? "" : "#ffff" }}
          >
            dark_mode
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
