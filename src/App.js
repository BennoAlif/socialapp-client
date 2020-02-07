import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createTheme from "@material-ui/core/styles/createMuiTheme";
import "./App.css";
// Components
import Navbar from "./components/Navbar";
// pages
import home from "./pages/home";
import login from "./pages/login";
import register from "./pages/register";

const theme = createTheme({
  palette: {
    primary: {
      light: "#33C9DF",
      main: "#00BCD4",
      dark: "#008394",
      contrastText: "#FFF"
    },
    secondary: {
      light: "#FF6333",
      main: "#FF3D00",
      dark: "#B22A00",
      contrastText: "#FFF"
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/login" component={login} />
              <Route path="/register" component={register} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
