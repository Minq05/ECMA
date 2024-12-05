import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Register from "./pages/Register";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "product/list",
      element: <List />,
    },
    {
      path: "product/add",
      element: <Add />,
    },
    {
      path: "product/edit/:id",
      element: <Edit />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ];

  const element = useRoutes(routes);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
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
                  List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product/add">
                  Add
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>{element}</div>
      <Toaster />
    </div>
  );
}
export default App;
