import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

// Components
import { 
    Container,
    Select,
    MenuItem,
    Grid,
    Typography,
} from '@mui/material';
import {
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
} from './styles';
import ProjectList from '../../components/ProjectList';

// Image Assets
import list from '../../assets/svg/list-blue.svg';
import clock from '../../assets/svg/clock-blue.svg';

const Homepage = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState();
    const [dateTime, setDateTime] = useState(null);
    const [watch, setWatch] = useState(0);
    const [input, setInput] = useState('');
    const [timer, setTimer] = useState(null);
    const [check, setCheck] = useState(true);
    const startTime = useRef(null);
    const [projectData, setProjectData] = useState([]);
    const [selectedProject, setSelectedProject] = useState('Project');

    useEffect(() => {
        // Load projectData from localStorage
        const userData = localStorage.getItem('userData');
        if (userData) {
          const user = JSON.parse(userData);
          setUserData(user);
          if (!user.loggedOn) {
            navigate('/login');
          }
        } else {
          navigate('/login');
        }
      }, []);
    
      useEffect(() => {
        // Load projectData from localStorage
        const storedProjectData = localStorage.getItem('projectData');
        if (storedProjectData) {
          setProjectData(JSON.parse(storedProjectData));
        }
      }, []);
    
      useEffect(() => {
        return () => {
          clearInterval(timer);
        };
      }, [timer]);
      
      // Time Recording Functions
      const start = () => {
        const x = new Date();
        startTime.current = x.getHours() + ':' + x.getMinutes();
        setCheck(!check);
        if (!timer) {
          const id = setInterval(() => {
            setWatch((prevWatch) => prevWatch + 10);
          }, 10);
          setTimer(id);
        }
        setDateTime(new Date());
      };
    
      const stop = () => {
        const y = new Date();
        setCheck(!check);
        clearInterval(timer);
        setWatch(0);
        setTimer(null);
        setInput('');
        const newProject = {
          title: input,
          starttime: startTime.current,
          endtime: y.getHours() + ':' + y.getMinutes(),
          timediff: watch,
          createdAt: dateTime,
          selectedProject: selectedProject,
        };
        setProjectData((prevData) => [...prevData, newProject]);
        localStorage.setItem('projectData', JSON.stringify([...projectData, newProject]));
      };
    
      function msToTime(duration) {
        const durationMoment = moment.utc(duration).format('HH:mm:ss');
        return durationMoment;
      }
    
      const calculateTotalTime = () => {
        const totalTime = projectData.reduce((sum, project) => sum + project.timediff, 0);
        return totalTime;
      };
    
      const handleDeleteProject = (taskIndex) => {
        setProjectData((prevData) => {
          const updatedData = prevData.filter((project, idx) => idx !== taskIndex);
          localStorage.setItem('projectData', JSON.stringify(updatedData));
          return updatedData;
        });
      };
    
      const handleProjectSelect = (event) => {
        setSelectedProject(event.target.value);
      };

    return (
        <Container>
            <TimeTrackerBox>
                <MainDivForTimeTracker>
                    <MainDivForTimeTrackingLeftPart
                        placeholder="What are you working on?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <MainDivForTimeTrackingRightPart>
                    <MainDivForTimeTrackingRightPartSubDiv>
                        <Select
                            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            value={selectedProject}
                            onChange={handleProjectSelect}
                            autoFocus
                        >
                        <MenuItem value="Project" disabled>
                            Project
                        </MenuItem>
                        <MenuItem value="Project A">Project A</MenuItem>
                        <MenuItem value="Project B">Project B</MenuItem>
                        <MenuItem value="Project C">Project C</MenuItem>
                        </Select>
                    </MainDivForTimeTrackingRightPartSubDiv>
                    <TypographyTime>{msToTime(watch)}</TypographyTime>
                    <ButtonTimer variant="contained" color="primary" onClick={check ? start : stop}>
                        {check ? 'START' : 'STOP'}
                    </ButtonTimer>
                    <BoxImage>
                        <img src={clock} alt="error" />
                        <img src={list} alt="error" />
                    </BoxImage>
                    </MainDivForTimeTrackingRightPart>
                </MainDivForTimeTracker>
                <BoxMargin>
                    <Grid container justifyContent="space-between">
                    <TypographyText>This Week</TypographyText>
                    <BoxWeeklyTotal>
                        Week Total:
                        <TypographyWeeklyTime variant="body1" >
                            {msToTime(calculateTotalTime())}
                        </TypographyWeeklyTime>
                    </BoxWeeklyTotal>
                    </Grid>
                </BoxMargin>
                <BoxMargin>
                    {projectData.map((project, index) => (
                        <ProjectList
                            key={index}
                            e={project}
                            idx={index}
                            onDelete={handleDeleteProject}
                            selectedProject={selectedProject}
                        />
                    ))}
                </BoxMargin>
            </TimeTrackerBox>
        </Container>
    );
};

export default Homepage;
