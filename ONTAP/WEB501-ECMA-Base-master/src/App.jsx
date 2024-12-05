import { Toaster } from "react-hot-toast";
import Home from "./srcpages/Home";
import Register from "./srcpages/Register";
import Login from "./srcpages/Login";
import List from "./srcpages/List";
import Add from "./srcpages/Add";
import Edit from "./srcpages/Edit";
import { useRoutes } from "react-router-dom";
function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/product/list",
      element: <List />,
    },
    {
      path: "/product/add",
      element: <Add />,
    },
    {
      path: "/product/edit/:id",
      element: <Edit />,
    },
  ];

  const element = useRoutes(routes);
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            WEB501-ECMA
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product/list">
                  Product List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product/add">
                  Product Add
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-2">{element}</div>
      <Toaster />
    </main>
  );
}

export default App;