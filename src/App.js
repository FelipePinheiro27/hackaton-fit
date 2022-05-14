import "./App.css";
import { Divider } from "@mui/material";
import Header from "./components/Header/Header";
import SearchSection from "./components/SearchSection/SearchSection";
import TabelaDados from "./components/TabelaDados/TabelaDados";
import Dados from "./service/Dados";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchSection />
      <br />
      <Divider />
      <br />
      <TabelaDados dados={Dados()} />
    </div>
  );
}

export default App;
