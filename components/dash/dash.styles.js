import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px solid rgb(255,78,83);
    height: 100vh;
    margin-top: 0em; 
`
const WelcomeText = styled.div`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -3px 3px orange, -2px 2px orange, -1px 1px orange;
    font-size: 1em;
    border: 1px solid;
    top: 3em;
    padding: 10px;
    position: absolute;
`;

const DatePicker = styled.div`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -3px 3px orange, -2px 2px orange, -1px 1px orange;
    font-size: 1em;
    border: 1px solid;
    top: 27.5em;
    padding: 10px;
    position: absolute;
    input {
        font-family: 'Roboto Mono', monospace;
    }
`

const AddressPicker = styled.div`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -3px 3px orange, -2px 2px orange, -1px 1px orange;
    font-size: 1em;
    border: 1px solid;
    top: 33.5em;
    padding: 10px;
    position: absolute;
    
    input {
        font-family: 'Roboto Mono', monospace;
    }
`
const Text = styled.div`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -3px 3px orange, -2px 2px orange, -1px 1px orange;
    font-size: 1em;
    border: 1px solid;
    top: 7em;
    width: 50%;
    padding: 10px;
    position: absolute;
`

const SubText = styled.div`
    font-family: 'Roboto Mono', monospace;
    opacity: .5;
    font-size: .75em;
    .walk {
        position: relative;
        left: 2em;
        top: -8em;
    }
    .overnight {
        position: relative;
        left: 5em;
        top: -8em;
    }
    .visit {
        position: relative;
        right: 9em;
        top: 1em;
    }
`
const WalkButton = styled.button`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -10px 10px orange, -20px 20px blue, -10px 10px blue;
    font-size: 1em;
    border: 1px solid;
    top: 14em;
    left: 5em;
    padding: 10px;
    position: absolute;
`;

const OvernightButton = styled.button`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -10px 10px red, -20px 20px blue, -10px 10px blue;
    font-size: 1em;
    border: 1px solid;
    top: 14em;
    right: 5em;
    padding: 10px;
    position: absolute;
`;

const VisitButton = styled.button`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -10px 10px yellow, -20px 20px blue, -10px 10px blue;
    font-size: 1em;
    border: 1px solid;
    top: 21em;
    padding: 10px;
    position: absolute;
`

const Footer = styled.div`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -3px 3px orange, -2px 2px orange, -1px 1px orange;
    font-size: 1em;
    border: 1px solid;
    position: absolute;
    top: 38em;
    width: 90%;
    padding: 10px;
`;

const ButtonContainer = styled.div`
    position: absolute;
    top: 40em;
    width: 70%;
    button {
        font-family: 'Roboto Mono', monospace;
        cursor: pointer;
        box-shadow: -6px 6px orange, -6px 6px orange, -6px 6px orange;
        border: 1px solid orange;
        background-color: rgb(255,78,83 );
        padding: 10px;
        color: black;
        font-size: 1em; 
        width: 100%;
    }
`

const PageTwoContainer = styled.div`
    position: absolute;
    top: 5em;
    border: 10px solid green;
    width: 100%;
    font-size: 10em;
`

export { PageTwoContainer, ButtonContainer, AddressPicker, DatePicker, Text, Container, SubText, WalkButton, WelcomeText, OvernightButton, VisitButton, Footer }