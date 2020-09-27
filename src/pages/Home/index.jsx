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
      <Header />

      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/search-project">Pesquisar Projeto</Link>
      </li>
      <li>
        <Link to="/214124/project-detail">Detalhes do projeto</Link>
      </li>

      <li>
        <Link to="/102050/ong-detail">Detalhes da ong</Link>
      </li>

      <li>
        <Link to="/14205/staff-ong">Equipe da Ong</Link>
      </li>

      <li>
        <Link to="/register-event">Cadastrar atividade</Link>
      </li>

      <li>
        <Link to="/projects-list">Listar projetos</Link>
      </li>

      <li>
        <Link to="/report">Relatorios</Link>
      </li>

      <li>
        <Link to="/evaluation-volunters">Avaliação dos voluntários</Link>
      </li>
    </div>
  );
};

export default Home;
