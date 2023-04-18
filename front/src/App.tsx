import RoutesMain from "./routes";
import Global from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div>
      <Global />
      <RoutesMain />
      <ToastContainer
        autoClose={2000}
        theme={"dark"}
        style={{ width: "240px", margin: "10px auto" }}
      />
    </div>
  );
}

export default App;
