import "./index.css";
function Editar() {
  return (
    <section className="editarContainer">
      <h1 >Editar<br className="brTitleEdit" /> ocorrências</h1>
      <div className="containerFormEdit">
        <form action="" method="POST" data-form className="formEditar">
          <label className="labelEdit" htmlFor="ID">Identificador</label>
          <input className="inputEdit" type="text" name="ID" id="ID" placeholder="Digite o identificador..."/>
          <label className="labelEdit" htmlFor="Bairro">Bairro</label>
          <input className="inputEdit" type="text" name="Bairro" id="Bairro" placeholder="Digite o bairro..."/>
          <label className="labelEdit" htmlFor="Grupo">Grupo</label>
          <input className="inputEdit" type="text" name="Grupo" id="Grupo" placeholder="Digite o grupo..."/>
          <label className="labelEdit" htmlFor="Descricao">Descrição</label>
          <input className="inputEdit" type="text" name="Descricao" id="Descricao" placeholder="Digite a descrição..."/>
          <label className="labelEdit" htmlFor="datetime">Selecione a data e hora:</label>
          <input className="inputEdit" type="datetime-local" id="datetime" name="datetime" placeholder="Digite a data..."/>
          <label className="labelEdit" htmlFor="Natureza">Natureza</label>
          <input className="inputEdit" type="text" name="Natureza" id="Natureza" placeholder="Digite a natureza..."/>
          <label className="labelEdit" htmlFor="Logradouro">Logradouro</label>
          <input className="inputEdit" type="text" name="Logradouro" id="Logradouro" placeholder="Digite o logradouro..."/>

          <button className="btnEdit" type="submit" data-button>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
export default Editar;
