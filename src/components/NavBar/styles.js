import styled from 'styled-components';
import {
    Box,
    Typography,
    Button
  } from '@mui/material';

const NavbarWrapper = styled(Box)`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: fixed;
    top: 0;
    z-index: 10000;
    background: white;
`;

const LeftPartDiv = styled(Box)`
    width: fit-content;
    display: flex;
    gap: 20px;
    margin-left: 14px;
    align-items: center;
    cursor: pointer;
`;

const RightPartDiv = styled(Box)`
    width: fit-content;
    display: flex;
    gap: 15px;
    align-items: center;
    padding-right: 10px;
`;

const CenterBox = styled(Box)`
    display: flex;
    align-items: center;
`;

const AvatarImage = styled.img`
  width: 30px;
  border-radius: 50px;
  margin-left: 10px;
`;

const AvatarButton = styled(Button)`
    padding: 4px 8px;
    font-size: 12px;
    line-height: 1.4;
    border-radius: 2px;
    color: #03a9f4;
    border: 1px solid;
    border-color: #03a9f4;
    cursor: pointer;
    font-weight: 600;
    &:hover {
    background-color: #03a9f4;
    color: white;
    }
`;

const DropdownList = styled(Box)`
    padding: 16px;
`;

const Logo = styled.img`
    margin-top: 15px;
    height: 100px;
    width: 300px;
`;

export {
    NavbarWrapper,
    LeftPartDiv,
    RightPartDiv,
    CenterBox,
    AvatarImage,
    AvatarButton,
    DropdownList,
    Logo
};