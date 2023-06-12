import styled from "styled-components";

const MeuNav = styled.nav`
  @media screen and (min-width: 768px){
      flex-direction:row;
      font-size: large;
   }
    flex-direction: row;
    gap: 2em;
    padding: 10px;
    display: flex;
    color: #264D70;
    justify-content: center;
    align-items: center;

    a{
    text-decoration: none;
}
`;



const Container = styled.div`

color: white;
`

export{ MeuNav,Container} ;