import { useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import PostTable from "./PostTable";

const SecondPage = () => {
    // const navigate = useNavigate()
    const userDetails = localStorage.getItem('userDetails');

    useEffect(() => {
        if (!userDetails) {
            redirect('/');
            alert('You must enter your details first')
        }
    }, [userDetails]);
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Welcome to the Second Page
            </Typography>
            <PostTable />
        </Container>
    );
};

export default SecondPage;