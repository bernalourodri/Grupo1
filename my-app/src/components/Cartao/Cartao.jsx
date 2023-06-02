import { Container, Descricao, Momento, Simbolo } from "./style";

const Cartao1 = ()=> (
    <Container>
        <Simbolo>Departamento tecnologia</Simbolo>
        
        <Descricao>Suporte tecnico</Descricao>
        <Momento>Espero que esta mensagem encontre vocês bem.
         Meu nome é joao e sou representante da empresa micrmoeros. 
          Gostaria de solicitar o suporte técnico para resolver um problema
            que estamos enfrentando em relação ao nosso aplicativo.</Momento>
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