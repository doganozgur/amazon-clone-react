import Home from "./pages/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className=" bg-gray-100">
      <Header />
      <main className="max-w-screen-xl px-4 mx-auto my-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
