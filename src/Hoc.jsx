import React from "react";

export const Hoc = (Wrapped) => {
  return function () {
    return (
      <>
        <div>
          <h3>HEADING</h3>
          <Wrapped />
        </div>
      </>
    );
  };
};
