import { useState } from "react"

import { Card, CardContent, makeStyles, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: "500px",
      height: "350px"
    }
})

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  return (
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
            <h3 style={{ textAlign: "center" }}>Login</h3>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{marginBottom: 12}}
            />
            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              color="primary"
              style={{ marginTop: 10, outline: "none" }}
            >
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const cardStyle = {
    position: "absolute",
    left: "50%",
    top: "60%",
    width: "500px",
    height: "350px",
    marginTop: "-250px",
    marginLeft: "-250px" 
}


export default Login;