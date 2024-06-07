import "./index.css";
function Deletar() {
  return (
    <section className="list">
      <h1>Deletar</h1>
      <div>
      <table>

    <thead>
        <tr className="firstLine">
            <th>DATA/HORA</th>
            <th>NATUREZA</th>
            <th>GRUPO</th>
            <th>SUBGRUPO</th>
            <th>BAIRRO</th>
            <th>LAGRADOURO</th>
            <th>ID</th>
        </tr>
    </thead>
    <tbody>
        <tr className="line">
            <td>00/00/00 00:00</td>
            <td>RESGATE</td>
            <td>EMERGÊNCIA CLÍNICA</td>
            <td>CONVULSÃO</td>
            <td>JD. SANDRA</td>
            <td>R. INTERNACIONAL</td>
            <td>1</td>
        </tr>
        <tr className="line">
            <td>00/00/00 00:00</td>
            <td>RESGATE</td>
            <td>EMERGÊNCIA CLÍNICA</td>
            <td>CONVULSÃO</td>
            <td>JD. SANDRA</td>
            <td>R. INTERNACIONAL</td>
            <td>2</td>
        </tr>
        <tr className="line">
            <td>00/00/00 00:00</td>
            <td>RESGATE</td>
            <td>EMERGÊNCIA CLÍNICA</td>
            <td>CONVULSÃO</td>
            <td>JD. SANDRA</td>
            <td>R. INTERNACIONAL</td>
            <td>3</td>
        </tr>
    </tbody>
</table>
      </div>
    </section>
  );
}
export default Deletar;
