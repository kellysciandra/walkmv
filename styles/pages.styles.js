import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255,78,83 );
    height: 100vh;
    font-family: 'Roboto Mono', monospace;
`;

const BookButton = styled.button`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -10px 10px orange, -20px 20px blue, -10px 10px blue;
    font-size: .75em;
    border: 1px solid;
    top: 50em;
    right: 2em;
    padding: 10px;
    width: 80%;
    position: absolute;
    color: blue;
    background-color: lightblue
`

export {Container, BookButton}