import React from "react";
import "./partFive.css";
// import { useSelector } from "react-redux";

class partFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hatchwayAPI: {
        dataLoaded: true,
        studentDetails: [],
        searchDetails: [],
      },
    };
  }

  // counter = useSelector((state) => {
  //   console.log(state);
  // });
  componentDidMount() {
    fetch("https://api.hatchways.io/assessment/students").then((response) => {
      let statusCopy = Object.assign({}, this.state);
      if (response.ok) {
        response.json().then((json_response) => {
          statusCopy.hatchwayAPI.studentDetails = json_response.students;
          const finaldata = statusCopy.hatchwayAPI.studentDetails.map(
            (data) => {
              data["tag"] = [];
              return data;
            }
          );

          statusCopy.hatchwayAPI.searchDetails = json_response.students;
          this.setState(finaldata);
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
            arrayValues.firstName
              .toLowerCase()
              .includes(userInput.toLowerCase()) ||
            arrayValues.lastName.toLowerCase().includes(userInput.toLowerCase())
        )
        .map((filterData) => {
          return filterData;
        });
      statusCopy.hatchwayAPI.searchDetails = finaldata;
    } else {
      statusCopy.hatchwayAPI.searchDetails =
        statusCopy.hatchwayAPI.studentDetails;
    }

    this.setState(statusCopy);
  };

  getUserTag = (event) => {
    const userInput = event.target.value;
    let statusCopy = Object.assign({}, this.state);

    if (userInput !== "") {
      var finalObject = [];
      statusCopy.hatchwayAPI.studentDetails.forEach((Objects) => {
        if (Objects.tag.length > 0) {
          Objects.tag.forEach((filter) => {
            if (filter.toLowerCase().includes(userInput.toLowerCase())) {
              finalObject.push(Objects);
            }
          });
        }
      });
      finalObject = finalObject.filter(
        (ele, ind) =>
          ind === finalObject.findIndex((elem) => elem.id === ele.id)
      );

      statusCopy.hatchwayAPI.searchDetails = finalObject;
    } else {
      statusCopy.hatchwayAPI.searchDetails =
        statusCopy.hatchwayAPI.studentDetails;
    }

    this.setState(statusCopy);
  };

  showAccordion = (index) => {
    var accordion = document.getElementsByClassName("accordion");
    var pannel = document.getElementsByClassName("panel");

    if (accordion[index].className === "accordion") {
      accordion[index].className = "accordion active";
      pannel[index].style.overflow = "visible";
      pannel[index].style.maxHeight = pannel[index].scrollHeight + "px";
    } else {
      accordion[index].className = "accordion";
      pannel[index].style.overflow = "hidden";
      pannel[index].style.maxHeight = null;
    }
  };

  addTagToUser = (event, index) => {
    const userInput = event.target.value;
    document.getElementById(index).value = "";
    let statusCopy = Object.assign({}, this.state);
    if (userInput !== "") {
      statusCopy.hatchwayAPI.studentDetails[index]["tag"].push(userInput);
    }
    this.setState(statusCopy);
  };

  render() {
    let studentDetailsArray = this.state.hatchwayAPI.searchDetails.map(
      (data, index) => {
        return (
          <div className="contentTable" key={index}>
            <div className="buttonData">
              <td>
                <div>
                  <button
                    onClick={() => this.showAccordion(index)}
                    className="accordion"
                  />
                </div>
              </td>
            </div>
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
                    <tr>
                      <div className="panel">
                        {data.grades.map((data, index) => {
                          return (
                            <div key={index}>
                              <tr>
                                <pre>
                                  Test{index + 1} {"        "} {data}
                                </pre>
                              </tr>
                            </div>
                          );
                        })}
                      </div>
                    </tr>

                    <tr>
                      <tr>
                        {data.tag.map((data, id) => {
                          return (
                            <td key={id}>
                              <button className="tagbutton">{data}</button>
                            </td>
                          );
                        })}
                      </tr>
                      <input
                        id={index}
                        className="inputborder"
                        type="text"
                        placeholder="Add a tag"
                        onKeyPress={(event) => {
                          if (event.key === "Enter") {
                            this.addTagToUser(event, index);
                          }
                        }}
                      />
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
          {console.log(this.props)}
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
              <div className="inputborder">
                <div className="inputtable">
                  <input
                    onChange={(Event) => this.getUserTag(Event)}
                    placeholder="Search By Tag"
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

export default partFive;
