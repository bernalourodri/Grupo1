import { Container, Descricao, Momento, Simbolo } from "./style";

const Cartao1 = ()=> (
    <Container>
        <Simbolo>Entrega</Simbolo>
        <Descricao>Departamento</Descricao>
        <Momento>Tecnologia</Momento>
    </Container>
);
const Cartao2 = ()=> (
    <Container>
        <Simbolo>Entrega feita</Simbolo>
        <Descricao>Departamento</Descricao>
        <Momento>Comercial</Momento>
    </Container>
);

export {Cartao1,Cartao2};