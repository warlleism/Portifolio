import React, { useContext, useEffect } from "react";
import { Context } from "../../context/provider";

import "./style.scss"

const Body = () => {

    useEffect(() => {
        showAbout()
    }, [])

    const { mode } = useContext(Context);

    const showAbout = () => {
        const about = window.document.getElementById("about")
        const descApp = window.document.getElementById("desc-app")
        const descSecondApp = window.document.getElementById("desc-second-app")
        const descThirdApp = window.document.getElementById("desc-third-app")
        const descFourthApp = window.document.getElementById("desc-fourth-app")

        window.addEventListener("scroll", () => {
            const windowScroll = parseInt(window.scrollY)
            windowScroll <= 0 ? about.style.transform = "translateX(-100%)" : about.style.transform = "translateX(5%)"
            windowScroll <= 1000 ? descApp.style.transform = "translateX(-100%)" : descApp.style.transform = "translateX(0%)"
            windowScroll <= 2500 ? descSecondApp.style.transform = "translateX(-100%)" : descSecondApp.style.transform = "translateX(0%)"
            windowScroll <= 4513 ? descThirdApp.style.transform = "translateX(-100%)" : descThirdApp.style.transform = "translateX(0%)"
            windowScroll <= 6699 ? descFourthApp.style.transform = "translateX(-100%)" : descFourthApp.style.transform = "translateX(0%)"
        })
    }

    return (
        <>
            <div className="main-body" style={{ backgroundColor: mode ? "" : "#454645" }}>
                <div className="content-desc" style={{ backgroundColor: mode ? "" : "#454645" }}>
                    <div className="about" id="about" style={{ color: mode ? "" : "#ffffff2e" }}>SOBRE MIM</div>
                    <div className="desc" style={{ color: mode ? "" : "#ffff" }}>Olá, <strong style={{ color: "#e525aa", fontSize: 24 }}>Seja bem vindo</strong>! Meu nome é Warllei Martins, espero que esteja tudo bem com você. Tenho 26 anos e sou estudante de Análise e desenvolvimento de sistemas pela "Universidade de Vila Velha". Sou um desenvolvedor front-end em busca de me tornar full stack. Com profundo interesse em conhecer, aprender e desenvolver venho me dedicado a este apaixonante mundo da programação.</div>
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
                <div className="app-content" style={{ backgroundColor: mode ? "" : "#454645" }}>

                    <div id="desc-fourth-app" className="desc-app">
                        <div>
                            <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>ReactJs</div>
                            <div className="project" style={{ color: mode ? "" : "#ffff" }}>Clone Home Page Netflix</div>
                            <div className="desc-projeto" style={{ color: mode ? "" : "#ffff" }}>Netflix é uma provedora global de filmes e séries de televisão via streaming sediada em Los Gatos, Califórnia, e que atualmente possui mais de 220 milhões de assinantes. Fundada em 1997 nos Estados Unidos, a empresa surgiu como um serviço de entrega de DVD pelo correio.</div>
                        </div>
                        <div className="system" style={{ color: mode ? "" : "#ffff" }}>App Web</div>
                    </div>

                    <div className="image-app">
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img className="web-app" src={require("../../image/netflix-home-clone-1.png")} alt="" />
                            <img className="web-app" src={require("../../image/netflix-home-clone-2.png")} alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )

}

export default Body;