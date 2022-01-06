import styled from "styled-components"

const NavContainer = styled.div`

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

export {NavContainer, HamburgerContainer }