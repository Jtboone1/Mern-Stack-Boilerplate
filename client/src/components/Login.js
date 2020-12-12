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

  const loginAccount = async () => {
    const response = await fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const jsonResponse = await response.json()
    console.log(jsonResponse);
    localStorage.setItem('token', jsonResponse.token)
  }

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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              color="primary"
              style={{ marginTop: 10, outline: "none" }}
              onClick={loginAccount}
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