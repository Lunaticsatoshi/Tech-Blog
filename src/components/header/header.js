import React from 'react';
import Box from '@material-ui/core/Box';


function Header() {
    return (
        <Box className="hero">
            <Box>
                <div className="front">
                    <h2 className="front__header">All Stack</h2>
                    <p className="header__subtitle">Welcome to All stack the place for all things techy</p>
                </div>    
            </Box>
        </Box>
    );
}

export default Header;
