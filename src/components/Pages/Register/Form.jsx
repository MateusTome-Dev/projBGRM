import "./index.css";
function Form() {
  return (
    <section className="registerContainer">
      <h1>Registrar<br className="brTitle" /> ocorrências</h1>
      <div className="containerForm">
        <form action="" method="POST" data-form className="formRegister">
          <label className="labelRegister" htmlFor="Bairro">Bairro</label>
          <input className="inputRegister" type="text" name="Bairro" id="Bairro" placeholder="Digite o bairro..."/>
          <label className="labelRegister" htmlFor="Grupo">Grupo</label>
          <input className="inputRegister" type="text" name="Grupo" id="Grupo" placeholder="Digite o grupo..."/>
          <label className="labelRegister" htmlFor="Descricao">Descrição</label>
          <input className="inputRegister" type="text" name="Descricao" id="Descricao" placeholder="Digite a descrição..."/>

          <label className="labelRegister" htmlFor="datetime">Selecione a data e hora:</label>
          <input className="inputRegister" type="datetime-local" id="datetime" name="datetime" placeholder="Digite a data..."/>
          <label className="labelRegister" htmlFor="Natureza">Natureza</label>
          <input className="inputRegister" type="text" name="Natureza" id="Natureza" placeholder="Digite a natureza..."/>
          <label className="labelRegister" htmlFor="Logradouro">Logradouro</label>
          <input className="inputRegister" type="text" name="Logradouro" id="Logradouro" placeholder="Digite o logradouro..."/>

          <button type="submit" data-button className="btnRegister">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
export default Form;
