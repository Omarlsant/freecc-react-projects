import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Navbar: React.FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1 }}>
          React Practice Projects
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Inicio
        </Button>
        <IconButton edge="start" color="inherit" aria-label="home" component={Link} to="/">
          <MenuIcon />
        </IconButton>
        {/* Puedes agregar más enlaces de navegación aquí */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
