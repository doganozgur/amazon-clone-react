import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="2xl:max-w-screen-2xl xl:max-w-screen-xl sm:px-4 mx-auto pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
