import React from "react";

export const Loader = () => {
  return (
    <>
      <div className="loader-area min-vh-100 w-100 text-center">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="spinner-border " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
