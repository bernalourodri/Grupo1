import { Container, Descricao, Momento, Simbolo, Status } from "./style";



const Cartao = ( props ) => (

    <Container> 
        <Simbolo>{props.descr}</Simbolo>
        <Descricao>{props.dept}</Descricao>
        <Momento>{ props.data }</Momento>
        <Status> {props.status}</Status>
    </Container>
);



export default Cartao;