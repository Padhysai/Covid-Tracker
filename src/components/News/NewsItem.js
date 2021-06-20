import React from "react";

function NewsItem(props) {
  return (
    <div class="card">
      <img
        class="card-img-top"
        src={props.article.urlToImage}
        alt="Cardcap"
      ></img>
      <div class="card-body">
        <p class="card-text">{props.article.title}</p>
        <a
          href={props.article.url}
          target="_blank"
          rel="noreferrer"
          class="card-link text-center"
        >
          Article link
        </a>
      </div>
      <hr />
    </div>
  );
}

export default NewsItem;
