// Compontents
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

import Cart from "./components/Cart";
import Products from "./components/Products";
import RootLayout from "./layout/RootLayout";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
