import React from "react";
import Repo from "./repo";
const RepoList = props => {
  return (
    <div>
      <h3 class="page-header">Latest Repos</h3>
      <div id="repos">
        {props.repos.length != 0
          ? props.repos.map(repo => <Repo repo={repo} />)
          : null}
      </div>
    </div>
  );
};
export default RepoList;
