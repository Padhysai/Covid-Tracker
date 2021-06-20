import React, { useState } from "react";
import DataTable from "./Datatable";
import NewsItem from "./NewsItem";
import { SampleNews } from "./SampleNews";

function News(props) {
  const [news, Setnews] = useState(SampleNews);

  // useEffect(() => {
  //   fetch("https://api.currentsapi.services/v1/search?keywords=covid19", {
  //     method: "GET",
  //     headers: {
  //       authorization: "****",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       Setnews(data.news);
  //       console.log(data);
  //     })
  //     .catch((err) => console.log("Error While fetching News", err));
  // }, []);

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
