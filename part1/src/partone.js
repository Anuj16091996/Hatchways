import React from "react";

class partone extends React.Component {
  constructor() {
    super();
    this.state = {
      hatchwayAPI: { dataLoaded: true, studentDetails: [] },
    };
  }
  componentDidMount() {
    fetch("https://api.hatchways.io/assessment/students").then((response) => {
      let statusCopy = Object.assign({}, this.state);
      if (response.ok) {
        response.json().then((json_response) => {
          statusCopy.hatchwayAPI.studentDetails = json_response.students;
          this.setState(statusCopy);
        });
      } else {
        statusCopy.hatchwayAPI.dataLoaded = false;
        this.setState(statusCopy);
      }
    });
  }

  render() {
    console.log(this.state.hatchwayAPI.studentDetails);
    let studentDetailsArray = this.state.hatchwayAPI.studentDetails.map(
      (data, index) => {
        return (
          <tbody key={index}>
            <tr>
              <img
                src={data.pic}
                alt="Cover_Image"
                height="50px"
                width="50px"
              />
            </tr>
            <tr>
              <b>{data.firstName + " " + data.lastName}</b>
            </tr>
            <tr>Email :{data.email}</tr>
            <tr>Company :{data.company}</tr>
            <tr>Skill :{data.skill}</tr>

            <tr>
              Average :
              {data.grades.reduce((a, b) => a + parseFloat(b), 0) /
                data.grades.length}
            </tr>
          </tbody>
        );
      }
    );
    return (
      <div>
        <div>
          {this.state.hatchwayAPI.dataLoaded ? "" : "Server Not Working"}
        </div>
        <div>
          <table>{studentDetailsArray}</table>
        </div>
      </div>
    );
  }
}

export default partone;
