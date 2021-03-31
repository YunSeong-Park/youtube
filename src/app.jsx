import { Route } from "react-router";
import "./app.css";
import Navbar from "./components/navbar";
import Home from "./page/home";
import VideoPage from "./page/videoPage";

function App() {
  return (
    <>
      <Navbar />
      <Route path='/' component={Home} exact />
      <Route path='/video' component={VideoPage} />
    </>
  );
}

export default App;
