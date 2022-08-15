import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import computer from "../assets/Images/computer.jpg"
import twitter from "../assets/Images/Exclusion 53.svg"
import shareicons from "../assets/Images/Exclusion 54.svg"




import notification from "../assets/Images/Group 45.svg";
import {
  Card,
  Typography,
  Grid,
  CardContent,
  CardActions,
  Button,

} from "@mui/material";

import "../Events/Events.css";


function Events() {
  const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    // height: "26vw",
    // width: "32rem"
  };
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <>
    <h2>Events</h2>
    <div>
              <input
                className="input"
                type="search"
                placeholder="Search topic by names,tags or categories"
              />
              <button type="search" className="blogbtn">
                Search
              </button>

            </div>
    <Box xs={2} sm={4} md={4} lg={6} xl={8}>
    <Grid
    
      container
      spacing={5}
      // ml={5}
      p={5}
      
    >
      <Grid item sm={4}>
        <Card style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "150px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row"  spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={4} >
        <Card  style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row" spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={4}>
        <Card style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "150px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row"  spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={4} >
        <Card  style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row" spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={4}>
        <Card style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "150px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row"  spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={4} >
        <Card  style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row" spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={4}>
        <Card style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "150px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row"  spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={4} >
        <Card  style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row" spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>


      <Grid item sm={4}>
        <Card style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "150px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row"  spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={4} >
        <Card  style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row" spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={4}>
        <Card style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "150px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row"  spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={4} >
        <Card  style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row" spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={4}>
        <Card style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "150px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row"  spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={4} >
        <Card  style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row" spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={4}>
        <Card style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "150px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={7}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack>
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row"  spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={4} >
        <Card  style={cardStyle} >
          <Stack direction="row" spacing={1}>
            <img
              src={computer}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
            <Stack>
              <Typography variant="h6" fontWeight={700} mt={3}>
                AMA between Crypto Society and Kilt Protocol
              </Typography>
              <Stack direction="row" spacing={1}>
                <Typography variant="subtitle1">Date- 3 December</Typography>
                <Stack >
                  <Typography variant="subtitle1">Time- 19:00 CET</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <CardContent>
            <Typography align="justify" fontWeight={500}>
              On 3rd December Crpto Society orgnaization will host the AMA
              session on telegram with Kilt Protocol. You all are welcome to
              join and the top 5 questions will get some amazing awards.
            </Typography>
            <Typography mt={1}>
              <a href="/" style={{ color: "red" }}>
                Read More
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={8}>
              <Button variant="contained" size="medium" color="error">
                Add to calendar
              </Button>

              <Stack direction="row" spacing={1}>
                <a href="/">
                  <img src={shareicons} alt="/" />
                </a>
                <a href="/">
                  <img src={twitter} alt="/" />
                </a>
                <a href="/">
                  <img src={notification} alt="/" />
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    </Box>


    </>
  );
}

export default Events;
