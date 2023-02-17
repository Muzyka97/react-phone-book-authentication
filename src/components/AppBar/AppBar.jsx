import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Navigation from "components/Navigation";
import AuthNav from "components/AuthNav";
import UserMenu from "components/UserMenu";
import Loader from "shared/Loader";

import useIsLogin from '../../hooks/useIsLogin';


const Header = styled.header`
    border-bottom: ${p=>p.theme.borders.normal};
    border-color: ${p=>p.theme.colors.primaryText};
`;
 
const styles = {
    contsiner:{
        display: 'inline-flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
};
// const FlexContainer = styled.div`
//     display: 'inline-flex';
//     justify-content: 'space-between';
//     align-items: 'center';
// `;
// FlexContainer непрацює адже перебивається user agent stylesheet

const AppBar = () => {
    const isLoggedIn = useIsLogin();

    return(
        <>
            <Header>
                <div style={styles.contsiner}>
                <Navigation/>
               {isLoggedIn ? <UserMenu /> : <AuthNav />}   
               </div>
            </Header>
            <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
            </main>
        </>
    )
};
export default AppBar;