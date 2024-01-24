// import styled from "styled-components";
// import { Box } from "theme-ui";
import { AppBar, Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Navigation from "components/Navigation";
import AuthNav from "components/AuthNav";
import UserMenu from "components/UserMenu";
import Loader from "shared/Loader";

import useIsLogin from '../../hooks/useIsLogin';

// const Header = styled.header`
//     border-bottom: ${p=>p.theme.borders.normal};
//     border-color: ${p=>p.theme.colors.primaryText};
// `;
 
// const styles = {
//     contsiner:{
//         display: 'inline-flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     }
// };
// const FlexContainer = styled.div`
//     display: 'inline-flex';
//     justify-content: 'space-between';
//     align-items: 'center';
// `

const Header = () => {
    const isLoggedIn = useIsLogin();
    
    return(
        <Box>
            <AppBar position="static">
                <Box                  
                    p={1}
                    display='flex'
                    alignItems='center' 
                    flexDirection='row'
                    >
                    <Box  
                        flexGrow={1}
                    >
                        <Navigation/>  
                    </Box>

                    <Box>
                        {isLoggedIn ? <UserMenu /> : <AuthNav />}
                    </Box> 
               </Box>
            </AppBar>
            <Container  sx={{mt: 1}}>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
            </Container>
        </Box>
    )
};
export default Header;