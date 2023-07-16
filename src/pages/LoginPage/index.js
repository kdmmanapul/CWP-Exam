import React, { useState } from 'react';
import {TextField, FormControlLabel, Checkbox, Link, Typography, Grid, Popover} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import {ContainerLogin, StyledBox, StyledAvatar, StyledBoxForm, StyledButtonForm, StyledGridContainer, StyledBoxPopover} from './styles';

const LoginPage = () => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = data.get('email');
        const password = data.get('password');
        setEmailError(false);
        setPasswordError(false);

        if (!email || !emailRegex.test(email)) {
          setEmailError(true);
          setAnchorEl(event.currentTarget.email);
          return;
        }
    
        if (!password) {
          setPasswordError(true);
          setAnchorEl(event.currentTarget.password);
          return;
        }
        const userData = {
          email: email,
          password: password,
          loggedOn: true,
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/');
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const popoverId = open ? 'email-popover' : undefined;

    return (
        <ContainerLogin component="main" maxWidth="xs">
            <StyledBox>
            <StyledAvatar>
                <LockOutlinedIcon />
            </StyledAvatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <StyledBoxForm component="form" onSubmit={handleSubmit} noValidate >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={emailError}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={passwordError}
                />
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                <StyledButtonForm type="submit" fullWidth variant="contained">
                Sign In
                </StyledButtonForm>
                <StyledGridContainer container>
                    <Grid item>
                        <Link href="/sign-up" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </StyledGridContainer>
            </StyledBoxForm>
            </StyledBox>
            <Popover
                id={popoverId}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
            <StyledBoxPopover >
                <Typography variant="body2" color="error">
                    {emailError ? 'Please enter a valid email address.' : 'Please enter your password.'}
                </Typography>
            </StyledBoxPopover>
            </Popover>
        </ContainerLogin>
  );
}

export default LoginPage;
