import React, { useState } from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState({ text: "" });
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({ type: "create-tuit", tuit: whatsHappening.text });
  };

  return (
    <div
      className="form-group d-flex flex-row  align-item-start justify-content-start"
      style={{ width: "100%" }}
    >
      <div className="me-3">
        <img
          className="wd-user-image"
          style={{ borderRadius: "24px" }}
          src="/Images/spacex.jfif"
          alt="Rocket"
          width="48px"
          height="48px"
        />
      </div>
      <div style={{ width: "100%" }}>
        <textarea
          className="form-control ps-0"
          value={whatsHappening.text}
          style={{
            fontSize: "12px",
            color: "white",
            backgroundColor: "black",
            borderBottom: "1px solid rgb(47, 51, 54)",
          }}
          onChange={(event) => {
            setWhatsHappening({ text: event.target.value });
          }}
          rows="3"
          placeholder="What's Happening?"
        ></textarea>
        <div>
          <i
            style={{ color: "#2a9fd6" }}
            className="my-2 pt-1 mx-2 fa fa-image"
          ></i>
          <i
            style={{ color: "#2a9fd6" }}
            className="my-auto mx-2 fa fa-chart-line"
          ></i>
          <i
            style={{ color: "#2a9fd6" }}
            className="my-auto mx-2 fa fa-smile"
          ></i>
          <i
            style={{ color: "#2a9fd6" }}
            className="my-auto mx-2 fa fa-calendar"
          ></i>
          <button
            className="btn btn-primary float-end m-2"
            style={{ borderRadius: "24px" }}
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
        </div>
      </div>
    </div>
  );
};
export default WhatsHappening;
