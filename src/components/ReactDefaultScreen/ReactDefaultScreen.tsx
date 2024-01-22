import React from 'react';
import logo from './logo.svg';
import { Box, keyframes } from '@mui/system';
import { Typography, styled } from '@mui/material';

const A = styled('a')``;
const Header = styled('header')``;
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const container = { textAlign: 'center' };
const header = { backgroundColor: '#282c34', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)', color: 'white' };
const image = { height: "40vmin", pointerEvents: 'none', animation: `${spin} infinite 20s linear` };
const link = { color: '#61dafb', fontSize: 30 };

const ReactDefaultScreen = () => {
  return (
    <Box sx={container}>
      <Header sx={header}>
        <Box component="img" src={logo} sx={image} alt="logo" />
        <p>
          Edit <code>src/ReactDefaultScreen.tsx</code> and save to reload.
        </p>
        <A
        sx={link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </A>
      </Header>
    </Box>
  );
}

export default ReactDefaultScreen;
