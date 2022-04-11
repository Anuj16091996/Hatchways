import React from "react";
import "./partThree.css";

class partThree extends React.Component {
  constructor() {
    super();
    this.state = {
      hatchwayAPI: { dataLoaded: true, studentDetails: [], searchDetails: [] },
    };
  }
  componentDidMount() {
    fetch("https://api.hatchways.io/assessment/students").then((response) => {
      let statusCopy = Object.assign({}, this.state);
      if (response.ok) {
        response.json().then((json_response) => {
          statusCopy.hatchwayAPI.studentDetails = json_response.students;
          statusCopy.hatchwayAPI.searchDetails = json_response.students;
          this.setState(statusCopy);
        });
      } else {
        statusCopy.hatchwayAPI.dataLoaded = false;
        this.setState(statusCopy);
      }
    });
  }

  getUserInput = (event) => {
    const userInput = event.target.value;
    let statusCopy = Object.assign({}, this.state);
    if (userInput !== "") {
      const finaldata = statusCopy.hatchwayAPI.studentDetails
        .filter(
          (arrayValues) =>
            arrayValues.firstName.toLowerCase().includes(userInput) ||
            arrayValues.lastName.toLowerCase().includes(userInput)
        )
        .map((filterData, index) => {
          return filterData;
        });
      statusCopy.hatchwayAPI.searchDetails = finaldata;
    }

    this.setState(statusCopy);
  };

  render() {
    let studentDetailsArray = this.state.hatchwayAPI.searchDetails.map(
      (data, index) => {
        return (
          <div className="contentTable" key={index}>
            <div className="contentData">
              <tr>
                <td className="Align_Image">
                  <img
                    src={data.pic}
                    alt="Cover_Image"
                    height="50px"
                    width="50px"
                  />
                </td>
                <td>
                  <tr>
                    <b>
                      <h1>{data.firstName + " " + data.lastName}</h1>
                    </b>
                  </tr>
                  <div className="Align_Content">
                    <tr>Email :{data.email}</tr>
                    <tr>Company :{data.company}</tr>
                    <tr>Skill :{data.skill}</tr>
                    <tr>
                      Average :
                      {data.grades.reduce((a, b) => a + parseFloat(b), 0) /
                        data.grades.length}
                    </tr>
                  </div>
                </td>
              </tr>
            </div>
          </div>
        );
      }
    );
    return (
      <div>
        <div>
          {this.state.hatchwayAPI.dataLoaded ? "" : "Server Not Working"}
        </div>
        <div className="body">
          <div className="centrecontent">
            <div className="container">
              <div className="inputborder">
                <div className="inputtable">
                  <input
                    onChange={(Event) => this.getUserInput(Event)}
                    placeholder="Search By Name"
                  />
                </div>
              </div>
              <div className="scrollobject">
                <div>{studentDetailsArray}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default partThree;
