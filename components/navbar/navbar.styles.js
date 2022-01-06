import styled from "styled-components"

const NavContainer = styled.div`
    background-color: rgb(255,78,83 );
    width: 150!important;
    /* height: 100vh; */
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
    }
`;

const LinkWrapper = styled.div`
    color: black;
    font-family: 'Noto Sans', sans-serif;

    button {
        border: 2px solid;
        font-family: 'Noto Sans', sans-serif;
        font-size: 1em;
        border-radius: 50px;
        margin-top: 1em;
        border-color: rgb(255,78,83, .4);
        background-color: rgb(255,78,83 );
        color: white;
    }

    @media only screen and (max-width: 600px) {
   
    }
`;

const HamburgerContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    opacity: 0.9;
    display: flex;
    align-items: center;
    background-color: rgb(255,78,83 );
    width: 100%;
    color: white; 
`

export {NavContainer, LinkWrapper, HamburgerContainer }