
import { Input } from "reactstrap";
import { CardContainer, CardImage, CardTitle, CardDescription } from "./style";


const Cartao = (props) => (
    function Card({ image, title, description }) {
        return (
          <CardContainer>
            <CardImage src={image} alt={title} />
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardContainer>
        );
      }
      
      
      
);

export default Cartao;