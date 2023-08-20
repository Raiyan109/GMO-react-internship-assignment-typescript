import { FormControl, InputLabel, Input, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage: React.FC = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    const handleSubmit = () => {
        if (name && phoneNumber && email) {
            const userDetails = { name, phoneNumber, email };
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
            navigate('/second-page');
        }

        if (!name && !phoneNumber && !email) {
            // redirect('/');
            alert('You must enter your details first')
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', gap: '20px' }}>

                <h1>Input your details </h1>
                <FormControl>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-describedby="my-helper-text" />

                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="phone">Phone</InputLabel>
                    <Input id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        aria-describedby="my-helper-text" />

                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-describedby="my-helper-text" />

                </FormControl>

                <Button variant="contained" onClick={handleSubmit}>Contained</Button>
            </div>
        </div>
    );
};

export default FormPage;