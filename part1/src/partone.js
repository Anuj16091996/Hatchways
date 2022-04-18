import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const FetchAPI = () => {
  return axios
    .get("https://randomuser.me/api/")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
};

export default function PartOne() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    FetchAPI().then((data) => {
      setUserData(JSON.stringify(data, null, 2));
    });
  }, []);

  return (
    <div>
      <div>
        <pre>{userData}</pre>
      </div>
    </div>
  );
}
