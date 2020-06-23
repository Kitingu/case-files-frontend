import React, { useState } from "react";
import Loader from "react-loader-spinner";
import "../../assets/shared/spinner.scss";

export default ({ spinner }) => {
  return (
    spinner && (
      <div className="spinnerContainer">
        <div>
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        </div>
      </div>
    )
  );
};
