import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { persistor, store } from "./store/reducers";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" component={() => <h1>dashboard</h1>} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              path="/forgot-password"
              component={() => <h1>Esqueci minha senha</h1>}
            />
            <Route
              path="/search-project"
              component={() => <h1>search Project</h1>}
            />
            <Route
              path="/:id/project-detail"
              component={() => <h1>detail Project</h1>}
            />

            {/* VOLUNTARIOS */}
            <Route
              path="/:id/ong-detail"
              component={() => <h1>ONG Detail</h1>}
            />
            <Route
              path="/volunters-list"
              component={() => <h1>Lista de voluntarios</h1>}
            />
            <Route
              path="/:id/staff-ong"
              component={() => <h1>Equipe ONG</h1>}
            />
            <Route
              path="/register-event"
              component={() => <h1>Cadastrar atividade</h1>}
            />
            <Route
              path="/projects-list"
              component={() => <h1>Listar projetos</h1>}
            />
            <Route
              path="/volunters-request"
              component={() => <h1>Solicitações de voluntarios</h1>}
            />
            <Route path="/report" component={() => <h1>Relatorios</h1>} />

            <Route
              path="/evaluation-volunters"
              component={() => <h1>AvaliaçÕes do voluntarios</h1>}
            />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
