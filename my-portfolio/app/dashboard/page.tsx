import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AppBar, Button, Card, Grid, Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image'

const Dashboard = () => {
  return (
    <>
   <AppBar position='static' className='bg-[transparent] shadow-none mb-3 text-gray-400'>
    <Container>
        <Toolbar className='d-flex justify-between px-0'>
          <Box>
          <Button><SearchOutlinedIcon className='text-gray-400'/></Button>
          </Box>
          <Box>
            <Button><WbSunnyOutlinedIcon /></Button>
          <Button variant="outlined" className=' border-2 rounded-full border-[--border-gray]'>
          <span className='mr-2'>Priyanka</span>
      <Avatar alt="Priyanka" src="/images/profile.jpg" />
          </Button>                      </Box>
        </Toolbar>
    </Container>
       </AppBar>
    <Container sx={{height: '100vh' }}>
      <Paper sx={{position:"relative"}}>
      <Box className='min-h-40 w-full' sx={{position:"absolute"}}>
        <Card ><img src='https://images.unsplash.com/photo-1512273222628-4daea6e55abb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='object-cover max-h-[200px] w-full opacity-60'></img></Card>
      </Box>
      <Box className='d-flex justify-center w-full'>
      <Box className="d-flex justify-center">
      <Badge color="primary" className ="h-40 w-40 d-block mx-auto top-[100px]"sx={{
    display: "block",
    verticalAlign: "middle",
    flexShrink: "0"}}>
      <img alt='profileh' src='/images/profile.jpg' className='w-full h-full shadow-md object-cover rounded-full'/>
    </Badge>
      </Box>
      </Box>
      <Box  className="mt-[100px]">
        <h4 className='text-center text-lg font-medium text-gray-700'>Priyanka Negi</h4>
      </Box>
      </Paper>
       </Container>
    </>
  )
}

export default Dashboard