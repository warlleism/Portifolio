import React, { useContext, useEffect } from "react";
import { Context } from "../../context/provider";

import "./style.scss"

const Footer = () => {

    useEffect(() => {
        showAbout()
    }, [])

    const { mode } = useContext(Context);

    const showAbout = () => {
        const contact = window.document.getElementById("contact")
        window.addEventListener("scroll", () => {
            return window.scrollY < 17598 ? contact.style.transform = "translateX(-100%)" : contact.style.transform = "translateX(-20%)"
        })
    }

    return (
        <div className="container-images" style={{ backgroundColor: mode ? "" : "#454645" }}>
            <div id="contact" className="text-contacts" style={{ color: mode ? "" : "#ffffff41", pointerEvents: "none" }}>Contatos</div>
            <div className="contacts">
                <a href="https://www.linkedin.com/in/warllei-martins-823510153/" target="blank"><img src={require("../../image/icons/linkedin.png")} alt="" /></a>
                <a href="https://github.com/warlleism" target="blank"><img src={require("../../image/icons/github.png")} alt="" /></a>
                <a href="https://www.instagram.com/warlleimartins/" target="blank"><img src={require("../../image/icons/instagram.png")} alt="" /></a>
                <a href="https://www.facebook.com/warllei.martins" target="blank"><img src={require("../../image/icons/facebook.png")} alt="" /></a>
                <a href="mailto:warlleimartinsdev@outlook.com"><img src={require("../../image/icons/email.png")} alt="" /></a>
            </div>
        </div>
    )

}

export default Footer;