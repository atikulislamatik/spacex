import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSpacex,
  spacexSelector,
} from "../store/reducers/spacex/spacexSlice";
import { Loader } from "./Loader";

export const Search = ({ item }) => {
  const dispatch = useDispatch();
  const { spacex, loading, hasErrors } = useSelector(spacexSelector);
  const [searchRocket, setSearchRocket] = useState("");

  useEffect(() => {
    dispatch(fetchSpacex());
  }, [dispatch]);

  return (
    <>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search Rocket"
          onChange={(e) => setSearchRocket(e.target.value)}
        />

        {/* {spacex.filter((value) => {
          if (searchRocket === "") {
            return value;
          } else if (
            value.rocket.rocket_name
              .toLowerCase()
              .includes(searchRocket.toLowerCase())
          ) {
            return value;
          }
        })} */}
        <div className="row">
          {loading ? (
            <Loader />
          ) : (
            <>
              {spacex.length > 0 && (
                <>
        {spacex.filter((value) => {
          if (searchRocket === "") {
            return value;
          } else if (
            value.rocket.rocket_name
              .toLowerCase()
              .includes(searchRocket.toLowerCase())
          ) {
            return value;
          }
        })}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
