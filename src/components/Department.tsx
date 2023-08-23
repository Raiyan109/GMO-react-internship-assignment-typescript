import { useState } from 'react'
import {
    Box,
    Checkbox,
    FormControlLabel,
    // Slide, Fade
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const Department = () => {
    const [checked, setChecked] = useState([true, false]);
    const [show, setShow] = useState(false)

    const handleChange1 = (event: { target: { checked: boolean; }; }) => {
        setChecked([event.target.checked, event.target.checked]);
        // setShow(true)
    };

    const handleChange2 = (event: { target: { checked: boolean; }; }) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: { target: { checked: boolean; }; }) => {
        setChecked([checked[0], event.target.checked]);
    };


    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="support"
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label="customer_success"
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
        </Box>
    );

    return (
        <div style={{ display: 'flex' }}>
            <div
                style={{ padding: '10px', cursor: 'pointer' }}
                onClick={() => setShow(!show)}>
                {show ? <AddIcon /> : <RemoveIcon />}
            </div>
            {/* <Slide direction="down" in={show} timeout={600}> */}
            <div
                style={{
                    padding: '10px',
                    backgroundColor: '',
                    transition: 'ease',
                    transitionDuration: '0.4s',
                    transitionDelay: '1s'
                }}
            >
                <FormControlLabel
                    label="customer_service"
                    control={
                        <Checkbox
                            checked={checked[0] && checked[1]}
                            indeterminate={checked[0] !== checked[1]}
                            onChange={handleChange1}
                        />
                    }
                />
                {/* <Box sx={{ display: 'flex' }}>
                        <Fade in={checked[0] || checked[1]}> */}
                {!show && (
                    <>
                        {children}
                    </>
                )}
                {/* </Fade>
                    </Box> */}

            </div>
            {/* </Slide> */}

        </div>
    );
};

export default Department;