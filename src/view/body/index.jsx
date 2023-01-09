import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Context } from "../../context/provider";

import "./style.scss";

const Body = () => {


  const [img, setImg] = useState('')
  const [imgwEB, setImgWeb] = useState('')

  const { mode } = useContext(Context);

  const ViewContentMobile = (require) => {

    setImg(require)

    setTimeout(() => {
      const modal = document.querySelector("#modal-img")
      const img = document.querySelector("#img")
      modal.style.width = '100%'
      modal.style.height = '100vh'
      img.style.opacity = 1
    }, 100)

  }

  const ViewContentWeb = (require) => {

    setImgWeb(require)

    setTimeout(() => {
      const modal = document.querySelector("#modal-img")
      const img = document.querySelector("#img-web")
      modal.style.width = '100%'
      modal.style.height = '100vh'
      img.style.opacity = 1
    }, 100)

  }

  return (
    <>
      {
        img != '' &&
        (
          <div className="modal-img" id="modal-img">
            <img className="modal-mobile" id="img" src={img} onClick={() => setImg('')} />
            <div className="close-butom" onClick={() => setImg('')}>
              <div></div>
              <div></div>
            </div>
          </div>
        )
      }
      {
        imgwEB != '' &&
        (
          <div className="modal-img" id="modal-img">
            <img className="modal-web" id="img-web" src={imgwEB} onClick={() => setImgWeb('')} />
            <div className="close-butom" onClick={() => setImgWeb('')}>
              <div></div>
              <div></div>
            </div>
          </div>
        )
      }
      <div
        className="main-body"
        style={{ backgroundColor: mode ? "" : "#454645" }}
      >
        <div
          className="content-desc"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div
            className="about"
            id="about"
            style={{ color: mode ? "" : "#ffffff2e" }}
          >
            SOBRE MIM
          </div>
          <div className="desc" style={{ color: mode ? "" : "#ffff" }}>
            Olá,{" "}
            <strong style={{ color: "#d9115b", fontSize: 24 }}>
              Seja bem vindo
            </strong>
            ! Meu nome é Warllei Martins, espero que esteja tudo bem com você.
            Tenho 26 anos e sou estudante de Análise e desenvolvimento de
            sistemas pela "Universidade Vila Velha". Sou um desenvolvedor
            front-end em busca de me tornar full-stack. Com profundo interesse
            em conhecer, aprender e desenvolver. venho me dedicado ao mundo da técnologia
            desde abril de 2021.
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                React Native
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                Clone Nubank
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Nubank é uma empresa startup brasileira pioneira no segmento de
                serviços financeiros, atuando como operadora de cartões de
                crédito e fintech com operações no Brasil, sediada em São Paulo
                e fundada em 6 de maio de 2013 por David Vélez, Cristina
                Junqueira e Edward Wible.{" "}
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              Android APP
            </div>
          </div>

          <div className="image-app">
            <div>
              <img
                id="img-info"
                className="bottonMarginPhoto"
                src={require("../../image/png2.png")}
                onClick={() => ViewContentMobile(require("../../image/png2.png"))}
              />
              <img
                src={require("../../image/png1.png")}
                onClick={() => ViewContentMobile(require("../../image/png1.png"))}

              />
            </div>
            <div>
              <img
                className="bottonMarginPhoto"
                src={require("../../image/png3.png")}
                onClick={() => ViewContentMobile(require("../../image/png3.png"))}

              />
              <img
                src={require("../../image/png4.png")}
                onClick={() => ViewContentMobile(require("../../image/png4.png"))}
              />
            </div>
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-second-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                React Native
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                Clone PicPay
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                O PicPay é um aplicativo fintech brasileiro, criado por pessoas
                do estado do Espírito Santo, disponível para download em celular
                dos sistemas operacionais Android e iOS, que funciona como uma
                carteira digital.
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              Android APP
            </div>
          </div>

          <div className="image-app">
            <div>
              <img
                className="bottonMarginPhoto"
                src={require("../../image/picpay-png1.png")}
                onClick={() => ViewContentMobile(require("../../image/picpay-png1.png"))}
              />
              <img
                src={require("../../image/picpay-png2.png")}
                onClick={() => ViewContentMobile(require("../../image/picpay-png2.png"))}
              />
            </div>
            <div>
              <img
                className="thirdPhoto"
                src={require("../../image/picpay-png3.png")}
                onClick={() => ViewContentMobile(require("../../image/picpay-png3.png"))}
              />
            </div>
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-third-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                React Native
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                Clone Spotify
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Spotify é um serviço de streaming de música, podcast e vídeo que
                foi lançado oficialmente em 7 de outubro de 2008. É o serviço de
                streaming de música mais popular e usado do mundo. Ele é
                desenvolvido pela startup Spotify AB em Estocolmo, Suécia.
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              Android APP
            </div>
          </div>

          <div className="image-app">
            <div>
              <img
                className="bottonMarginPhoto"
                src={require("../../image/spotify1.png")}
                onClick={() => ViewContentMobile(require("../../image/spotify1.png"))}
              />
              <img
                src={require("../../image/spotify2.png")}
                onClick={() => ViewContentMobile(require("../../image/spotify2.png"))}
              />
            </div>
            <div>
              <img
                className="bottonMarginPhoto"
                src={require("../../image/spotify3.png")}
                onClick={() => ViewContentMobile(require("../../image/spotify3.png"))}
              />
              <img
                className="bottonMarginPhoto"
                src={require("../../image/spotify4.png")}
                onClick={() => ViewContentMobile(require("../../image/spotify4.png"))}
              />
            </div>
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-fourth-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                ReactJs
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                Clone Home Page Netflix
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Netflix é uma provedora global de filmes e séries de televisão
                via streaming sediada em Los Gatos, Califórnia, e que atualmente
                possui mais de 220 milhões de assinantes. Fundada em 1997 nos
                Estados Unidos, a empresa surgiu como um serviço de entrega de
                DVD pelo correio.
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              App Web
            </div>
          </div>

          <div className="image-app">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                className="web-app web-app-rigth"
                src={require("../../image/netflix-home-clone-1.png")}
                onClick={() => ViewContentWeb(require("../../image/netflix-home-clone-1.png"))}
              />
              <img
                className="web-app  web-app-left"
                src={require("../../image/netflix-home-clone-2.png")}
                onClick={() => ViewContentWeb(require("../../image/netflix-home-clone-2.png"))}
              />
            </div>
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-fifth-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                Full Stack
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                E-commerce
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Um E-commerce, ou comércio eletrônico, refere-se aos negócios
                que estruturam seu processo de compra e venda na Internet.
                Assim, todas as transações comerciais são realizadas por meio de
                ferramentas online.
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              App Web
            </div>
          </div>

          <div className="image-app">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                className="web-app web-app-rigth"
                src={require("../../image/ecommerce1.png")}
                onClick={() => ViewContentWeb(require("../../image/ecommerce1.png"))}
              />
              <img
                className="web-app web-app-left "
                src={require("../../image/ecommerce4.png")}
                onClick={() => ViewContentWeb(require("../../image/ecommerce4.png"))}
              />
              <img
                className="web-app web-app-rigth"
                src={require("../../image/ecommerce3.png")}
                onClick={() => ViewContentWeb(require("../../image/ecommerce3.png"))}
              />
            </div>
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-sixth-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                Figma
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                Projetos de designer
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Landing Pages
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              Web Design
            </div>
          </div>

          <div className="image-app">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                className="web-app web-app-rigth"
                src={require("../../image/landing-page.png")}
                onClick={() => ViewContentWeb(require("../../image/landing-page.png"))}
              />
              <img
                className="web-app web-app-left"
                src={require("../../image/linkedin-reimaginate.png")}
                onClick={() => ViewContentWeb(require("../../image/linkedin-reimaginate.png"))}
              />
            </div>
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-seventh-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                ReactJs
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                A Nissan é uma fabricante japonesa de automóveis resultante de uma fusão entre Datsun e Prince.
                A Nissan está listada no Nikkei 225 e é a terceira maior fabricante japonesa de automóveis depois da Toyota e Honda em capitalização de mercado.
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Website
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              App Web
            </div>
          </div>

          <div className="image-app">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                className="web-app web-app-rigth"
                src={require("../../image/nissan1.png")}
                onClick={() => ViewContentWeb(require("../../image/nissan1.png"))}
              />
              <img
                className="web-app web-app-left"
                src={require("../../image/nissan2.png")}
                onClick={() => ViewContentWeb(require("../../image/nissan2.png"))}
              />
              <img
                className="web-app web-app-rigth"
                src={require("../../image/nissan3.png")}
                onClick={() => ViewContentWeb(require("../../image/nissan3.png"))}
              />
            </div>
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-ninth-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                Figma
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                Projetos de designer
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Website
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              Web Design
            </div>
          </div>

          <div className="image-app">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                className="web-app web-app-rigth"
                src={require("../../image/nike1.png")}
                onClick={() => ViewContentWeb(require("../../image/nike1.png"))}
              />
              <img
                className="web-app web-app-left"
                src={require("../../image/nike2.png")}
                onClick={() => ViewContentWeb(require("../../image/nike2.png"))}
              />
              <img
                className="web-app web-app-rigth"
                src={require("../../image/nike3.png")}
                onClick={() => ViewContentWeb(require("../../image/nike3.png"))}
              />
            </div>
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-tenth-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                ReactJs
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                Harley Davidson website
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Harley-Davidson Motor Cycles ou Harley é uma empresa fundada em Milwaukee,
                nos Estados Unidos, no ano de 1903. É reconhecida mundialmente como uma marca
                emblemática de motociclos e dedica-se à fabricação de motos de grande porte e cilindrada.
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              App Web
            </div>
          </div>

          <div className="image-app">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                className="web-app web-app-rigth"
                src={require("../../image/harley-img1.png")}
                onClick={() => ViewContentWeb(require("../../image/harley-img1.png"))}
              />
              <img
                className="web-app web-app-left"
                src={require("../../image/harley-img2.png")}
                onClick={() => ViewContentWeb(require("../../image/harley-img2.png"))}
              />
              <img
                className="web-app web-app-rigth"
                src={require("../../image/harley-img3.png")}
                onClick={() => ViewContentWeb(require("../../image/harley-img3.png"))}
              />
              <img
                className="web-app web-app-left"
                src={require("../../image/harley-img4.png")}
                onClick={() => ViewContentWeb(require("../../image/harley-img4.png"))}
              />
            </div>
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-tenth-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                ReactJs
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                Spotify website
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Spotify é um serviço de streaming de música, podcast e vídeo que
                foi lançado oficialmente em 7 de outubro de 2008. É o serviço de
                streaming de música mais popular e usado do mundo. Ele é
                desenvolvido pela startup Spotify AB em Estocolmo, Suécia.
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              App Web
            </div>
          </div>

          <div className="image-app">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                className="web-app web-app-rigth"
                src={require("../../image/spt-img1.png")}
                onClick={() => ViewContentWeb(require("../../image/spt-img1.png"))}
              />
              <img
                className="web-app web-app-left"
                src={require("../../image/spt-img2.png")}
                onClick={() => ViewContentWeb(require("../../image/spt-img2.png"))}
              />
              <img
                className="web-app web-app-rigth"
                src={require("../../image/spt-img3.png")}
                onClick={() => ViewContentWeb(require("../../image/spt-img3.png"))}
              />
            </div>
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-tenth-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                ReactJs
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                Amazônia website
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                A floresta tropical amazônica, que cobre boa parte do noroeste do Brasil e se estende até
                a Colômbia, o Peru e outros países da América do Sul, é a maior floresta tropical do mundo, famosa por sua biodiversidade.
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              App Web
            </div>
          </div>

          <div className="image-app">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                className="web-app web-app-rigth"
                src={require("../../image/projeto1.png")}
                onClick={() => ViewContentWeb(require("../../image/projeto1.png"))}
              />
              <img
                className="web-app web-app-left"
                src={require("../../image/projeto3.png")}
                onClick={() => ViewContentWeb(require("../../image/projeto3.png"))}
              />
              <img
                className="web-app web-app-rigth"
                src={require("../../image/projeto4.png")}
                onClick={() => ViewContentWeb(require("../../image/projeto4.png"))}
              />
              <img
                className="web-app web-app-rigth"
                src={require("../../image/projeto5.png")}
                onClick={() => ViewContentWeb(require("../../image/projeto5.png"))}
              />
            </div>
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-tenth-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                ReactJs | Nodejs
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                Sistema de consultas médicas
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Sistema médico fullstack pessoal.
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              App Web
            </div>
          </div>

          <div className="image-app">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                className="web-app web-app-rigth"
                src={require("../../image/img1-medical.png")}
                onClick={() => ViewContentWeb(require("../../image/img1-medical.png"))}
              />
              <img
                className="web-app web-app-left"
                src={require("../../image/img2-medical.png")}
                onClick={() => ViewContentWeb(require("../../image/img2-medical.png"))}
              />
              <img
                className="web-app web-app-rigth"
                src={require("../../image/img3-medical.png")}
                onClick={() => ViewContentWeb(require("../../image/img3-medical.png"))}
              />
              <img
                className="web-app web-app-left"
                src={require("../../image/img4-medical.png")}
                onClick={() => ViewContentWeb(require("../../image/img4-medical.png"))}
              />
            </div>
          </div>
        </div>

        <div
          className="app-content"
          style={{ backgroundColor: mode ? "" : "#454645" }}
        >
          <div id="desc-tenth-app" className="desc-app">
            <div>
              <div className="linguage" style={{ color: mode ? "" : "#ffff" }}>
                ReactJs | Nodejs
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                Puebla website
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Puebla, oficialmente Heroica Puebla de Zaragoza, é uma cidade e município
                do México, capital do estado de Puebla. Tem cerca de 2,1 milhões de habitantes. Foi fundada em 1531 pelos espanhóis.
              </div>
            </div>
            <div className="system" style={{ color: mode ? "" : "#ffff" }}>
              App Web
            </div>
          </div>

          <div className="image-app">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                className="web-app web-app-rigth"
                src={require("../../image/world1.png")}
                onClick={() => ViewContentWeb(require("../../image/world1.png"))}
              />
              <img
                className="web-app web-app-left"
                src={require("../../image/world2.png")}
                onClick={() => ViewContentWeb(require("../../image/world2.png"))}
              />
              <img
                className="web-app web-app-rigth"
                src={require("../../image/world3.png")}
                onClick={() => ViewContentWeb(require("../../image/world3.png"))}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
