import React from 'react';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './style.scss';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      routeType: ""
    }
  }
  handleClick = (e) => {
    // let url = e.target.value;
    // this.setState({ url });
    console.log(this.state);
  }

  handleChange = (e) => {
    e.preventDefault();
    let url = e.target.value;
    this.setState({ url });
    console.log(this.state.url, this.state.routeType)

  }

  handleSelect = (e) => {
    let routeType = e.target.value;
    this.setState({ routeType })
    console.log(`inside handleSelect: ${this.state.routeType}`);
  }

  render() {
    return (

      <div className="input-section">
        <h3 className="select-header">Enter your URL and Route</h3>

        {/* <DropdownButton 
        id="dropdown-basic-button" 
        title="Select Route" 
        size="sm"
        onClick={this.handleSelect}
        > */}
        <select onChange={this.handleSelect}> 
          <option ></option>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select> 
        {/* </DropdownButton> */}

        <input type='text' placeholder='Add URL Here' onChange={this.handleChange}></input><br/>
        <Button type="submit" size="sm" className="bg-danger text-light" variant="secondary" onClick={this.handleClick}>Submit</Button>
      
        <h3 className="select-option" >{this.state.routeType} {this.state.url}</h3>
    
      </div>
    )
  }
}

export default Selector;
