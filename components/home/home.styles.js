import styled from 'styled-components';

const Container = styled.div`
    background-color: rgb(255,78,83 );
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 1.75em;
    opacity: .7;
    position: relative;
    top: 1em;
    /* margin-top: 8em; */
`
const FormContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    color: black;
    background-color: rgb(255,78,83);
    top: 6em;
    right: 3em;
    position: relative;

    input {
        font-family: 'Roboto Mono', monospace;
        border: none;
        display: flex;
        color: black;
        background-color: rgb(255,78,83 );
        border-bottom: 1px solid black;
        width: 150%;
        outline: none;
    }
    button {
        font-family: 'Roboto Mono', monospace;
        cursor: pointer;
  
        border: 1px solid orange;
        background-color: rgb(255,78,83 );
        padding: 10px;
        color: black;
        font-size: 1em;
        margin-top: 2em;
        
    }
`

const Logo = styled.div`
    background-image: url("logo.png");
    position: absolute;
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    margin-top: 10em;

    @media only screen and (max-width: 600px) {
        top: -8em;
        left: 7em;
    }
`;

const Feet = styled.div`
    background-image: url("feet.png");
    position: absolute;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    
    @media only screen and (max-width: 600px) {
        top: -3em;
        left: 12em;
        opacity: .2;
    }
`;

const WalkText = styled.div`
  
    font-family: 'Roboto Mono', monospace;
    @media only screen and (max-width: 600px) {
        position: absolute;
        font-size: 3em;
        top: 4em;
        color: black;
        opacity: .7;
        box-shadow: -6px 6px orange, -6px 6px orange, -6px 6px orange;
        border: 1px solid orange;
        background-color: rgb(255,78,83 );
    }
`

export { Container, Text, FormContainer, Logo, WalkText, Feet }