import React, { useContext, useEffect } from "react";
import { Context } from "../../context/provider";

import "./style.scss"

const Header = () => {

    const { mode, setMode } = useContext(Context);

    useEffect(() => {
        showContent()
    }, [])


    const DarkMode = () => {
        localStorage.setItem("mode", "Dark")
        setMode(false)
    }
    const LightMode = () => {
        localStorage.setItem("mode", "Light")
        setMode(true)
    }

    const showContent = () => {
        let name = window.document.getElementById("name")
        let desc = window.document.getElementById("desc")
        window.addEventListener("load", () => {
            name.style.transform = "translateY(-130px)";
            setTimeout(() => {
                desc.style.transform = "translateY(-130px)";
            }, 900)
        })
    }


    return (
        <div className="main-header" style={{ backgroundColor: mode ? "" : "#454645" }}>
            <div className="header-content" style={{ backgroundColor: mode ? "" : "#454645" }}>
                <div className="name-content">
                    <div className="text" id="name" style={{ color: mode ? "" : "#ffff" }}>Warllei Martins</div>
                    <div className="board" style={{ backgroundColor: mode ? "" : "#454645" }}></div>
                </div>
                <div className="cargo-content" >
                    <div className="text" id="desc" style={{ color: mode ? "" : "#ffff" }}>Front-end Developer </div>
                    <div className="board" style={{ backgroundColor: mode ? "" : "#454645" }}></div>
                </div>
            </div>
            <div className="darkMode">
                {mode ? <span className="material-symbols-outlined modeIcon" onClick={() => DarkMode()} style={{ color: mode ? "" : "black" }} >light_mode</span> : <span className="material-symbols-outlined modeIcon" onClick={() => LightMode()} style={{ color: mode ? "" : "#ffff" }}>dark_mode</span>}
            </div>
        </div>
    )

}

export default Header;