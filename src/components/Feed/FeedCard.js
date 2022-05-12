import React from "react";

export const FeedCard = ({ item }) => {
  return (
    <>
      <div className="single-card mb-4">
        <div className="card">
          <div className="card-body">
              <img className="w-100 p-3" src={item.links.mission_patch_small}/>
            <h6 className="card-title">Rocket name : {item.rocket.rocket_name}</h6>
            <h6>Rocket type : <strong>{item.rocket.rocket_type}</strong></h6>
            <h6>Launch Year : {item.launch_year}</h6>
            <p className="card-text">
              {item.details}
            </p>
            <a target="_blank" href={item.links.article_link} className="btn btn-primary">
              Read Artical
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
