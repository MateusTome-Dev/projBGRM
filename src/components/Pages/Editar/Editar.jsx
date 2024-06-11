import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";

function Editar() {
  const params = useParams();
  const [formData, setFormData] = useState({
    descricao: "",
    natureza: "",
    grupo: "",
    bairro: "",
    logradouro: "",
    datetime: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3001/ocorrencia/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        alert("Ocorrência editada com sucesso!");
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Erro ao editar ocorrência");
      });
  };

  return (
    <section className="editarContainer">
      <h1>
        Editar
        <br className="brTitleEdit" /> ocorrências
      </h1>
      <div className="containerFormEdit">
        <form action="" method="POST" data-form className="formEditar">
          <label className="labelEdit" htmlFor="ID">
            Identificador
          </label>
          <h1 id="h1Style">{params.id}</h1>
          <label className="labelEdit" htmlFor="Bairro">
            Bairro
          </label>
          <input
            className="inputEdit"
            type="text"
            name="Bairro"
            id="Bairro"
            placeholder="Digite o bairro..."
          />
          <label className="labelEdit" htmlFor="Grupo">
            Grupo
          </label>
          <input
            className="inputEdit"
            type="text"
            name="Grupo"
            id="Grupo"
            placeholder="Digite o grupo..."
          />
          <label className="labelEdit" htmlFor="Descricao">
            Descrição
          </label>
          <input
            className="inputEdit"
            type="text"
            name="Descricao"
            id="Descricao"
            placeholder="Digite a descrição..."
          />
          <label className="labelEdit" htmlFor="datetime">
            Selecione a data e hora:
          </label>
          <input
            className="inputEdit"
            type="datetime-local"
            id="datetime"
            name="datetime"
            placeholder="Digite a data..."
          />
          <label className="labelEdit" htmlFor="Natureza">
            Natureza
          </label>
          <input
            className="inputEdit"
            type="text"
            name="Natureza"
            id="Natureza"
            placeholder="Digite a natureza..."
          />
          <label className="labelEdit" htmlFor="Logradouro">
            Logradouro
          </label>
          <input
            className="inputEdit"
            type="text"
            name="Logradouro"
            id="Logradouro"
            placeholder="Digite o logradouro..."
          />

          <button className="btnEdit" type="submit" data-button>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Editar;
