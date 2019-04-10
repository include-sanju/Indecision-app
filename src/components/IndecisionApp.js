import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";
export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.options.length !== prevState.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  Okay = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  handleRemoveOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };
  removeAll = () => {
    this.setState(() => ({ options: [] }));
  };
  handleClick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);

    this.setState(() => ({ selectedOption: this.state.options[randomNumber] }));
  };
  handleAddOption = option => {
    if (!option) {
      return "enter valid option ";
    } else if (this.state.options.indexOf(option) > -1) {
      return "option already exists";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer!";

    return (
      <div>
        <Header subtitle={subtitle} />{" "}
        <div className="container">
          {" "}
          <Action
            options={this.state.options}
            handleClick={this.handleClick}
            hasOptions={this.state.options.length > 0}
          />{" "}
          <div className="widget">
            {" "}
            <Options
              options={this.state.options}
              handleRemoveAll={this.removeAll}
              handleRemoveOption={this.handleRemoveOption}
            />{" "}
            <AddOption handleAddOption={this.handleAddOption} />{" "}
          </div>{" "}
        </div>{" "}
        <OptionModal option={this.state.selectedOption} Okay={this.Okay} />{" "}
      </div>
    );
  }
}
