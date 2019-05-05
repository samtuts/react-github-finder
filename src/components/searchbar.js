import React from "react";

const Searchbar = props => {
  return (
    <div>
      <b>
        <h1>Search Github Users</h1>
      </b>
      <p class="lead">
        Enter a username to fetch a users profile info and repos
      </p>
      <input
        type="text"
        id="searchUser"
        class="form-control"
        placeholder="Github Username..."
        onChange={props.changed}
        value={props.val}
      />
    </div>
  );
};
export default Searchbar;
