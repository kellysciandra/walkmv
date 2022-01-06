import {Input, Button} from "@material-ui/core";
import { useState } from 'react';
import { DatePicker, ButtonContainer, Footer, Container, WalkButton, Text, WelcomeText, OvernightButton, VisitButton, SubText, AddressPicker } from './dash.styles'
import { useRouter } from 'next/router'
import DashTwo from "./dashTwo";
import { Link, animateScroll as scroll } from "react-scroll";

const DashPage = () => {
    const router = useRouter()
    const [date, setDate] = useState()
    const [address, setAddress] = useState()
    const [service, setService] = useState()
    const [loadNextPage, setLoadNextPage] = useState(false);

    const handleChangeDate = (e) => {
        setDate(e.target.value)
    };

    const handleChangeAddress = (e) => {
        setAddress(e.target.value)
    };


    const handleClick = (x) => {
        setService(x)
    };

    const handleSubmit = () => {
        setLoadNextPage(!loadNextPage)
   
            scroll.scrollTo("two");
        
    };
    
    return <>
        <Container>
            <WelcomeText>Hi {router.query.name} and family</WelcomeText>
            <Text>What type of service do you need?</Text>
            <WalkButton onClick={() => handleClick("Walk")}>Walk</WalkButton>
            <SubText>
                <div className="walk">30 minutes</div>
            </SubText>
            <OvernightButton onClick={() => handleClick("Overnight")}>Overnight</OvernightButton>
            <SubText>
                <div className="overnight">Must be scheduled <br/>48 hours in advance</div>
            </SubText>
            <VisitButton onClick={() => handleClick("Visit")}>Visit</VisitButton>
            <SubText>
                <div className="visit">15 minutes</div>
            </SubText>
            <DatePicker>
            Pick a Date <br/>
            <Input
            type="date"
            onChange={handleChangeDate}
            value={date}
            />
            </DatePicker>
            <AddressPicker>
            <Input
                type="address"
                placeholder="what's your address"
                onChange={handleChangeAddress}
                value={address}
            /><br/>
            </AddressPicker>
            <ButtonContainer>
            <button onClick={handleSubmit}><Link to='two' spy={true} smooth={true}>next</Link></button>
            </ButtonContainer>
            {
                loadNextPage && <DashTwo/>
            }
          
            {/* <Footer>Please verify your info
                <br/>Name: 
                <br/>Email:
                <br/>Date: {date}
                <br/>Address: {address}
                <br/>Pet's Name: {router.query.name}
                <br/>Service: {service}
            </Footer> */}
        </Container>
        
    </>
};

export default DashPage