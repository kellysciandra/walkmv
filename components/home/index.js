import { Container, Text, FormContainer, WalkText, Logo, Feet } from "./home.styles";
import { useFormik } from 'formik';
import { useState } from "react";
import { Typography } from "@material-ui/core";
import { useRouter } from 'next/router'

const HomePage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [shadow, setShadow] = useState('-6px 6px orange, -6px 6px orange, -6px 6px orange');
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone: '',
          pet: ''
        },
        onSubmit: values => {
            setShadow('none')
            router.push("/walk")
          alert(JSON.stringify(values, null, 2));
        },
      });

    return <>
        <Container>
            <Logo/>
            <WalkText>Walk MV</WalkText>
            <Text>Schedule a Visit</Text>
          
            <FormContainer>
                    <Typography sx={{ p: 10 }}>
                        <form onSubmit={formik.handleSubmit}>
                            <label style={{opacity: '.5'}} htmlFor="name">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            <label style={{opacity: '.5'}} tmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <label style={{opacity: '.5'}} htmlFor="email">Phone Number</label>
                            <input
                                id="phone"
                                name="phone"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                            />
                            <label style={{opacity: '.5'}} htmlFor="email">Pet's Name</label>
                            <input
                                id="pet"
                                name="pet"
                                type="pet"
                                onChange={formik.handleChange}
                                value={formik.values.pet}
                            />
                            <button style={{boxShadow: shadow}} type="submit">---></button>
                        </form>
                    </Typography>
                    {console.log(shadow)}
                </FormContainer>
                {/* <Feet/> */}
        </Container>
    </>
};


export default HomePage;