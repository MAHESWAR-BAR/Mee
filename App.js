import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/footer";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
