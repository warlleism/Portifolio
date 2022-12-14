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
            Ol??,{" "}
            <strong style={{ color: "#d9115b", fontSize: 24 }}>
              Seja bem vindo
            </strong>
            ! Meu nome ?? Warllei Martins, espero que esteja tudo bem com voc??.
            Tenho 26 anos e sou estudante de An??lise e desenvolvimento de
            sistemas pela "Universidade Vila Velha". Sou um desenvolvedor
            front-end em busca de me tornar full-stack. Com profundo interesse
            em conhecer, aprender e desenvolver. venho me dedicado ao mundo da t??cnologia
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
                Nubank ?? uma empresa startup brasileira pioneira no segmento de
                servi??os financeiros, atuando como operadora de cart??es de
                cr??dito e fintech com opera????es no Brasil, sediada em S??o Paulo
                e fundada em 6 de maio de 2013 por David V??lez, Cristina
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
                O PicPay ?? um aplicativo fintech brasileiro, criado por pessoas
                do estado do Esp??rito Santo, dispon??vel para download em celular
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
                Spotify ?? um servi??o de streaming de m??sica, podcast e v??deo que
                foi lan??ado oficialmente em 7 de outubro de 2008. ?? o servi??o de
                streaming de m??sica mais popular e usado do mundo. Ele ??
                desenvolvido pela startup Spotify AB em Estocolmo, Su??cia.
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
                Netflix ?? uma provedora global de filmes e s??ries de televis??o
                via streaming sediada em Los Gatos, Calif??rnia, e que atualmente
                possui mais de 220 milh??es de assinantes. Fundada em 1997 nos
                Estados Unidos, a empresa surgiu como um servi??o de entrega de
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
                Um E-commerce, ou com??rcio eletr??nico, refere-se aos neg??cios
                que estruturam seu processo de compra e venda na Internet.
                Assim, todas as transa????es comerciais s??o realizadas por meio de
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
                A Nissan ?? uma fabricante japonesa de autom??veis resultante de uma fus??o entre Datsun e Prince.
                A Nissan est?? listada no Nikkei 225 e ?? a terceira maior fabricante japonesa de autom??veis depois da Toyota e Honda em capitaliza????o de mercado.
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
                Harley-Davidson Motor Cycles ou Harley ?? uma empresa fundada em Milwaukee,
                nos Estados Unidos, no ano de 1903. ?? reconhecida mundialmente como uma marca
                emblem??tica de motociclos e dedica-se ?? fabrica????o de motos de grande porte e cilindrada.
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
                Spotify ?? um servi??o de streaming de m??sica, podcast e v??deo que
                foi lan??ado oficialmente em 7 de outubro de 2008. ?? o servi??o de
                streaming de m??sica mais popular e usado do mundo. Ele ??
                desenvolvido pela startup Spotify AB em Estocolmo, Su??cia.
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
                Amaz??nia website
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                A floresta tropical amaz??nica, que cobre boa parte do noroeste do Brasil e se estende at??
                a Col??mbia, o Peru e outros pa??ses da Am??rica do Sul, ?? a maior floresta tropical do mundo, famosa por sua biodiversidade.
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
                Sistema de consultas m??dicas
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Sistema m??dico fullstack pessoal.
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
                Puebla, oficialmente Heroica Puebla de Zaragoza, ?? uma cidade e munic??pio
                do M??xico, capital do estado de Puebla. Tem cerca de 2,1 milh??es de habitantes. Foi fundada em 1531 pelos espanh??is.
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
