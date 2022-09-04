import React, { useContext, useEffect } from "react";
import { Context } from "../../context/provider";
import Footer from "../footer";

import "./style.scss"

const Body = () => {

    const { mode } = useContext(Context);

    useEffect(() => {
        showAbout()
    }, [])

    const showAbout = () => {
        const about = window.document.getElementById("about")
        const descApp = window.document.getElementById("desc-app")
        const descSecondApp = window.document.getElementById("desc-second-app")
        const descThirdApp = window.document.getElementById("desc-third-app")

        window.addEventListener("scroll", () => {
            console.log(parseInt(window.scrollY))
            parseInt(window.scrollY) <= 0 ? about.style.transform = "translateX(-100%)" : about.style.transform = "translateX(5%)"
            parseInt(window.scrollY) <= 1000 ? descApp.style.transform = "translateX(-100%)" : descApp.style.transform = "translateX(0%)"
            parseInt(window.scrollY) <= 2500 ? descSecondApp.style.transform = "translateX(-100%)" : descSecondApp.style.transform = "translateX(0%)"
            parseInt(window.scrollY) <= 4513 ? descThirdApp.style.transform = "translateX(-100%)" : descThirdApp.style.transform = "translateX(0%)"
        })
    }


    return (
        <>
            <div className="main-body" style={{ backgroundColor: mode ? "" : "#454645" }}>
                <div className="content-desc" style={{ backgroundColor: mode ? "" : "#454645" }}>
                    <div className="about" id="about" style={{ color: mode ? "" : "#ffffff2e" }}>SOBRE MIM</div>
                    <div className="desc" style={{ color: mode ? "" : "#ffff" }}>Desenvolvedor Front-end completamente apaixonado pela programação. Com profundo interesse em novas tecnologias.</div>
                </div>

                <div className="app-content" style={{ backgroundColor: mode ? "" : "#454645" }}>
                    <div id="desc-app" className="desc-app">
                        <div>
                            <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>React Native</div>
                            <div className="project" style={{ color: mode ? "" : "#ffff" }}>Clone Nubank</div>
                            <div className="desc-projeto" style={{ color: mode ? "" : "#ffff" }}>Nubank é uma empresa startup brasileira pioneira no segmento de serviços financeiros, atuando como operadora de cartões de crédito e fintech com operações no Brasil, sediada em São Paulo e fundada em 6 de maio de 2013 por David Vélez, Cristina Junqueira e Edward Wible. </div>
                        </div>
                        <div className="system" style={{ color: mode ? "" : "#ffff" }}>Android APP</div>
                    </div>

                    <div className="image-app">
                        <div>
                            <img className="bottonMarginPhoto" src={require("../../image/png2.png")} alt="" />
                            <img src={require("../../image/png1.png")} alt="" />
                        </div>
                        <div>
                            <img className="bottonMarginPhoto" src={require("../../image/png3.png")} alt="" />
                            <img src={require("../../image/png4.png")} alt="" />
                        </div>
                    </div>
                </div>


                <div className="app-content" style={{ backgroundColor: mode ? "" : "#454645" }}>

                    <div id="desc-second-app" className="desc-app">
                        <div>
                            <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>React Native</div>
                            <div className="project" style={{ color: mode ? "" : "#ffff" }}>Clone PicPay</div>
                            <div className="desc-projeto" style={{ color: mode ? "" : "#ffff" }}>O PicPay é um aplicativo fintech brasileiro, criado por pessoas do estado do Espírito Santo, disponível para download em celular dos sistemas operacionais Android e iOS, que funciona como uma carteira digital.</div>
                        </div>
                        <div className="system" style={{ color: mode ? "" : "#ffff" }}>Android APP</div>
                    </div>

                    <div className="image-app">
                        <div>
                            <img className="bottonMarginPhoto" src={require("../../image/picpay-png1.png")} alt="" />
                            <img src={require("../../image/picpay-png2.png")} alt="" />
                        </div>
                        <div>
                            <img className="thirdPhoto" src={require("../../image/picpay-png3.png")} alt="" />
                        </div>
                    </div>

                </div>


                <div className="app-content" style={{ backgroundColor: mode ? "" : "#454645" }}>

                    <div id="desc-third-app" className="desc-app">
                        <div>
                            <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>React Native</div>
                            <div className="project" style={{ color: mode ? "" : "#ffff" }}>Clone Spotify</div>
                            <div className="desc-projeto" style={{ color: mode ? "" : "#ffff" }}>Spotify é um serviço de streaming de música, podcast e vídeo que foi lançado oficialmente em 7 de outubro de 2008. É o serviço de streaming de música mais popular e usado do mundo. Ele é desenvolvido pela startup Spotify AB em Estocolmo, Suécia.</div>
                        </div>
                        <div className="system" style={{ color: mode ? "" : "#ffff" }}>Android APP</div>
                    </div>

                    <div className="image-app">
                        <div>
                            <img className="bottonMarginPhoto" src={require("../../image/spotify1.png")} alt="" />
                            <img src={require("../../image/spotify2.png")} alt="" />
                        </div>
                        <div>
                            <img className="bottonMarginPhoto" src={require("../../image/spotify3.png")} alt="" />
                            <img className="bottonMarginPhoto" src={require("../../image/spotify4.png")} alt="" />
                        </div>
                    </div>
                </div>
                    <Footer />
            </div>
        </>
    )

}

export default Body;