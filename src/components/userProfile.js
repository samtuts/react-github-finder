import React from "react";

const Userprofile = props => {
  return (
    <div class="card border-secondary mb-3">
      <div class="card-header">
        <h3>{props.user.name}</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <img class="img-thumbnail avatar" src={props.user.avatar_url} />
            <a
              target="_blank"
              class="btn btn-primary btn-block bg-secondary border-secondary"
              href={props.user.html_url}
            >
              View Profile
            </a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-dark">
              Public Repos: {props.user.public_repos}
            </span>
            <span class="badge badge-primary">
              Public Gists: {props.user.public_gists}
            </span>
            <span class="badge badge-success">
              Followers: {props.user.followers}
            </span>
            <span class="badge badge-info">
              Following: {props.user.following}
            </span>
            <br />
            <br />
            <ul class="list-group">
              <li class="list-group-item">Company: {props.user.comapny}</li>
              <li class="list-group-item">
                Website/blog:{" "}
                <a href={props.user.blog} target="_blank">
                  {props.user.blog}
                </a>
              </li>
              <li class="list-group-item">Location: {props.user.location}</li>
              <li class="list-group-item">
                Member Since: {props.user.created_at}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
