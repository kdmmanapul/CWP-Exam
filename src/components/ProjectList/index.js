import React from 'react';
import moment from 'moment';

// Components
import { Typography } from '@mui/material';
import {
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
} from './styles';

// Image Assets
import playButton from '../../assets/svg/play.svg';
import deleteButton from '../../assets/img/delete.png';

const ProjectList = ({ e, idx, onDelete }) => {
  function msToTime(duration) {
    const durationMoment = moment.utc(duration).format('HH:mm:ss');
    return durationMoment;
  }

  function formatTimestamp(timestamp) {
    const formattedDate = moment(timestamp).format('MMMM D, YYYY');
    const formattedTime = moment(timestamp).format('h:mm A');
    return `${formattedDate}, ${formattedTime}`;
  }

  return (
    <ProjectListContainer>
      <ProjectListTotal>
        <HeaderText>Today</HeaderText>
        <BoxTotal>
          Total:{' '}
          <TotalText variant="body1">
            {msToTime(e.timediff)}
          </TotalText>{' '}
        </BoxTotal>
      </ProjectListTotal>
      <MainProjectList>
        <ProjectDetail>
          <ProjectDetailTitle>{e.title}</ProjectDetailTitle>
          <MainProjectListRightSubPart>
            <ProjectTitleText>
              {e.selectedProject ? e.selectedProject : 'Project'}
            </ProjectTitleText>
          </MainProjectListRightSubPart>
          <ProjectDetailTimerContainer>
            <ProjectDetailTimer>
              <Typography>{e.starttime}</Typography>
              <Typography>-</Typography>
              <Typography>{e.endtime}</Typography>
            </ProjectDetailTimer>
            <Typography style={{ margin: '0px', borderLeft: '1px solid #e4eaee', padding: '0px 10px', fontWeight: '600', fontSize: '18px' }}>
              {msToTime(e.timediff)}
            </Typography>
            <ProjectDetailPlayButton>
              <img src={playButton} alt="error" width="20px" height="20px" />
            </ProjectDetailPlayButton>
            <ProjectDetailDeleteButton>
              <img src={deleteButton} alt="error" width="30px" height="30px" onClick={() => onDelete(idx)} />
            </ProjectDetailDeleteButton>
          </ProjectDetailTimerContainer>
        </ProjectDetail>
        <CreatedAtText variant="caption" style={{ fontSize: '12px', marginLeft: '10px' }}>
          Created At: {formatTimestamp(e.createdAt)}
        </CreatedAtText>
      </MainProjectList>
    </ProjectListContainer>
  );
};

export default ProjectList;
