import React from "react";

export const Loader = () => {
  return (
    <>
      <div className="loader-area min-vh-100 w-100 text-center">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="spinner-border " role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
