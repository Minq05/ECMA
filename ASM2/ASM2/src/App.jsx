import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import DetailPage from "./pages/Detail";
import CartPage from "./pages/Cart";
import CheckOutPage from "./pages/CheckOut";
import Homepage from "./pages/Homepage";

function App() {
  const routes = [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "pages/detail",
      element: <DetailPage />,
    },
    {
      path: "pages/cart",
      element: <CartPage />,
    },
    {
      path: "pages/checkout/",
      element: <CheckOutPage />,
    },
    
    
  ];

  const element = useRoutes(routes);
  return (
    <main>
      <Toaster />
      {element}
    </main>
  );
}
export default App;
