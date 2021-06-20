import React, { useEffect, useState } from "react";
import DataTable from "./Datatable";
import NewsItem from "./NewsItem";

function News(props) {
  const [news, Setnews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=covid 19&sortBy=popularity&apiKey=4fdd8d3e017f4c63af79458698f87d05"
    )
      .then((res) => res.json())
      .then((data) => {
        Setnews(data.articles);
        console.log(data);
      })
      .catch((err) => console.log("Error While fetching News", err));
  }, []);

  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <div className="col-xl-3">
          <div className="card">
            <div className="card-header">
              <h5 className="text-center"> Latest News</h5>
            </div>
            <div className="card-body card-scroll">
              <ul className="country-list">
                {news.map((article) => (
                  <NewsItem key={article.title} article={article} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-9">
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default News;
