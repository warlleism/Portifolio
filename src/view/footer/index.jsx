import React, { useEffect } from "react";
import "./style.scss"
import Facebok from "../../image/icons/facebook.png"
import Github from "../../image/icons/github.png"
import Instagram from "../../image/icons/instagram.png"
import Linkedin from "../../image/icons/linkedin.png"
import Email from "../../image/icons/email.png"


const Footer = () => {

    useEffect(() => {
        showAbout()
    }, [])

    const showAbout = () => {
        const contact = window.document.getElementById("contact")
        window.addEventListener("scroll", () => {
            window.scrollY < 5397 ? contact.style.transform = "translateX(-100%)" : contact.style.transform = "translateX(-30%)"
        })
    }

    return (
        <div className="container-images">
            <div id="contact" className="text-contacts">Contatos</div>
            <div className="contacts">
                <a href="https://www.linkedin.com/in/warllei-martins-823510153/" target="blank"><img src={Linkedin} alt="" /></a>
                <a href="https://github.com/warlleism" target="blank"><img src={Github} alt="" /></a>
                <a href="https://www.instagram.com/warlleimartins/" target="blank"><img src={Instagram} alt="" /></a>
                <a href="https://www.facebook.com/warllei.martins" target="blank"><img src={Facebok} alt="" /></a>
                <a href="mailto:warlleimartinsdev@outlook.com"><img src={Email} alt="" /></a>
            </div>
        </div>
    )

}

export default Footer;