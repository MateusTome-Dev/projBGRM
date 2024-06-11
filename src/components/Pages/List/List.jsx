import editIcon from "/public/img/editar.png";
import delIcon from "/public/img/lixeira.png";
import React, { useEffect, useState } from "react";
import "./index.css";
function List() {
  const [occ, setOcc] = useState([]);

  useEffect(() => {
    fetchOcorrencias();
  }, []);

  function fetchOcorrencias() {
    fetch("http://localhost:3000/ocorrencia", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setOcc(data);
      })
      .catch((erro) => console.error("Erro ao buscar dados:", erro));
  }

  function deleteOccurrence(id) {
    fetch(`http://localhost:3000/ocorrencia/${id}`, {
      method: "DELETE",
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        fetchOcorrencias();
      })
      .catch((erro) => console.error("Erro ao excluir ocorrência:", erro));
  }

  return (
    <section className="containerList">
    
      <h1 className="listTitle">Listar</h1>
      
        <table className="list">
          <thead className="listHead">
            <tr>
              <th className="listTh">DATA/HORA</th>
              <th className="listTh">NATUREZA</th>
              <th className="listTh">GRUPO</th>
              <th className="listTh">SUBGRUPO</th>
              <th className="listTh">BAIRRO</th>
              <th className="listTh">LAGRADOURO</th>
              <th className="listTh">ID</th>
              <th className="listTh">AÇÃO</th>
            </tr>
          </thead>
          <tbody className="listBody">
            {occ.map((ocorrencia) => (
              <tr key={ocorrencia.id} className="line">
                <td className="listTd">{ocorrencia.datetime}</td>
                <td className="listTd">{ocorrencia.natureza}</td>
                <td className="listTd">{ocorrencia.grupo}</td>
                <td className="listTd">{ocorrencia.subgrupo}</td>
                <td className="listTd">{ocorrencia.bairro}</td>
                <td className="listTd">{ocorrencia.logradouro}</td>
                <td className="listTd">{ocorrencia.id}</td>
                <td className="listTd"><div className="linkIcon">
                  <img src={editIcon} alt="" onClick={() =>(window.location.href = `/editar/${ocorrencia.id}`)}/>
                  <img src={delIcon} alt="" onClick={() => deleteOccurrence(ocorrencia.id)}/>
                </div></td>

                
              </tr>
            ))}
          </tbody>
        </table>
      
    </section>
  );
}
export default List;
