import React, {useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { AppBar, Button, Card, Grid, Paper } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import Image from "next/image";
import TabUi from "../UI/TabUi";
import Link from 'next/link'

const Dashboard = () => {
  return (
    <>
      <AppBar
        position="static"
        className="bg-[transparent] shadow-none mb-3 text-gray-400"
      >
        <Container>
          <Toolbar className="flex justify-between px-0">
            <Box>
              <Button>
                <SearchOutlinedIcon className="text-gray-400" />
              </Button>
            </Box>
            <Box>
              <Button>
                <WbSunnyOutlinedIcon />
              </Button>
              <Button
                variant="outlined"
                className=" border-2 rounded-full border-[--border-gray]"
              >
                <span className="mr-2">Priyanka</span>
                <Avatar alt="Priyanka" src="/images/profile.jpg" />
              </Button>{" "}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ height: "100vh" }}>
        <Paper sx={{ position: "relative" }}>
          <Box className="min-h-40 w-full" sx={{ position: "absolute" }}>
            <Card>
              <img
                src="https://images.unsplash.com/photo-1512273222628-4daea6e55abb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-cover max-h-[200px] w-full opacity-60"
              ></img>
            </Card>
          </Box>
          <Box className="flex justify-center w-full">
            <Box className="flex justify-center">
              <Badge
                color="primary"
                className="h-40 w-40 d-block mx-auto top-[100px]"
                sx={{
                  display: "block",
                  verticalAlign: "middle",
                  flexShrink: "0",
                }}
              >
                <img
                  alt="profileh"
                  src="/images/profile.jpg"
                  className="w-full h-full shadow-md object-cover rounded-full"
                />
              </Badge>
            </Box>
          </Box>
          <Box className="mt-[100px]">
            <h4 className="text-center text-lg font-medium text-slate-800">
              Priyanka Negi
            </h4>
          </Box>
          <Box
            className="flex justify-center w-full"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "8px",
              maxWidth: "400px",
              margin: "auto",
              flexWrap: "wrap",
            }}
          >
            <Box className="mr-5">
              <CodeOutlinedIcon />{" "}
              <span className="text-sm font-normal">UI Developer</span>
            </Box>
            <Box className="mr-5">
              <CodeOutlinedIcon />{" "}
              <span className="text-sm font-normal">UI Developer</span>
            </Box>
            <Box>
              <CodeOutlinedIcon />{" "}
              <span className="text-sm font-normal">UI Developer</span>
            </Box>
          </Box>
          <Box
            className="flex justify-center w-full mt-3"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "8px",
              maxWidth: "500px",
              margin: "auto",
              flexWrap: "wrap",
            }}
          >
            <Card className="mr-5 flex flex-col align-center justify-center min-w-[150px] rounded-md p-[16px] border border-[#d3e6f3] border-[--border-card] shadow-none">
              <h5 className="block mx-auto text-blue-500 font-medium">$ 4,550</h5>
              <p className="text-sm text-center font-normal">Earnings</p>
            </Card>
            <Card className="mr-5 flex flex-col align-center justify-center min-w-[150px] rounded-md  p-[16px] border border-[#d3e6f3] border-[--border-card] shadow-none">
              <h5 className="block mx-auto text-purple-500">$ 60</h5>
              <p className="text-sm text-center font-normal">Projects</p>
            </Card>
            <Card className="flex flex-col align-center justify-center min-w-[150px] rounded-md  p-[16px] border border-[#d3e6f3] border-[--border-card] shadow-none">
              <h5 className="block mx-auto text-green-500">$ 4,550</h5>
              <p className="text-sm text-center font-normal">Success Rate</p>
            </Card>
          </Box>
          <Box>
          <ul className="flex justify-center items-center mt-3">
      <li>
        <Link className="nav-link" href="/overview">Overview</Link>
      </li>
      <li>
        <Link className="nav-link" href="/project">Documents</Link>
      </li>
      <li>
        <Link className="nav-link" href="/connections">Connections</Link>
      </li>
    </ul>
          </Box>
        </Paper>
        <Grid container spacing={2} className="mt-3">
  <Grid item xs={8}>
    <Paper>
      <h1>summary</h1>
    </Paper>
  </Grid>
  <Grid item xs={4}>
  <Paper>
      <h1>summary</h1>
    </Paper>
  </Grid>
  <Grid item xs={4}>
  <Paper>
      <h1>summary</h1>
    </Paper>
  </Grid>
  <Grid item xs={8}>
  <Paper>
      <h1>summary</h1>
    </Paper>
  </Grid>
</Grid>
        <Paper className="p-3 mt-5">
          <h1>Overview</h1>
        </Paper>
        <Box></Box>
        {/* <TabUi/> */}

      </Container>
    </>
  );
};

export default Dashboard;
