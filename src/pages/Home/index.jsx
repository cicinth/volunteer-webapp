import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
import { actionSetVolunterData } from "../../store/actions/volunter";

const Home = () => {
  const dispatch = useDispatch();

  function teste() {
    dispatch(
      actionSetVolunterData({ nome: "teste", idade: "teste", amigo: "victor" })
    );
  }
  return (
    <div>
      <div className="wrap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md d-flex align-items-center">
              <p className="mb-0 phone">
                <span className="mailus">
                  Devido ao cenário atual referente o COVID-19, muitos projetos
                  e ações foram suspensas.
                </span>
              </p>
            </div>
            <div className="col-12 col-md d-flex justify-content-md-end">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-facebook">
                      <i className="sr-only">Facebook</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-instagram">
                      <i className="sr-only">Instagram</i>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Volunt<span>eer</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search-project">
                  <i className="fa fa-search" aria-hidden="true" /> Buscar
                  projeto
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Cadastro
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* END nav */}
      <div
        className="hero-wrap js-fullheight"
        style={{
          backgroundImage: 'url("https://source.unsplash.com/random")',
          height: window.innerHeight,
          width: window.innerWidth,
          backgroundSize: "cover",
          overflow: "hidden",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="slider-text align-items-center">
            <div style={{ paddingTop: "27%" }} className="col-md-6 ">
              <h2 className="subheading ">Lorem Ipsum is simply dummy text</h2>
              <h1 className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ips
              </h1>
              <p>
                <a
                  href="cadastro.html"
                  className="btn btn-lg btn-success"
                  style={{ backgroundColor: "#58A1A2" }}
                >
                  Divulgar ação ou voluntariar-se
                  <span className="ion-ios-arrow-forward" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb">
        <div className="overlay" />
        <div className="container">
          <div className="row d-md-flex justify-content-center">
            <div className="col-md-12">
              <div className="wrap-appointment bg-white d-md-flex pl-md-4 pb-5 pb-md-0">
                <form action="#" className="appointment w-100">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md d-flex align-items-center pt-4 pt-md-0">
                      <div className="form-group py-md-4 py-2 px-4 px-md-0">
                        <label htmlFor="name">
                          Buscar projetos e ações voluntárias
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Buscar"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md d-flex align-items-center">
                      <div className="form-group py-md-4 py-2 px-4 px-md-0">
                        <label htmlFor="name">Tipo da ação</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon">
                              <span className="fa fa-chevron-down" />
                            </div>
                            <select name id className="form-control">
                              <option value>Escolher</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md d-flex align-items-center pt-4 pt-md-0">
                      <div className="form-group py-md-4 py-2 px-4 px-md-0">
                        <label htmlFor="name">Local/Cidade/Estado</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Buscar"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md d-flex align-items-center align-items-stretch">
                      <div className="form-group py-md-4 py-2 px-4 px-md-0 d-flex align-items-stretch bg-primary">
                        <input
                          type="submit"
                          defaultValue="Realizar busca"
                          className="btn btn-primary py-3 px-4"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 d-flex">
              <img
                className="img d-flex align-items-center justify-content-center py-5 py-md-0 animated fadeIn"
                src={require("../../assets/img/voluntarios.jpg")}
              />
            </div>
            <div className="col-md-6 pl-md-5 pt-md-5">
              <div className="row justify-content-start py-5">
                <div className="col-md-12 heading-section  animated fadeIn">
                  <span className="subheading">O que é o Volunteer?</span>
                  <h2 className="mb-4">Esses números são histórias</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
              <div className="row ftco-counter py-5" id="section-counter">
                <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number={240}>
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>
                        ONGs
                        <br />
                        Cadastradas
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number={842}>
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>
                        Voluntarios <br />
                        Cadastrados
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number={133}>
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>
                        Ações <br />
                        Ativas
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-between mb-4">
            <div className=" heading-section text-center ">
              <h4 style={{ color: "#58A1A2" }}>Projeto atuais</h4>
            </div>
            <div>
              Filtrar
              <i
                style={{ color: "#58A1A2" }}
                className="fa fa-filter"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="row d-flex">
            <div className="row">
              <div className="col-md-4">
                <div className="card bg-light">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/seed/picsum/300/230"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title border-bottom pb-3">
                      Noite quente
                      <a
                        href="#"
                        className="float-right btn btn-sm btn-info d-inline-flex share"
                      >
                        <i className="fa fa-share-alt" />
                      </a>
                    </h5>
                    <p
                      style={{ overflowWrap: "break-word" }}
                      className="card-text text"
                    >
                      Até o dia 30 de junho, qualquer pessoa poderá deixar peças
                      de frio (como toucas, luvas, blusas, jaquetas, cachecóis,
                      calças, cobertores), em bom estado, em 15 das distritais
                      que a Associação Comercial
                    </p>
                    <a href="#" className="btn btn-sm btn-info float-right">
                      Mais detalhes
                      <i className="fa fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-light">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/seed/picsum/300/230"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title border-bottom pb-3">
                      Feijoada beneficiente
                      <a
                        href="#"
                        className="float-right btn btn-sm btn-info d-inline-flex share"
                      >
                        <i className="fa fa-share-alt" />
                      </a>
                    </h5>
                    <p className="card-text">
                      FEIJOADA preparada com todo amor e carinho pela equipe do
                      Restaurante Feijão de Corda. Uma casa do norte tradicional
                      e bem conceituadas na região de Osasco. Todo valor
                      arregadado será
                    </p>
                    <a href="#" className="btn btn-sm btn-info float-right">
                      Mais detalhes <i className="fa fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-light">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/seed/picsum/300/230"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title border-bottom pb-3">
                      Aulas de violão
                      <a
                        href="#"
                        className="float-right btn btn-sm btn-info d-inline-flex share"
                      >
                        <i className="fa fa-share-alt" />
                      </a>
                    </h5>
                    <p className="card-text">
                      Despertar e desenvolver o amor pela música, esse é o
                      principal objetivo do Sistema Integrado de Música da
                      Amazônia (Simam), instituição criada por oito voluntários
                      que oferecem aulas de{" "}
                    </p>
                    <a href="#" className="btn btn-sm btn-info float-right">
                      Mais detalhes <i className="fa fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section  text-center ">
            <h2>Depoimentos</h2>
          </div>
        </div>

        <div className="row col-md-12 container">
          <div className="carousel-testimony row justify-content-center align-items-center">
            <div style={{ width: 350, height: 174 }} className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-right" />
                </div>
                <div className="text">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Marcos Costa</p>
                      <span className="position">Voluntário</span>
                    </div>
                  </div>
                  <p className="mb-1">Texto depoimento</p>
                </div>
              </div>
            </div>

            <div
              style={{ width: 350, height: 174 }}
              className="item mr-3 ml-3 mt-3 mb-3"
            >
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-right" />
                </div>
                <div className="text">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="user-img"
                      style={{
                        backgroundImage: "url(../../assets/img/person_2.jpg)",
                      }}
                    />
                    <div className="pl-3">
                      <p className="name">André Luiz</p>
                      <span className="position">
                        Coordenador da ONG Humanizar
                      </span>
                    </div>
                  </div>
                  <p className="mb-1">Texto depoimento</p>
                </div>
              </div>
            </div>

            <div style={{ width: 350, height: 174 }} className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-right" />
                </div>
                <div className="text">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_3.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Rogério Santana</p>
                      <span className="position">Diretor da ONG Crescer</span>
                    </div>
                  </div>
                  <p className="mb-1">Texto depoimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer ftco-section">
        <div className="container">
          <div className="row mt-12">
            <div className="col-md-12 text-center">
              <p className="copyright">Volunteer | GoHorse Impacta</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
