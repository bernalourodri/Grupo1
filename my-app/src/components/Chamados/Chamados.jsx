
import Menu from "../Menu/Menu";
function Chamados(){
    return(
        <div> 
       
    <h2>Abertura de Chamados</h2>
    <div style={{display: 'flex'}}>
    <h2>Título</h2>
    <input type="name" /><input/>
    <h2>Usuário</h2>
    <input type="name" /><input/>
    <h2>Descriçao</h2>     <input type="name" /><input/>
    </div>
    < div style={{display: 'flex'}}>
    <p>Pessoa Responsável</p>
    <input type="name" /><input/>
    <h2>Departamento enviado</h2>    <p>Tecnologia</p> <p>Comercial</p> <p>Operação</p>
    <h2>Nível de Prioridade</h2>    <p>Crítico</p> <p>Alto</p> <p>Médio</p> <p>Baixo</p>

    
      </div>
    </div>
    )
}
export default Chamados ;