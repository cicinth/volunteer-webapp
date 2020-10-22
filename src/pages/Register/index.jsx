import React from "react";
import { useDispatch } from "react-redux";
import { actionSetVolunterData } from "../../store/actions/volunter";

const Register = () => {
  const dispatch = useDispatch();

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
                  <h3>REGISTRE-SE</h3>
                  {/* <img src="dashboard/images/logo-dark.svg" alt="logo">*/}
                </div>
                <h4
                  style={{ width: window.innerWidth / 5}}
                  className="font-weight-light"
                >
                  Novo aqui ?{" "}
                </h4>
                <h6 className="font-weight-light">Se registre agora </h6>
                <form className="pt-3">
                  <div className="form-group">
                    <label>Nome</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-account-outline text-primary" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-lg border-left-0"
                        placeholder="Nome"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-email-outline text-primary" />
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control form-control-lg border-left-0"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Você é ?</label>
                    <select
                      className="form-control form-control-lg"
                      id="exampleFormControlSelect2"
                    >
                      <option>ONG</option>
                      <option>Voluntário</option>
                      <option>ONG e Voluntário</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Senha</label>
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
                  <div className="mt-3">
                    <a
                      style={{ backgroundColor: "#58a1a2", border: "#58a1a2" }}
                      className="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn"
                      href="../../index.html"
                    >
                      Registrar
                    </a>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Você ja possui uma conta ?{" "}
                    <a href="login.html" className="text-primary">
                      Logar-se
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-lg-6 login-half-bg d-flex flex-row"
              style={{
                backgroundImage: 'url("https://source.unsplash.com/random")',
                height: window.innerHeight,
                width: window.innerWidth,
                backgroundSize: "cover",
                overflow: "hidden",
              }}
            >
              <p className="text-white font-weight-medium text-center flex-grow align-self-end">
                Copyright © Volunteer | GoHorse Impacta 2020.
              </p>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>
  );
};

export default Register;
