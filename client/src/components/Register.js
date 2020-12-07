import { useState } from "react"

import { Card, CardContent, makeStyles, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: "500px",
      height: "400px"
    }
})

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    
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
              <h3 style={{ textAlign: "center" }}>Register</h3>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{marginBottom: 10}}
              />
              <TextField
                label="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                style={{marginBottom: 10}}
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{marginBottom: 10}}
              />
              <TextField
                label="Confirm Password"
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                style={{marginBottom: 10}}
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
    height: "400px",
    marginTop: "-250px",
    marginLeft: "-250px" 
}
export default Register;