import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <>
        <div className="card" style={{ width: "17rem" }}  >
          <img
            src={
              !imageUrl
                ? "https://images.filmibeat.com/img/2025/02/skyforceworldwideboxoffice1-1738493542.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body"  >
            <h5 className="card-title"  style={{color:'rgb(24, 24, 209)'}}>
              {title}...<span class="badge bg-warning text-dark">New</span>
              <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
