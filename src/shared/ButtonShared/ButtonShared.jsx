// import styled from 'styled-components';

import PropTypes from 'prop-types'; 
import {Button} from '@mui/material';
// const Btn = styled.button`
//     margin-left: ${p=>p.theme.space[3]}px;
//     background-color: ${p=>p.theme.colors.btn};
//     border: ${p=>p.theme.borders.normal};
//     border-color:${p=>p.theme.colors.primaryText};
//     border-radius: ${p=>p.theme.radii.normal};
//     text-decoration: none;
//     color: ${p=>p.theme.colors.bg};
//     :hover {
//       border-color:${p=>p.theme.colors.btn};
//       background-color: ${p=>p.theme.colors.bg};
//       color: ${p=>p.theme.colors.btn}
//       };
// `;

const ButtonShared = ({children, type, onPress}) => {
    return (
        <Button size="small" variant="contained" disableElevation type={type} onClick={onPress}>{children}</Button>
    );
};

ButtonShared.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
};

export default ButtonShared;