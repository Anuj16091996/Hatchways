import React, { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";

// const FetchAPI = () => {
//   return axios
//     .get("https://randomuser.me/api/")
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// FetchAPI().then((data) => {
//   // console.log(data.data.results);
//   setUserData(JSON.stringify(data, null, 2));
// });

export default function PartOne() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/").then((response) => {
      if (response.ok) {
        response.json().then((json_response) => {
          setUserData(json_response.results);
        });
      } else {
      }
    });
  }, []);

  return (
    <div>
      <div>{console.log(userData)}</div>
    </div>
  );
}
