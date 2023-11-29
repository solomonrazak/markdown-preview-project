import { marked } from "marked";
import React, { Component } from "react";
import Badge from "react-bootstrap/Badge"; // badge for header styling.
import Button from "react-bootstrap/Button";

// Dependencies installed.

// npm install react-bootstrap bootstrap
// npm install marked - Marked.js is the brains behind the conversion of markdown and is very simple to use.

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  // updateMarkdown function
  updateMarkDown = (markdown) => {
    this.setState({ markdown });
  }

  

  // clear textarea function
  clearText = () => {
    this.setState({ markdown: '' });
  };

  render() {
    // object for inline style.
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center p-2">
            <Badge className="text-align-center mx-auto" variant="Light">
              Markdown Previewer
            </Badge>
          </h1>
          <div className="row mt-3" id="flex-container">
            <div className="col-md-6" id="markown-input">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="mark-input">
                <textarea
                  className="input mx-auto"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => this.updateMarkDown(e.target.value)}
                >
                  {console.log(this.state.markdown)}
                </textarea>
                <div id="btnReset" className="d-flex justify-content-center">
                  <Button variant="primary" onClick={this.clearText}>Reset</Button>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-6" id="preview-input">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div className="mark-input">
                <div
                  className="input"
                  style={outputStyle}
                  dangerouslySetInnerHTML={{
                    __html: marked(this.state.markdown),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
