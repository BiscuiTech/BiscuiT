import React from "react";
export default ({ src }) => {
  return (
    <img
      src={src}
      className="my-2 shadow-small hover:shadow-medium transition-shadow duration-200"
    />
  );
};
