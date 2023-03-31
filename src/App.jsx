import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./component/Blog/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" App">
      <div>
        <Header />
        <Blog />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
