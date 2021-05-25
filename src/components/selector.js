import React from 'react';
import Button from 'react-bootstrap/Button';
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
    e.preventDefault();
      let url = e.target.value;
      this.setState({ url });
    console.log(this.state);
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
        <select onChange={(e) => this.setState({ routeType: e.target.value })}> 
          <option ></option>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select> 
        {/* </DropdownButton> */}

        <input className="input-field" type='text' placeholder='Add URL Here' onChange={(e) => this.setState({ url: e.target.value })}></input><br/>
        <Button type="submit" size="sm" className="submit-btn bg-danger text-light" variant="secondary" onSubmit={this.handleClick}>Submit</Button>
        

        <h3 className="select-option" >{this.state.routeType} {this.state.url}</h3>
      
    
      </div>
    )
  }
}

export default Selector;
