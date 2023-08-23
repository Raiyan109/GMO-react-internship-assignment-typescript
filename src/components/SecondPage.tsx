import { useEffect } from "react";
import { redirect } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import PostTable from "./PostTable";
import Check from "./Check";
import DepartmentList from "./DepartmentList";
import DepartmentCheckbox from "./DepartmentCheck";
import DepartmentCheck from "./DepartmentCheck";
import Department from "./Department";
import Department2 from "./Department2";

const SecondPage = () => {

    const departmentsData = [
        {
            department: 'customer_service',
            sub_departments: ['support', 'customer_success']
        },
        {
            department: 'design',
            sub_departments: ['graphic_design', 'product_design', 'web_design']
        }
    ];
    // const navigate = useNavigate()
    // const userDetails = localStorage.getItem('userDetails');

    // useEffect(() => {
    //     if (!userDetails) {
    //         redirect('/');
    //         alert('You must enter your details first')
    //     }
    // }, [userDetails]);


    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom paddingTop={15}>
                User Details
            </Typography>
            <PostTable />

            <div style={{ marginTop: '100px', marginBottom: '100px' }}>
                {/* {departmentsData.map(department => (
                    <DepartmentCheckbox key={department.department} departmentData={department} />
                ))} */}
                <Department />
                <Department2 />
            </div>
        </Container>
    );
};

export default SecondPage;