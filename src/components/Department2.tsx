import { useState } from 'react'
import {
    Box,
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Department2 = () => {
    const [checked, setChecked] = useState([true, false]);
    const [show, setShow] = useState(false)

    const handleChange1 = (event: { target: { checked: boolean; }; }) => {
        setChecked([event.target.checked, event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: { target: { checked: boolean; }; }) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: { target: { checked: boolean; }; }) => {
        setChecked([checked[0], event.target.checked]);
    };
    const handleChange4 = (event: { target: { checked: boolean; }; }) => {
        setChecked([event.target.checked]);
    };


    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="graphic_design"
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label="product_design"
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label="product_design"
                control={<Checkbox checked={checked[0]} onChange={handleChange4} />}
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
            <div>
                <FormControlLabel
                    label="design"
                    control={
                        <Checkbox
                            checked={checked[0] && checked[1]}
                            indeterminate={checked[0] !== checked[1]}
                            onChange={handleChange1}
                        />
                    }
                />
                {!show && (
                    <>
                        {children}
                    </>
                )}
            </div>

        </div>
    );
};

export default Department2;