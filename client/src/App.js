import react from "react"
import { Card, CardContent, makeStyles, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 475,
    minHeight: 300
  }
})

const App = () =>{
  const classes = useStyles();

  return (
    <div style={cardStyle}>
      <Card className={classes.root}>
        <CardContent>
          <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <h1 style={{textAlign: "center"}}>Welcome</h1>
            <TextField label="Enter Room Code" />
            <Button color="primary" style={{marginTop: 10}}>
              Join Room
            </Button>
            <h4 style={{textAlign: "center"}}>Or</h4>
            <Button color="secondary"  style={{marginTop: 5}}>
              Create New Room
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const cardStyle = {
  
}

export default App;
