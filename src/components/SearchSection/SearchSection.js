import { useState } from "react";
import { Button } from "@mui/material";
import SelectCategoria from "../SelectCategoria/SelectCategoria";
import "./searchSection.css";

const SearchSection = () => {
  const [botaoSelecionado, setBotaoSelecionado] = useState(0);

  return (
    <div className="searchSection">
      <>
        <Button
          variant={botaoSelecionado === 1 ? "contained" : "text"}
          onClick={() => setBotaoSelecionado(botaoSelecionado !== 1 ? 1 : 0)}
        >
          Contratos
        </Button>
        <Button
          variant={botaoSelecionado === 2 ? "contained" : "text"}
          onClick={() => setBotaoSelecionado(botaoSelecionado !== 2 ? 2 : 0)}
        >
          Rodovias
        </Button>
        <SelectCategoria disabled={botaoSelecionado !== 1} />
        <Button
          variant="outlined"
          disabled={botaoSelecionado === 0}
          onClick={() => alert("Retorno de dados")}
        >
          Buscar
        </Button>
      </>
    </div>
  );
};

export default SearchSection;
