import React, { useEffect } from "react";

import "./style.scss"


const Header = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        showContent()
    }, [])

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
        <div className="main-header">
            <div className="header-content">
                <div className="name-content">
                    <div className="text" id="name">Warllei Martins</div>
                    <div className="board" ></div>
                </div>
                <div className="cargo-content">
                    <div className="text" id="desc" >Front-end Developer </div>
                    <div className="board" ></div>
                </div>
            </div>
        </div>
    )

}

export default Header;