
import { Container, Typography } from "@mui/material";
import PostTable from "./PostTable";

import Department from "./Department";
import Department2 from "./Department2";

const SecondPage = () => {

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom paddingTop={15}>
                User Details
            </Typography>
            <PostTable />

            <div style={{ marginTop: '100px', marginBottom: '100px' }}>

                <Department />
                <Department2 />
            </div>
        </Container>
    );
};

export default SecondPage;