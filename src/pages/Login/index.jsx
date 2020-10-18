import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
          <div className="row flex-grow">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="auth-form-transparent text-left p-2">
                <div className="brand-logo">
                  <img
                    style={{ width: 115, height: 119.5, marginBottom: 25 }}
                    src={require("../../assets/img/logo.png")}
                    alt="logo"
                    align="center"
                  />
                </div>
                <h4>Bem vindo de volta!</h4>
                <h6 className="font-weight-light">
                  Estamos felizes em termos você de volta.
                </h6>
                <form className="pt-3">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail">E-mail</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-account-outline text-primary" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-lg border-left-0"
                        id="exampleInputEmail"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword">Senha</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-lock-outline text-primary" />
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control form-control-lg border-left-0"
                        id="exampleInputPassword"
                        placeholder="Senha"
                      />
                    </div>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <Link
                      className="auth-link text-black"
                      to="/forgot-password"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <div className="my-3">
                    <a
                      style={{ backgroundColor: "#58a1a2", border: "#58a1a2" }}
                      className="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn"
                      href=""
                      onClick={() => alert("CHAMAR FUNCTION LOGIN")}
                    >
                      LOGIN
                    </a>
                  </div>

                  <div className="text-center mt-4 font-weight-light">
                    Não tem conta ?{" "}
                    <Link className="text-primary" to="/register">
                      Registre-se
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            <div
              className="col-lg-6 login-half-bg d-flex flex-row"
              style={{
                backgroundImage: 'url("https://source.unsplash.com/random")',
                height: 766,
                width: 1300,
              }}
            >
              <p className="text-white font-weight-medium text-center flex-grow align-self-end">
                Copyright © Volunteer | GoHorse Impacta 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
