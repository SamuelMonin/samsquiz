import React from "react";
import Box from '@mui/material/Box';

const Header = () => {
    
    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                color: 'secondary.contrastText',
                py: 2,
                width: '100%',
                textAlign: "center"
            }}
        >
            Sam's quiz
        </Box>
    )
}

export default Header