import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import {
    TextField, 
    FormControlLabel, 
    Checkbox, 
    Link, 
    Typography, 
    Grid, 
    Popover
} from '@mui/material';
import {
    ContainerSignUp, 
    StyledBox, 
    StyledAvatar, 
    StyledBoxForm, 
    StyledButtonForm, 
    StyledBoxPopover
} from './styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignUpPage = () => {
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
        navigate('/login');
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const popoverId = open ? 'email-popover' : undefined;

    return (
        <ContainerSignUp component="main" maxWidth="xs">
            <StyledBox>
                <StyledAvatar>
                    <LockOutlinedIcon />
                </StyledAvatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <StyledBoxForm component="form" noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            error={emailError}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            error={passwordError}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                    </Grid>
                    </Grid>
                    <StyledButtonForm
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                            Sign Up
                    </StyledButtonForm>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                            Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
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
        </ContainerSignUp>
    );
}

export default SignUpPage;