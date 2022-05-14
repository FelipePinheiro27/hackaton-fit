import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Star from "../../assets/icons/star.png";

const descricao = [
  "É uma empresa com valor de investimento extremamente alto",
  "É uma empresa com valor de investimento alto",
  "É uma empresa com valor de investimento regular",
  "É uma empresa com valor de investimento bom comparado aos demais",
];

const valoresAtualizados = (rank) => {
  switch (rank) {
    case 4:
      rank = 1;
      break;
    case 3:
      rank = 2;
      break;
    case 2:
      rank = 3;
      break;
    case 1:
      rank = 4;
      break;
    case 0:
      rank = 5;
      break;
  }

  return rank;
};

const renderizarEstrelas = (rank) => {
  const estrelas = [];
  rank = valoresAtualizados(rank);

  for (let i = 0; i < rank; i++) {
    estrelas.push(<img src={Star} />);
  }

  return estrelas;
};

const TabelaDados = (props) => {
  const [open, setOpen] = useState(false);
  const [rankEstrelas, setRankEstrelas] = useState();

  const rows = [
    {
      nome: "SUCESSO",
      rank: 4,
    },
    {
      nome: "SAMARIA",
      rank: 4,
    },
    {
      nome: "MACIEL",
      rank: 4,
    },
    {
      nome: "SAMARIA",
      rank: 4,
    },
    {
      nome: "TERRABRAS",
      rank: 3,
    },
    {
      nome: "BATISTA",
      rank: 2,
    },
    {
      nome: "BATISTA",
      rank: 2,
    },
    {
      nome: "BATISTA",
      rank: 2,
    },
    {
      nome: "BATISTA",
      rank: 2,
    },
    {
      nome: "BATISTA",
      rank: 2,
    },
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Nome da empresa</strong>
              </TableCell>
              <TableCell>
                <strong>Confiabilidade</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.nome}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell>
                  <div
                    onClick={() => {
                      setRankEstrelas(row.rank);
                      setOpen(true);
                    }}
                  >
                    {renderizarEstrelas(row.rank).map((e) => e)}
                  </div>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="containerModal">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          className="modalEstilo"
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <h3 className="alinhamento">
            {descricao[valoresAtualizados(rankEstrelas)]}
          </h3>
        </Modal>
      </div>
    </>
  );
};

export default TabelaDados;
