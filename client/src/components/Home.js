import { useState, useEffect } from "react"
import io from 'socket.io-client';
import { Card, CardContent, makeStyles, Button, TextField } from '@material-ui/core';

let socket;

const useStyles = makeStyles({
    root: {
      minWidth: 475,
      minHeight: 300
    }
})

const Home = () => {
  const [roomCode, setRoomCode] = useState("")
  const classes = useStyles();

  useEffect(() => {
    socket = io('localhost:5000');
    socket.on('final', () => console.log('I am at final'))
  }, [])

  const joinEmit = () => {
    socket.emit('joinRoom', roomCode);
  }

  const testMessage = () => {
    socket.emit('testMessage', roomCode);
  }
  return (
    <>
      <div style={cardStyle}>
        <Card className={classes.root}>
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                padding: "15px",
              }}
            >
              <h1 style={{ textAlign: "center" }}>Welcome</h1>
              <TextField
                label="Enter Room Code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
              />
              <Button
                color="primary"
                style={{ marginTop: 10, outline: "none" }}
                onClick={joinEmit}
              >
                Join Room
              </Button>
              <Button
                color="secondary"
                style={{ marginTop: 80, outline: "none" }}
                onClick={testMessage}
              >
                Create New Room
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

const cardStyle = {
    position: "absolute",
    left: "50%",
    top: "60%",
    width: "500px",
    height: "500px",
    marginTop: "-250px",
    marginLeft: "-250px" 
}

export default Home;
