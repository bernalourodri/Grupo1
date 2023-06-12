import styled from "styled-components";

const Status = styled.span`
    font-family: Arial, Helvetica, sans-serif;
`;


const Container = styled.div`
    border-radius: 5px;
    border: solid 1px black;
    background-color: white;
    display: flex;
    flex-direction: column;
    column-gap: 1em;

    margin: 5px;

    @media screen and ( max-width: 768px){
        flex-direction: row;
    }
`;

const Simbolo = styled.span`
    font-weight:normal;
    text-align: center;
    font-size: x-large;

    @media screen and (max-width: 768px){
        font-size: large;
    }
`;

const Descricao = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 1.5em;
`;

const Momento = styled.span`
    font-family: Arial, Helvetica, sans-serif;
`;

export { Container, Simbolo, Descricao, Momento,Status };