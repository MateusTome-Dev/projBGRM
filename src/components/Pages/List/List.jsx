import "./index.css";
function List() {
  return (
    <section className="containerList">
        <h1 className="listTitle">OCORRÊNCIAS</h1>
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
            </tr>
          </thead>
          <tbody className="listBody">
            <tr>
              <td className="listTd">00/00/00 00:00</td>
              <td className="listTd">RESGATE</td>
              <td className="listTd">EMERGÊNCIA CLÍNICA</td>
              <td className="listTd">CONVULSÃO</td>
              <td className="listTd">JD. SANDRA</td>
              <td className="listTd">R. INTERNACIONAL</td>
              <td className="listTd">1</td>
            </tr>
            <tr>
              <td className="listTd">00/00/00 00:00</td>
              <td className="listTd">RESGATE</td>
              <td className="listTd">EMERGÊNCIA CLÍNICA</td>
              <td className="listTd">CONVULSÃO</td>
              <td className="listTd">JD. SANDRA</td>
              <td className="listTd">R. INTERNACIONAL</td>
              <td className="listTd">2</td>
            </tr>
            <tr>
              <td className="listTd">00/00/00 00:00</td>
              <td className="listTd">RESGATE</td>
              <td className="listTd">EMERGÊNCIA CLÍNICA</td>
              <td className="listTd">CONVULSÃO</td>
              <td className="listTd">JD. SANDRA</td>
              <td className="listTd">R. INTERNACIONAL</td>
              <td className="listTd">3</td>
            </tr>
          </tbody>
        </table>
        </section>
  );
}
export default List;
