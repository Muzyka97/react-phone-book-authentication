import styled from 'styled-components';

import PropTypes from 'prop-types'; 

const Btn = styled.button`
    margin-left: ${p=>p.theme.space[3]}px;
    background-color: ${p=>p.theme.colors.btn};
    border: ${p=>p.theme.borders.normal};
    border-color:${p=>p.theme.colors.primaryText};
    border-radius: ${p=>p.theme.radii.normal};
    text-decoration: none;
    color: ${p=>p.theme.colors.bg};
    :hover {
      border-color:${p=>p.theme.colors.btn};
      background-color: ${p=>p.theme.colors.bg};
      color: ${p=>p.theme.colors.btn}
      };
`;

const Button = ({children, type, onPress}) => {
    return (
        <Btn type={type} onClick={onPress}>{children}</Btn>
    );
};

Btn.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
};

export default Button;