/* eslint-disable no-unused-vars */
export function studentData(state, action) {
  state.counter++;
}

export function Decrement(state, action) {
  state.counter += action.payload;
}

export const postsRequested = (state, action) => {
  state.status = "loading";
};

export const postsRecived = (state, action) => {
  state.status = "Sucess";
  const loadedPost = action.payload;
  state.students = state.students.concat(loadedPost.students);
  // state.students.push(loadedPost.students);
};

export const postReuestFailed = (state, action) => {
  state.status = "Failed";
  state.error = action.error.message;
};

// export const stateSet = async (state, action) => {
//   await fetch("https://api.hatchways.io/assessment/students").then(
//     (response) => {
//       if (response.ok) {
//         response.json().then((json_response) => {
//           state.students.push(json_response.students);
//         });
//       } else {
//         state.students.push({ status: 400 });
//       }
//     }
//   );
// };

// return state;
// if (action.type === "INC") {
//   return { counter: state.counter + 1 };
// } else if (action.type === "DEC") {
//   return { counter: state.counter - 1 };
// }

// export default studentData;

// const [studentData, setStudentData] = useState([]);
// useEffect(() => {
//   fetch("https://api.hatchways.io/assessment/students").then((response) => {
//     if (response.ok) {
//       response.json().then((json_response) => {
//         setStudentData(json_response.results);
//         console.debug(json_response.results);
//       });
//     } else {
//       response.json.then((json_response) => {
//         setStudentData(json_response);
//       });
//     }
//   });
// }, []);

// return "studentData";
// import { useEffect } from "react";
// import { useState } from "react";

// [
//   {
//     build: "Stable (1.11.0)",
//     OS: "Linux",
//     Package: "Conda",
//     Language: "Python",
//     Compute: "CUDA 10.2",
//     Message:
//       "conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch",
//   },
//   {
//     build: "Stable (1.11.0)",
//     OS: "MAC",
//     Package: "Conda",
//     Language: "Python",
//     Compute: "CUDA 10.2",
//     Message:
//       "# MacOS Binaries dont support CUDA, install from source if CUDA is needed conda install pytorch torchvision torchaudio -c pytorch",
//   },
//   {
//     build: "Stable (1.11.0)",
//     OS: "Windows",
//     Package: "Conda",
//     Language: "Python",
//     Compute: "CUDA 10.2",
//     Message:
//       "CUDA-10.2 PyTorch builds are no longer available for Windows, please use CUDA-11.3",
//   },
//   {
//     build: "Stable (1.11.0)",
//     OS: "Linux",
//     Package: "Pip",
//     Language: "Python",
//     Compute: "CUDA 10.2",
//     Message: "pip3 install torch torchvision torchaudio",
//   },
//   {
//     build: "Stable (1.11.0)",
//     OS: "Linux",
//     Package: "LibTorch",
//     Language: "C++/Java",
//     Compute: "CUDA 10.2",
//     Message:
//       "Download here (Pre-cxx11 ABI): \n" +
//       "https://download.pytorch.org/libtorch/cu102/libtorch-shared-with-deps-1.11.0%2Bcu102.zip\n\n" +
//       "Download here (cxx11 ABI):\n" +
//       "https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.11.0%2Bcu102.zip",
//   },
//   {
//     build: "Stable (1.11.0)",
//     OS: "Linux",
//     Package: "Source",
//     Language: "Python",
//     Compute: "CUDA 10.2",
//     Message:
//       "Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source",
//   },

//   {
//     build: "Stable (1.11.0)",
//     OS: "Linux",
//     Package: "Conda",
//     Language: "C++/Java",
//     Compute: "CUDA 10.2",
//     Message:
//       "Download here (Pre-cxx11 ABI): \n" +
//       "https://download.pytorch.org/libtorch/cu102/libtorch-shared-with-deps-1.11.0%2Bcu102.zip\n\n" +
//       "Download here (cxx11 ABI):\n" +
//       "https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.11.0%2Bcu102.zip",
//   },
// ];
