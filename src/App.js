import { BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./componentes/NavBar";
import Footer from "./componentes/footer";
import ItemListContainer from "./componentes/ItemListContainerFolder/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainerFolder/ItemDetailContainer";
import Cart from "./componentes/Cart";
import { CartProvider } from "./context/CartContext";
import SuccessCheckout from "./componentes/pages/SuccessCheckout";

const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />

      <Routes>
          <Route path="/" element={<ItemListContainer/>} />

          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          <Route path="/detail/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart />} /> 

          <Route path="/successCheckout/:id" element={<SuccessCheckout />} />
          
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        
        </Routes>
        
      <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
