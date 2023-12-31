import styled from 'styled-components';
import {
    Container,
    Button, 
    Box,
    Typography,
    Input,
} from '@mui/material';

const TimeTrackerContainer = styled(Container)`
    margin-top: 50px;
`;

const TimeTrackerBox = styled(Box)`
    padding: 50px 20px;
`;

const MainDivForTimeTracker = styled(Box)`
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    border: 1px solid #dedede;
    height: fit-content;
    align-items: center;
    background: white;
    justify-content: space-between;

    &:hover .MainDivForTimeTrackingLeftPart {
    border: 1px solid #dedede;
    }
`;

const MainDivForTimeTrackingLeftPart = styled(Input)`
    height: 40px;
    margin: 10px 0px 10px 20px;
    padding: 5px 15px;
    font-size: 14px;
    width: 57%;

    &.MuiInputBase-root {
        border: none;
        &:hover,
        &:focus {
            border: 1px solid #dedede;
        }
    }
`;

const MainDivForTimeTrackingRightPart = styled(Box)`
    display: flex;
    align-items: center;
    gap: 25px;
    margin-right: 10px;
`;

const MainDivForTimeTrackingRightPartSubDiv = styled(Box)`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const TypographyTime = styled(Typography)`
    font-weight: 600;
    font-size: 18px;
`;

const ButtonTimer = styled(Button)`
  padding: 10px 30px;
  font-size: 14px;
  line-height: 1.4;
  border-radius: 2px;
  background-color: #03a9f4;
  color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #0795d6;
  }
`;

const BoxImage = styled(Box)`
    display: grid;
    gap: 10px;
`;

const BoxMargin = styled(Box)`
    margin-top: 16px;
`;

const TypographyText = styled(Typography)`
    font-size: 14px;
`;

const BoxWeeklyTotal = styled(Box)`
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #9C9C9C;
`;

const TypographyWeeklyTime = styled(Typography)`
    font-size: 18px;
    padding: 0px 10px;
    font-weight: 500;
    color: black;
`;

export {
    TimeTrackerContainer,
    TimeTrackerBox,
    MainDivForTimeTracker,
    MainDivForTimeTrackingLeftPart,
    MainDivForTimeTrackingRightPart,
    MainDivForTimeTrackingRightPartSubDiv,
    TypographyTime,
    ButtonTimer,
    BoxImage,
    BoxMargin,
    TypographyText,
    BoxWeeklyTotal,
    TypographyWeeklyTime
};