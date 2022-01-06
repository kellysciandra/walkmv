import { Container, Text, PetContainer, WalkText, Logo, Feet } from "./home.styles";
import { Input } from "@material-ui/core";
import { useRouter } from 'next/router'
import { useState } from "react";

const HomePage = () => {
    const router = useRouter()
    const [pet, setPet] = useState();

    const handleChange = (e) => {
        setPet(e.target.value)
    };

    const handleClick = () => {
        router.push({
            pathname: '/dash',
            query: { name: pet }
        })
    };


    return <>
        <Container>
            <Logo/>
            <WalkText>Walk MV</WalkText>
            <Text>Find a sitter <br/> Schedule a walk <br/> Schedule a visit</Text>
            <PetContainer>
                <label>What's your pet's name?</label> <br/>
            <Input
                label="What's your pet's name?"
                type="text"
                value={pet}
                onChange={handleChange}
            /><br/>
            <button onClick={handleClick}>--></button>
            </PetContainer>
        
        </Container>
    </>
};


export default HomePage;