import styled from 'styled-components';
import {
    Box,
    Typography,
  } from '@mui/material';

const ProjectListContainer = styled(Box)`
    margin: 20px 0px;
    border: 1px solid #9c9c9c;
    background: #e4eaee;
    border-radius: 3px;
`;

const MainProjectList = styled(Box)`
    display: flex;
    height: 60px;
    width: 100%;
    align-items: center;
    background: white;
    border-bottom: 5px solid #9c9c9c;
    justify-content: space-between;
`;

const MainProjectListRightSubPart = styled(Box)`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const ProjectListTotal = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
`;

const BoxTotal = styled(Box)`
    font-size: 12px;
    display: flex;
    align-ttems: center; 
    color: #9c9c9c;
`;

const HeaderText = styled(Typography)`
    font-size: 12px;
    color: #9c9c9c;
`;

const TotalText = styled(Typography)`
    font-size: 18px;
    padding: 0px 10px;
    font-weight: 500; 
    color: black;
`;

const ProjectDetail = styled(Box)`
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    width: 100%;
`;

const ProjectDetailTitle = styled(Box)`
    font-size: 14px;
    padding: 0px 10px; 
    flex: 1;
`;

const ProjectTitleText = styled(Typography)`
    font-size: 14px;
    color: #03a9f4; 
    font-weight: 500; 
    margin-right: 1.5vw;
`;

const ProjectDetailTimerContainer = styled(Box)`
    display: flex;
    align-items: center; 
    justify-content: space-around;
    width: fit-content;
`;

const ProjectDetailTimer = styled(Box)`
    display: flex;
    gap: 10px;
    margin: 0px; 
    border-left: 1px solid #e4eaee;
    padding: 0px 10px;
`;

const ProjectDetailPlayButton = styled(Box)`
    margin: 0px;
    border-left: 1px solid #e4eaee;
    padding: 0px 10px;
`;

const ProjectDetailDeleteButton = styled(Box)`
    margin: 0px;
    border-left: 1px solid #e4eaee; 
    padding: 0px 10px;
`;

const CreatedAtText = styled(Typography)`
    font-size: 12px;
    margin-left: 10px;
`;

export {
    ProjectListContainer,
    ProjectListTotal,
    BoxTotal,
    HeaderText,
    TotalText,
    ProjectDetail,
    ProjectDetailTitle,
    ProjectTitleText,
    ProjectDetailTimerContainer,
    ProjectDetailTimer,
    ProjectDetailPlayButton,
    ProjectDetailDeleteButton,
    CreatedAtText,
    MainProjectList,
    MainProjectListRightSubPart
};