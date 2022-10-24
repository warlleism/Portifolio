import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Context } from "../../context/provider";

import "./style.scss";

const Body = () => {
  useEffect(() => {
    showAbout();
  }, []);
  const [img, setImg] = useState('')
  const [imgwEB, setImgWeb] = useState('')

  const { mode } = useContext(Context);

  const showAbout = () => {
    const about = window.document.getElementById("about");
    const descApp = window.document.getElementById("desc-app");
    const descSecondApp = window.document.getElementById("desc-second-app");
    const descThirdApp = window.document.getElementById("desc-third-app");
    const descFourthApp = window.document.getElementById("desc-fourth-app");
    const descfifthApp = window.document.getElementById("desc-fifth-app");
    const descSixthApp = window.document.getElementById("desc-sixth-app");
    const descSeventhApp = window.document.getElementById("desc-seventh-app");

    window.addEventListener("scroll", () => {
      const windowScroll = parseInt(window.scrollY);
      windowScroll <= 0
        ? (about.style.transform = "translateX(-100%)")
        : (about.style.transform = "translateX(5%)");
      windowScroll <= 600
        ? (descApp.style.transform = "translateX(-100%)")
        : (descApp.style.transform = "translateX(0%)");
      windowScroll <= 3025
        ? (descSecondApp.style.transform = "translateX(-100%)")
        : (descSecondApp.style.transform = "translateX(0%)");
      windowScroll <= 5143
        ? (descThirdApp.style.transform = "translateX(-100%)")
        : (descThirdApp.style.transform = "translateX(0%)");
      windowScroll <= 6909
        ? (descFourthApp.style.transform = "translateX(-100%)")
        : (descFourthApp.style.transform = "translateX(0%)");
      windowScroll <= 8518
        ? (descfifthApp.style.transform = "translateX(-100%)")
        : (descfifthApp.style.transform = "translateX(0%)");
      windowScroll <= 10305
        ? (descSixthApp.style.transform = "translateX(-100%)")
        : (descSixthApp.style.transform = "translateX(0%)");
      windowScroll <= 11800
        ? (descSeventhApp.style.transform = "translateX(-100%)")
        : (descSeventhApp.style.transform = "translateX(0%)");
    });
  };

  return (
    <>
      {
        img != '' &&
        (
          <div className="modal-img">
            <img className="modal-mobile" src={img} />
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
          <div className="modal-img">
            <img className="modal-web" src={imgwEB} />
            <div className="close-butom" onClick={() => setImgWeb('')}>x</div>
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
            sistemas pela "Universidade de Vila Velha". Sou um desenvolvedor
            front-end em busca de me tornar full stack. Com profundo interesse
            em conhecer, aprender e desenvolver venho me dedicado a este
            apaixonante mundo da programação.
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
                className="bottonMarginPhoto"
                src={require("../../image/png2.png")}
                onClick={() => setImg(require("../../image/png2.png"))}
              />
              <img
                src={require("../../image/png1.png")}
                onClick={() => setImg(require("../../image/png1.png"))} />
            </div>
            <div>
              <img
                className="bottonMarginPhoto"
                src={require("../../image/png3.png")}
                onClick={() => setImg(require("../../image/png3.png"))}
              />
              <img
                src={require("../../image/png4.png")}
                onClick={() => setImg(require("../../image/png4.png"))}
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
                onClick={() => setImg(require("../../image/picpay-png1.png"))}
              />
              <img
                src={require("../../image/picpay-png2.png")}
                onClick={() => setImg(require("../../image/picpay-png2.png"))}
              />
            </div>
            <div>
              <img
                className="thirdPhoto"
                src={require("../../image/picpay-png3.png")}
                onClick={() => setImg(require("../../image/picpay-png3.png"))}
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
                onClick={() => setImg(require("../../image/spotify1.png"))}
              />
              <img
                src={require("../../image/spotify2.png")}
                onClick={() => setImg(require("../../image/spotify2.png"))}
              />
            </div>
            <div>
              <img
                className="bottonMarginPhoto"
                src={require("../../image/spotify3.png")}
                onClick={() => setImg(require("../../image/spotify3.png"))}
              />
              <img
                className="bottonMarginPhoto"
                src={require("../../image/spotify4.png")}
                onClick={() => setImg(require("../../image/spotify4.png"))}
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
                onClick={() => setImgWeb(require("../../image/netflix-home-clone-1.png"))}
              />
              <img
                className="web-app  web-app-left"
                src={require("../../image/netflix-home-clone-2.png")}
                onClick={() => setImgWeb(require("../../image/netflix-home-clone-2.png"))}
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
                ReactJs / NodeJs / MySql
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

              />
              <img
                className="web-app web-app-left "
                src={require("../../image/ecommerce4.png")}

              />
              <img
                className="web-app web-app-rigth"
                src={require("../../image/ecommerce3.png")}

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
                ReactJs
              </div>
              <div className="project" style={{ color: mode ? "" : "#ffff" }}>
                Clone E-commerce Nerdstore
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                Produtos e presentes criativos especialmente selecionados para o
                público nerd. Aproveite! Temos camisetas, livros, copos, canecas
                e muito mais, com preços que cabem no seu bolso.
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
                src={require("../../image/nerdstore2.png")}

              />
              <img
                className="web-app web-app-left"
                src={require("../../image/nerdstore1.png")}

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
                Clone Jovem Nerd website
              </div>
              <div
                className="desc-projeto"
                style={{ color: mode ? "" : "#ffff" }}
              >
                O Jovem Nerd é um blog brasileiro de humor e notícias, criado em
                2002 por Alexandre Ottoni de Menezes e Deive Pazos Gerpe e
                adquirido pela Magazine Luiza em abril de 2021, que aborda temas
                sobre entretenimento, em especial, cinema, séries de televisão,
                ficção científica, quadrinhos, role-playing game e viagens
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
                src={require("../../image/jovemNerd1.png")}

              />
              <img
                className="web-app web-app-left"
                src={require("../../image/jovemNerd2.png")}

              />
              <img
                className="web-app web-app-rigth"
                src={require("../../image/jovemNerd3.png")}

              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
