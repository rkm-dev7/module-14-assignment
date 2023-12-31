import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header text="simple react project" />
      <Content />
      <Footer text="Copyright © 2012 - 2023 TermsFeed®. All rights reserved." />
    </div>
  );
}

export default App;
