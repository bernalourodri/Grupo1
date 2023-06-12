import dados from "../Data/informacoes.json"
import { useState } from "react";
import { Container } from "../ChamadosEMA/style";
import { RiSearchLine } from 'react-icons/ri';
import Cartao from "../Cartao/Cartao";


function ChamadosEMA() {
    const [info, setInfo] = useState(dados);
 

    const filtra = (entrada) =>{
        setInfo(dados.filter( (e) => e.status.includes(entrada)));
    }

    return (
        <>
        <Container>
        <input type='text'placeholder="Filtrar por Status" onChange={(e) => filtra(e.target.value)}/> <button>
      <RiSearchLine />
    </button>
        {
            info.map(
                (ele, ind) => (
                <Cartao
                        key={ind}
                        descr={ele.descricao}
                        dept={ele.departamento}
                        data={ele.data}
                        status={ele.status}
                /> 
                )
            )
            
        }
        </Container>
        </>
    )
};
  
  
  export default ChamadosEMA;
  