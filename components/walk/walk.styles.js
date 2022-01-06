import styled from 'styled-components';

const Text = styled.div`
    color: black;
    position: absolute;
    top: 4em;
    left: 1em;
    margin: 0;
    font-size: 2em;
    opacity: .5;
`

const SubText = styled.div`
    color: black;
    position: absolute;
    top: 8em;
    left: 3em;
    font-size: 1em;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
   width: 100%;
   height: 150vh;
   border: 10px solid;

`

const WalkButton = styled.div`
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    box-shadow: -3px 3px orange, -2px 2px orange, -1px 1px orange;
    background-color: rgb(255,78,83;
    padding: 10px;
    color: black;
    font-size: 23em;
`

export { Text, Container, SubText, WalkButton }