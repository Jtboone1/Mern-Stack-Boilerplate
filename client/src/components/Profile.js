import { useState, useEffect } from "react"

import { Card, CardContent, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: "500px",
      height: "350px"
    }
})

const Profile = () => {
  const [profileName, setProfileName] = useState("");
  const classes = useStyles();

  const getProfile = async () => {
      console.log(localStorage.getItem('token'))
      const response = await fetch("/profile", {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
          
      })
      const jsonResponse = await response.json()
      setProfileName(jsonResponse.user)
  } 

  useEffect(() => {
      getProfile();
  }, [])

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
            <h3 style={{ textAlign: "center" }}>Profile</h3>
            <h3 style={{ textAlign: "center" }}>{profileName}</h3>
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

export default Profile;