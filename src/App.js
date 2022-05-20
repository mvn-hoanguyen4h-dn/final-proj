import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { FaSignInAlt, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { NavLink, Route, Switch } from "react-router-dom";
import "./assets/scss/styles.scss";
import Sidebar from "./components/layouts/Sidebar";
import PrivateRoute from "./core/guards/PrivateRoute";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import Features from "./pages/Features";
import useAuth from "./hooks/useAuth";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const { logout } = useAuth();

  return (
    <>
      <Layout className="App">
        <div className="page-main">
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <PrivateRoute path="/account">
              <Layout>
                <Sidebar />
                <Layout>
                  <Header>
                    <nav>
                      <ul className="nav-links-list flex">
                        <li className="nav-links-item">
                          <NavLink to="/auth/login" activeClassName="active">
                            <FaSignInAlt />
                          </NavLink>
                        </li>
                        <li className="nav-links-item">
                          <a>
                            <FaSignOutAlt onClick={() => logout()} />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </Header>
                  <Content style={{ margin: "24px 16px 0" }}>
                    <Account />
                  </Content>
                  <Footer style={{ textAlign: "center" }}>
                    Lotus Site ©2022 Created by Bao Hoa Nguyen
                  </Footer>
                </Layout>
              </Layout>
            </PrivateRoute>
            <PrivateRoute path="/">
              <Layout>
                <Sidebar />
                <Layout>
                  <Header>
                    <nav>
                      <ul className="nav-links-list">
                        <li className="nav-links-item">
                          <NavLink to="/auth/login" activeClassName="active">
                            <FaSignInAlt />
                          </NavLink>
                        </li>
                        <li className="nav-links-item">
                          <a>
                            <FaSignOutAlt onClick={() => logout()} />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </Header>
                  <Content style={{ margin: "24px 16px 0" }}>
                    <Features />
                  </Content>
                  <Footer style={{ textAlign: "center" }}>
                    Lotus Site ©2022 Created by Bao Hoa Nguyen
                  </Footer>
                </Layout>
              </Layout>
            </PrivateRoute>
          </Switch>
        </div>
      </Layout>
    </>
  );
}

export default App;
