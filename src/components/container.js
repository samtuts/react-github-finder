import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Searchbar from "./searchbar";
import Userprofile from "./userProfile";
import RepoList from "./repoList";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      user: {},
      repos: []
    };
  }
  onChange = async e => {
    await this.setState({ searchInput: e.target.value });
    axios
      .get("https://api.github.com/users/" + this.state.searchInput)
      .then(response => {
        this.setState({ user: response.data });
      });
    axios
      .get("https://api.github.com/users/" + this.state.searchInput + "/repos")
      .then(response => {
        this.setState({ repos: response.data });
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div class="container">
          <Searchbar changed={this.onChange} val={this.state.searchInput} />
          <br />
          {Object.keys(this.state.user).length !== 0 ? (
            <Userprofile user={this.state.user} />
          ) : null}
          {this.state.repos.length !== 0 ? (
            <RepoList repos={this.state.repos} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Container;
