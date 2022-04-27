/* eslint-disable no-unused-vars */
import React from "react";
import "./webBody.css";
import { useEffect, useState } from "react";
import { fetchPost, getStatus, allStudentsDetails } from "../redux";
import { useDispatch, useSelector } from "react-redux";

function WebBody() {
  const dispatch = useDispatch();
  const callStatus = useSelector(getStatus);
  const StudentsDetails = useSelector(allStudentsDetails);

  useEffect(() => {
    if (callStatus == "idle") {
      dispatch(fetchPost());
    }
  }, [callStatus, dispatch]);
  return (
    <div className="body">
      {callStatus == "loading" ? <div>Loading</div> : <div>Sucess</div>}
    </div>
  );
}

export default WebBody;

{
  /* {console.log(StudentsDetails)} */
}
