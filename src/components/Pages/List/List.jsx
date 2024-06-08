import { Link } from "react-router-dom";
import editIcon from'/public/img/editar.png'
import delIcon from'/public/img/lixeira.png'
import "./index.css";
function List() {
  return (
    <section className="containerList">
        <h1 className="listTitle">Lista de ocorrências</h1>
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
              <div className="linkIcon">
              <Link to="/editar" className="linkIcon"><img src={editIcon} alt=""/></Link>
              <Link to="/deletar" className="linkIcon"><img src={delIcon} alt=""/></Link>
              </div>
            </tr>

            <tr>
              <td className="listTd">00/00/00 00:00</td>
              <td className="listTd">RESGATE</td>
              <td className="listTd">EMERGÊNCIA CLÍNICA</td>
              <td className="listTd">CONVULSÃO</td>
              <td className="listTd">JD. SANDRA</td>
              <td className="listTd">R. INTERNACIONAL</td>
              <td className="listTd">2</td>
              <div className="linkIcon">
              <Link to="/editar" className="linkIcon"><img src={editIcon} alt=""/></Link>
              <Link to="/deletar" className="linkIcon"><img src={delIcon} alt=""/></Link>
              </div>
            </tr>
            <tr>
              <td className="listTd">00/00/00 00:00</td>
              <td className="listTd">RESGATE</td>
              <td className="listTd">EMERGÊNCIA CLÍNICA</td>
              <td className="listTd">CONVULSÃO</td>
              <td className="listTd">JD. SANDRA</td>
              <td className="listTd">R. INTERNACIONAL</td>
              <td className="listTd">3</td>
              <div className="linkIcon">
              <Link to="/editar" className="linkIcon"><img src={editIcon} alt=""/></Link>
              <Link to="/deletar" className="linkIcon"><img src={delIcon} alt=""/></Link>
              </div>
            </tr>
          </tbody>
        </table>
        </section>
  );
}
export default List;
