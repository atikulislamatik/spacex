import React, { useEffect } from "react";
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

  useEffect(() => {
    dispatch(fetchSpacex());
  }, [dispatch]);

  return (
    <>
      <h2 className="text-center p-5">Spacex Test Project</h2>
      <section className="notification-area">
        <div className="container">
          {loading ? (
            <Loader />
          ) : (
            <>
              {spacex.length > 0 && (
                <>
                  {spacex.map(
                    (item, index) =>
                      item && <FeedCard item={item} key={"feedCard" + index} />
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default App;
