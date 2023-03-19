import NavBar from "./components/NavBar";
import PromoApp from "./components/PromoApp";
import Footer from "./components/Footer";
// import Destacado from "./components/Destacado";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Agradecimiento from "./components/Agradecimiento";
import Home from "./components/Home";

function App() { // Llamar a cada componente para ver como se van renderizando
  return (
    < CartContextProvider>
      <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/agradecimiento/:orderId" element={<Agradecimiento />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      <PromoApp />
      <Footer />
    </div>
    </BrowserRouter>
  </CartContextProvider>  
  );
}

export default App;
