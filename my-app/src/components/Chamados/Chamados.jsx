import Menu from "../Menu/Menu";
import { MeuNav } from "./style";
import {Container, FormContainer, Input, Button, tamTablet, Descr} from "./style";

function Chamados(){
    return(
      <Container>
        <FormContainer>
          <h1>Abertura de Chamado</h1>
          <Input type="text" placeholder="Título" />
          <Input type="text" placeholder="Usuário" />
          <Input type="text" placeholder="Pessoa Responsável" />
          <div id="Departamento enviado">
            <p>Departamento enviado:</p>
            <input type="checkbox" id = "tecnologia" name = "tecnologia" value = "tecnologia" />
            <label for = "tecnologia">Tecnologia</label>
            <input type="checkbox" id = "comercial" name = "comercial" value = "comercial" />
            <label for = "comercial">Comercial</label>
            <input type="checkbox" id = "operacoes" name = "operacoes" value = "operacoes" />
            <label for = "operacoes">Operações</label>
          </div>
          <div id="Nivel prioridade">
            <p>Nível de prioridade:</p>
            <input type="radio" name="opcao" value="critico" /> Crítico<br />
            <input type="radio" name="opcao" value="alto" /> Alto<br />
            <input type="radio" name="opcao" value="medio" /> Médio<br />
            <input type="radio" name="opcao" value="baixo" /> Baixo<br />
          </div>

          <p>Descrição:</p>
          <Descr type = "text" />
          <Button>Enviar</Button>
      </FormContainer>
  </Container>
    )
}
export default Chamados ;