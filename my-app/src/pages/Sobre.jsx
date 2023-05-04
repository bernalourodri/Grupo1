import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import Cartao from "../Cartao/Cartao";
import Checkbox from "../Checkbox/Checkbox"
const Sobre = () => (
<>
<Menu />

<h1>Abertura de Chamados</h1>

<div style={{display: 'flex'}}>
    <p>Título</p>
    <Cartao />
    <p>Usuário</p>
    <Cartao />
</div>

<div style={{display: 'flex'}}>
    <p>Pessoa Responsável</p>
    <Cartao />
    <p>Departamento enviado</p>    <p>Tecnologia</p>
    <Checkbox />
</div>

</>
)
export default Sobre;