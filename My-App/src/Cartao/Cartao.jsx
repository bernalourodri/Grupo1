
import { Container, Descricao, Momento, Simbolo } from "./style";

const Cartao = (props) => (
    <Container>
        <Simbolo>{props.simb}</Simbolo>
        <Descricao>dsofisdabyfvsdaucisbysavcisbcisadcydsvb
            dbcuasdbciusbciuscffytdytfjgufsgushfshadfahkjf
            dcbadsiucuidsbcosbiucbsiudbcuipsbcuisbucibscui
        </Descricao>
        <Momento>{props.data}</Momento>
    </Container>
);

export default Cartao;