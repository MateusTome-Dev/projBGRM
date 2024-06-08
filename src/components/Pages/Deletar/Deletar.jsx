import "./index.css";
import delIcon from'/public/img/lixeira.png'
function Deletar() {
  return (
    <section className="containerListDel">
        <h1 className="listTitleDel">Deletar ocorrências</h1>
        <table className="listDel">
          <thead className="listHeadDel">
            <tr>
              <th className="listThDel">DATA/HORA</th>
              <th className="listThDel">NATUREZA</th>
              <th className="listThDel">GRUPO</th>
              <th className="listThDel">SUBGRUPO</th>
              <th className="listThDel">BAIRRO</th>
              <th className="listThDel">LAGRADOURO</th>
              <th className="listThDel">ID</th>
            </tr>
          </thead>
          <tbody className="listBodyDel">
            <tr>
              <td className="listTdDel">00/00/00 00:00</td>
              <td className="listTdDel">RESGATE</td>
              <td className="listTdDel">EMERGÊNCIA CLÍNICA</td>
              <td className="listTdDel">CONVULSÃO</td>
              <td className="listTdDel">JD. SANDRA</td>
              <td className="listTdDel">R. INTERNACIONAL</td>
              <td className="listTdDel">1</td>
              <div className="linkIconDel">
              <img src={delIcon} alt=""/>
              </div>
            </tr>
            <tr>
              <td className="listTdDel">00/00/00 00:00</td>
              <td className="listTdDel">RESGATE</td>
              <td className="listTdDel">EMERGÊNCIA CLÍNICA</td>
              <td className="listTdDel">CONVULSÃO</td>
              <td className="listTdDel">JD. SANDRA</td>
              <td className="listTdDel">R. INTERNACIONAL</td>
              <td className="listTdDel">2</td>
              <div className="linkIconDel">
              <img src={delIcon} alt=""/>
              </div>
            </tr>
            <tr>
              <td className="listTdDel">00/00/00 00:00</td>
              <td className="listTdDel">RESGATE</td>
              <td className="listTdDel">EMERGÊNCIA CLÍNICA</td>
              <td className="listTdDel">CONVULSÃO</td>
              <td className="listTdDel">JD. SANDRA</td>
              <td className="listTdDel">R. INTERNACIONAL</td>
              <td className="listTdDel">3</td>
              <div className="linkIconDel">
              <img src={delIcon} alt=""/>
              </div>
            </tr>
          </tbody>
        </table>
        </section>
  );
}
export default Deletar;
