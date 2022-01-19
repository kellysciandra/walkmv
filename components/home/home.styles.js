import styled from 'styled-components';

const Container = styled.div`
    background-color: rgb(255,78,83 );
    width: 100vw;
    height: 300vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid;
`;

const EnterEmail = styled.div`
    top: 10em;
    position: absolute;
    left: 3em;
    color: white;
    display: flex;
    flex-direction: column;

    input {
        text-outline: none;
        color: white;
        width: 20vw;
        font-family: 'Roboto Mono', monospace;
    }
    button {
        font-family: 'Roboto Mono', monospace;
        padding: 1px;
        background-color: orange;
        font-size: 1em;
        border-radius: 10px;
        border: 5px solid blue;
        cursor: pointer;
    }
`
const DisplayEmail = styled.div`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -10px 10px orange, -20px 20px blue, -10px 10px blue;
    font-size: 1em;
    border: 1px solid;
    top: 10em;
    left: 5em;
    padding: 10px;
    position: absolute;
    color: blue;
    background-color: white;
`

const HeaderText = styled.div`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -10px 10px orange, -20px 20px blue, -10px 10px blue;
    font-size: 6em;
    border: 5px solid;
    padding: 10px;
    color: blue;
    position: absolute;
    top: 1em;
    @media only screen and (max-width: 600px) {

    }
`
const SubHeaderText = styled.div`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -10px 10px orange, -20px 20px blue, -10px 10px blue;
    font-size: 3em;
    border: 1px solid;
    padding: 10px;
    color: blue;
    background-color: lightblue;
    position: absolute;
    top: 6.5em;
`

const PollTitle = styled.div`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -10px 10px orange, -20px 20px blue, -10px 10px blue;
    font-size: 1em;
    border: 1px solid;
    top: 27em;
    padding: 10px;
    position: absolute;
    color: blue;
    background-color: white;
`

const SubText = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    color: blue;
    background-color: rgb(255,78,83);
    top: -25em;
    position: relative;

`

const PollContainer = styled.div`
    border: 10px solid;
    width: 1000px;

    position: absolute;
    top: 33em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    padding: 50px;

    button{
        font-family: 'Roboto Mono', monospace;
        cursor: pointer;
        font-size: 1em;
        border: 10px solid;
        padding: 10px;
        color: blue;
        background-color: orange;
        margin-bottom: 1em;
    }
`
const Polar1 = styled.div`
    background-image: url("bcpolar.png");
    position: absolute;
    background-repeat: no-repeat;
    width: 500px;
    height: 500px;
    z-index: 1000;
    top: 30em;
    left: 0em;
`

const Polar2 = styled.div`
    background-image: url("tcpolar.png");
    position: absolute;
    background-repeat: no-repeat;
    width: 500px;
    height: 500px;
    z-index: 1000;
    top: 30em;
    right: 0em;
`;

const Footer = styled.div`

`



const TopThree = styled.div`
    top: 10em;
    position: absolute;
    right: 10em;
    color: white;
`

const Header = styled.div`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -10px 10px orange, -20px 20px blue, -10px 10px blue;
    font-size: 1em;
    border: 1px solid;
    width: 250px;
    padding: 10px;
    position: absolute;
    right: -4em;
    color: blue;
    background-color: white;
`

const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2em;
    padding: 20px;
    width: 400px;
    height: 300px;
    background-color: white;
    border: 1px solid;
    box-shadow: 24;
    font-family: 'Roboto Mono', monospace;

    button {
        margin: 3em;
        font-family: 'Roboto Mono', monospace;
        padding: 10px;
        background-color: orange;
        font-size: .5em;
        border-radius: 10px;
        border: 5px solid blue;
        cursor: pointer;
    }
    .enterEmail {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 1em;
        padding: 30px;
        width: 400px;
        height: 200px;
        font-family: 'Roboto Mono', monospace;
    }
`

export { DisplayEmail, Box, Header, TopThree, Footer, Container, SubText, HeaderText, SubHeaderText, Polar1, Polar2, PollTitle, PollContainer, EnterEmail }