import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default App;
