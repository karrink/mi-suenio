import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./Components/Carts/Cart";
import CheckOut from "./Components/CheckOut/CheckOut";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import { CartProvider } from "./Context/CartContext";

function App() {
  
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Equipate con lo mejor !!!" />
              }
            />
            <Route
              path="/productos/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemsId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
