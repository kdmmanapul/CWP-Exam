import styled from 'styled-components';
import {
    Avatar, 
    Button, 
    Box,
    Container,
    Grid
  } from '@mui/material';

const ContainerLogin = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

const StyledBox = styled(Box)`
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledAvatar = styled(Avatar)`
    margin: 8px;
    background-color: #9C27B0;
`;

const StyledBoxForm = styled(Box)`
    margin-top: 8px;    
`;

const StyledButtonForm = styled(Button)`
    margin-top: 24px;
    margin-bottom: 16px;
`;

const StyledGridContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBoxPopover = styled(Box)`
    padding: 8px;
`;

export {
    ContainerLogin,
    StyledBox,
    StyledAvatar,
    StyledBoxForm,
    StyledButtonForm,
    StyledGridContainer,
    StyledBoxPopover
};