import React from 'react';
import Button from 'react-bootstrap/Button';
// import superagent from 'superagent';
// import Loader from './loader';
import { If, Then,Else, When, Unless } from 'react-if';
import './form.scss';

class Form extends React.Component {

  render() {

    return (

      <div className="input-section">
        <h3 className="select-header">Enter your URL and Route</h3>

        <select onChange={(e) => this.props.handleRoute(e.target.value)}> 
          <option ></option>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
        <form onSubmit={this.props.handleClick}>
          <input className="input-field" type='text' placeholder='Add URL Here' onChange={(e) => this.props.handleUrl(e.target.value)}></input><br/>
          <When 
          condition={this.props.route === "post" || this.props.route === "put"} >
              <input placeholder="Enter Body Here" onChange={(e) => this.props.handleBody(e.target.value)}></input>
          </When><br/>
          <Button type="submit" size="sm" className="submit-btn bg-danger text-light" variant="secondary" >{this.props.prompt}</Button>
        </form >
      
      </div>
    )
  }
}

export default Form;
