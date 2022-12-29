import React from 'react';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      date: '',
      textarea: '',
      readInput: 'This can only be copied',
    };
    this.fileInput = React.createRef();
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.fileInput.current.files[0].name);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="text">Text Input</label>
        <input
          onChange={this.handleChange}
          type="text"
          id="text"
          name="inputText"
          value={this.state.inputText}
        />
        <label htmlFor="date">Date Input</label>
        <input
          onChange={this.handleChange}
          type="date"
          id="date"
          name="date"
          value={this.state.date}
        />
        <label htmlFor="file">Read-only Input</label>
        <input ref={this.fileInput} type="file" />
        <label htmlFor="read-input">File Input</label>
        <input
          type="text"
          id="read-input"
          value={this.state.readInput}
          readOnly
        />
        <label htmlFor="dis-input">Disabled Input</label>
        <input type="text" id="dis-input" disabled />
        <label htmlFor="textarea">Textarea</label>
        <textarea
          onChange={this.handleChange}
          name="textarea"
          id="textarea"
          value={this.state.textarea}
        ></textarea>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
