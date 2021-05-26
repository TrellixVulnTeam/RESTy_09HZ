import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      routeType: ""
    }
  }
  handleClick = async (e) => {
    e.preventDefault();

    let route = this.state.routeType;
    let url = this.state.url;
    console.log(url, route);
    let raw = await fetch(url, {method:route});
    let data = await raw.json();
    let entries = data.results;

    let results = Object.entries(entries);

    let count = data.count;
    console.log(entries);
    this.props.handler(count, results);
    this.props.toggleLoading();
  }

  render() {
    return (

      <div className="input-section">
        <h3 className="select-header">Enter your URL and Route</h3>

        <select onChange={(e) => this.setState({ routeType: e.target.value })}> 
          <option ></option>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select> 
        <form onSubmit={this.handleClick}>
          <input className="input-field" type='text' placeholder='Add URL Here' onChange={(e) => this.setState({ url: e.target.value })}></input><br/>
          <Button type="submit" size="sm" className="submit-btn bg-danger text-light" variant="secondary" >{this.props.prompt}</Button>
        </form >
      
      </div>
    )
  }
}

export default Form;
