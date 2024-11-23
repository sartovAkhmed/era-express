import "./Profil";
import { ToastContainer } from "react-toastify";
import Sidebar from "../../components/Sidebar/Sidebar";
import Add from "../ProfilPages/Add/Add";

import "./Profil.css";

export const Profil = () => {
  // const navigate = useNavigate();

  // const handleRemoveTokens = () => {
  //   localStorage.removeItem("access");
  //   localStorage.removeItem("refresh");

  //   navigate("/");
  // };

  return (
    <div>
      <ToastContainer />
      {/* <NavbarPortfolio /> */}
      <hr />
      <div className="app__content">
        <Sidebar />
      </div>
    </div>
  );
};
