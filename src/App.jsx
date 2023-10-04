import { useState, useEffect } from "react";
import Footer from "./components/Footer.jsx";
import MainSection from "./components/MainSection.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import getData from "./components/getData.jsx";
import "./styles/App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData().then((res) => setProducts(res));
  }, []);

  return (
    <>
      <NavigationBar />
      <MainSection products={products} />
      <Footer />
    </>
  );
}

export default App;
