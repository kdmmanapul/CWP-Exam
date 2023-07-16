import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Components
import { Box, Typography, Popover, MenuItem } from '@mui/material';
import {
    NavbarWrapper,
    LeftPartDiv,
    RightPartDiv,
    CenterBox,
    AvatarImage,
    AvatarButton,
    DropdownList,
    Logo
} from './styles';

// Image Assets
import logo from '../../assets/svg/KD-Logo.svg';
import profilePicture from '../../assets/img/Azuki-PFP.png';

const Navbar = ({ userData }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  }

  const open = Boolean(anchorEl);
  const id = open ? 'avatar-popover' : undefined;

  return (
    <NavbarWrapper>
      <LeftPartDiv>
        <Link to="/">
          <Logo src={logo} alt="error" width="93px" height="100px" />
        </Link>
      </LeftPartDiv>
      <RightPartDiv>
        <AvatarButton onClick={handleClick}>
          <CenterBox display="flex" alignItems="center">
            <Typography variant="body1">{userData?.email}</Typography>
            <AvatarImage src={profilePicture} alt="error" />
          </CenterBox>
        </AvatarButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <DropdownList>
            {/* TODO: Add Profile Route */}
            <MenuItem >Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </DropdownList>
        </Popover>
      </RightPartDiv>
    </NavbarWrapper>
  );
};

export default Navbar;