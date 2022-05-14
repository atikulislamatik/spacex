import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { FeedCard } from "./components/Feed/FeedCard";
import { Loader } from "./components/Loader";
import {
  fetchSpacex,
  spacexSelector
} from "./store/reducers/spacex/spacexSlice";

const App = () => {
  const dispatch = useDispatch();
  const { spacex, loading, hasErrors } = useSelector(spacexSelector);
  const [search, setNewSearch] = useState("");
  useEffect(() => {
    dispatch(fetchSpacex());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? spacex
    : spacex.filter((spacex) =>
        spacex.rocket.rocket_name.toLowerCase().includes(search.toLowerCase())
      );


  return (
    <>
      <h2 className="text-center p-5">Spacex Test Project</h2>

      <section className="feed-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <input
                type="text"
                value={search}
                placeholder="Search by rocket name"
                className="form-control mb-5"
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="row">
            {loading ? (
              <Loader />
            ) : (
              <>
                {filtered.length > 0 ? (
                  <>
                    {filtered.map(
                      (item, index) =>
                        item && (
                          <div className="col-lg-3">
                            <FeedCard item={item} key={item.id} />
                          </div>
                        )
                    )}
                  </>
                ) : (
                  <h6 className="text-center">Not found</h6>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
