import { useEffect } from "react";
import "./App.css";
import Home from "./page/Home";
import AOS from "aos";
import "aos/dist/aos.css"
function App() {
  useEffect(() => {
    AOS.init({duration:1200})
  })
  return (
    <>
      <Home />
    </>
  );
}

export default App;
