import React, { useEffect } from "react";
import "./style.scss"
import Png1 from "../../image/png1.png"
import Png2 from "../../image/png2.png"
import Png3 from "../../image/png3.png"
import Png4 from "../../image/png4.png"
import PicPayPng1 from "../../image/picpay-png1.png"
import PicPayPng2 from "../../image/picpay-png2.png"
import PicPayPng3 from "../../image/picpay-png3.png"


const Body = () => {

    useEffect(() => {
        // window.scrollTo(0, 0)
        showAbout()
    }, [])

    const showAbout = () => {
        const about = window.document.getElementById("about")
        const descApp = window.document.getElementById("desc-app")
        const descSecondApp = window.document.getElementById("desc-second-app")
        window.addEventListener("scroll", () => {
            console.log(window.scrollY)
            window.scrollY <= 0 ? about.style.transform = "translateX(-100%)" : about.style.transform = "translateX(5%)"
            window.scrollY <= 1000 ? descApp.style.transform = "translateX(-100%)" : descApp.style.transform = "translateX(0%)"
            window.scrollY <= 2500 ? descSecondApp.style.transform = "translateX(-100%)" : descSecondApp.style.transform = "translateX(0%)"
        })
    }


    return (
        <div className="main-body">
            <div className="content-desc">
                <div className="about" id="about">SOBRE MIM</div>
                <div className="desc">Desenvolvedor Front-end completamente apaixonado pela programação. Com profundo interesse em novas tecnologias.</div>
            </div>

            <div className="app-content">
                <div id="desc-app" className="desc-app">
                    <div>
                        <div className="linguage">React Native</div>
                        <div className="project">Nubank</div>
                        <div className="desc-projeto">Nubank é uma empresa startup brasileira pioneira no segmento de serviços financeiros, atuando como operadora de cartões de crédito e fintech com operações no Brasil, sediada em São Paulo e fundada em 6 de maio de 2013 por David Vélez, Cristina Junqueira e Edward Wible. </div>
                    </div>
                    <div className="system">Android APP</div>
                </div>

                <div className="image-app">
                    <div>
                        <img className="bottonMarginPhoto" src={Png1} alt="" />
                        <img src={Png2} alt="" />
                    </div>
                    <div>
                        <img className="bottonMarginPhoto" src={Png3} alt="" />
                        <img src={Png4} alt="" />
                    </div>
                </div>
            </div>

            <div className="app-content">
                <div id="desc-second-app" className="desc-app">
                    <div>
                        <div className="linguage">React Native</div>
                        <div className="project">PicPay</div>
                        <div className="desc-projeto">O PicPay é um aplicativo fintech brasileiro, criado por pessoas do estado do Espírito Santo, disponível para download em celular dos sistemas operacionais Android e iOS, que funciona como uma carteira digital.</div>
                    </div>
                    <div className="system">Android APP</div>
                </div>

                <div className="image-app">
                    <div>
                        <img className="bottonMarginPhoto" src={PicPayPng1} alt="" />
                        <img src={PicPayPng2} alt="" />
                    </div>
                    <div>
                        <img className="bottonMarginPhoto" src={PicPayPng3} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Body;