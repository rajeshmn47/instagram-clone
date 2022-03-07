import { makeStyles } from "@material-ui/core/styles";
import { TextField,Input, Button } from "@material-ui/core";
import { useState } from "react";
import "./App.css"

function App() {
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  return (
    <>
  <div style={{height:'100vh',width:'100vw'}}>
  <center>
            <img
              className="app__headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              alt=""
            />
          </center>
          <form className='form'>
           
          <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
              <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
                 <Button
              type="submit"
              variant="contained"
              color="primary"
              disableElevation
            >
              Sign Up
            </Button>
            </form>
          </div>
  </>
  );
}

export default App;
