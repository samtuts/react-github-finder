import React from "react";

const Repo = props => {
  return (
    <div class="card">
      <div class="row">
        <div class="col-md-7">
          <strong>{props.repo.name}</strong>: {props.repo.description}
        </div>
        <div class="col-md-3">
          <span class="badge badge-dark">Forks: {props.repo.forks_count}</span>
          <span class="badge badge-primary">
            Watchers: {props.repo.watchers}
          </span>
          <span class="badge badge-success">
            Stars: {props.repo.stargazers_count}
          </span>
        </div>
        <div class="col-md-2">
          <a href={props.repo.html_url} target="_blank" class="btn btn-dark">
            Repo Page
          </a>
        </div>
      </div>
    </div>
  );
};
export default Repo;
