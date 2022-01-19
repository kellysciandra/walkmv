import { Box, Container, Header, EnterEmail, DisplayEmail, Footer, TopThree, HeaderText, SubHeaderText, Polar1, Polar2, PollTitle, PollContainer } from "./home.styles";
import { Input, Modal, Typography} from "@material-ui/core";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    fontFamily: `'Roboto Mono', monospace`
  };

const HomePage = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [vote, setVote] = useState("");
    const [email, setEmail] = useState();
    const [emailExists, setemailExists] = useState(false)

    const handleOpen = (x) => {
        if (email) {
            setVote(x);
            setOpen(true)
        } else {
            setVote(x);
            setOpen(true)
        }
    }

    const handleClose = () => setOpen(false);

    const closeAndSubmit = () => {
        setOpen(false)
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
    };

    const handleClick = () => {
        setemailExists(!emailExists)
    }

    return <>
        <Container>
            {!emailExists ? 
            <EnterEmail>
                <Input
                disableUnderline={true}
                type="email"
                placeholder="Please Enter Your Email To Vote"
                value={email}
                onChange={handleChange}
                /> 
                <button onClick={handleClick}>submit</button>
            </EnterEmail> : <DisplayEmail onClick={handleClick}>{email}</DisplayEmail>
            } 
            <TopThree>
                <Header>
                    Current Top Three <br/> <br/>
                    <span style={{color: 'red'}}>

                 
                    Black Cherry - 78 <br/>
                    Lime - 14 <br/>
                    Toasted Coconut - 8

                    </span>

                </Header>
            </TopThree>
            <HeaderText>The Best Flavor</HeaderText>
            <SubHeaderText>Today's Poll</SubHeaderText>
            <PollTitle>Polar Seltzer</PollTitle>
            <Polar1/>
            <Polar2/>
            {/* <SubText>Time Left: 2 days 15 hours 24 seconds</SubText> */}
            <PollContainer>
                <button onClick={() => handleOpen("Original")}>Original</button>
                <button onClick={() => handleOpen("Lemon")}>Lemon</button>
                <button onClick={() => handleOpen("Lime")}>Lime</button>
                <button onClick={() => handleOpen("Black Cherry")}>Black Cherry</button>
                <button onClick={() => handleOpen("Pomegranate")}>Pomegranate</button>
                <button onClick={() => handleOpen("Cranberry Clementine")}>Cranberry Clementine</button>
                <button onClick={() => handleOpen("Pineapple Pomelo")}>Pineapple Pomelo</button>
                <button onClick={() => handleOpen("Toasted Coconut")}>Toasted Coconut</button>
                <button onClick={() => handleOpen("Cranberry Lime")}>Cranberry Lime</button>
                <button onClick={() => handleOpen("Ruby Red Grapefruit")}>Ruby Red Grapefruit</button>
                <button onClick={() => handleOpen("Pink Apple And Lemon")}>Pink Apple and Lemon</button>
                <button onClick={() => handleOpen("Ginger Lime Mule")}>Ginger Lime Mule</button>
                <button onClick={() => handleOpen("Vanilla")}>Vanilla</button>
                <button onClick={() => handleOpen("Raspberry Lime")}>Raspberry Lime</button>
                <button onClick={() => handleOpen("Orange Vanilla")}>Orange Vanilla</button>
                <button onClick={() => handleOpen("Strawberry Watermelon")}>Strawberry Watermelon</button>
                <button onClick={() => handleOpen("Blueberry Watermelon")}>Blueberry Watermelon</button>
                <button onClick={() => handleOpen("Georgia Peach")}>Georgia Peach</button>
                <button onClick={() => handleOpen("Mandarin")}>Mandarin</button>
                <button onClick={() => handleOpen("Triple Berry")}>Triple Berry</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box>
                        {
                            emailExists ? 
                            <div>
                            Confirm Vote <br/><br/>
                            <span style={{color: 'red'}}>{vote}</span> <br/>
                            <button onClick={closeAndSubmit}> submit </button>
                            </div> :  
                                <span className="enterEmail">
                                    Please Enter Your Email To Vote
                                    <button onClick={handleClose}> back </button>
                                </span> 
                        }
                    </Box>
                </Modal>
            </PollContainer>
            <Footer>

            </Footer>
        </Container>
    </>
};


export default HomePage;