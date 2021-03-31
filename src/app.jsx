import { Route } from "react-router";
import "./app.css";
import Navbar from "./components/navbar";
import Home from "./page/home";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/video" component={VideoPage} />
    </>
  );
}

export default App;
