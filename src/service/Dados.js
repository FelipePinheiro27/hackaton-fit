import React, { useEffect, useState } from "react";

const Dados = () => {
  const [users, setUsers] = useState([]);

  fetch("./similarEmpresa.json", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      res.json();
    })
    .then((res) => {
      setUsers(res.data);
    });

  return users;
};

export default Dados;
