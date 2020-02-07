import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";

import Scream from "../components/Scream";

export class home extends Component {
  state = {
    screams: null
  };
  componentDidMount() {
    Axios.get("/screams")
      .then(res => {
        this.setState({
          screams: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let screamsMarkup = this.state.screams ? (
      this.state.screams.map(e => (
        <div key={e.id}>
          <Scream scream={e} />
        </div>
      ))
    ) : (
      <p>Loading</p>
    );
    return (
      <Grid container spacing={5}>
        <Grid item sm={8} xs={12}>
          {screamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <h1>Content</h1>
        </Grid>
      </Grid>
    );
  }
}

export default home;
