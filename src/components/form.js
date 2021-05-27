import React from 'react';
import Button from 'react-bootstrap/Button';
// import superagent from 'superagent';
// import Loader from './loader';
import { If, Then,Else, When, Unless } from 'react-if';
import './style.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // url: "",
      // counter: 0,
      // routeType: ""
    }
  }

  // toggleLoading = () => {
  //   this.setState({ loading: !this.state.loading });
  // }

  // handleClick = async (e) => {
  //   e.preventDefault();
  //   this.props.toggleLoading();
  //   let route = this.state.routeType;
  //   let url = this.state.url;
  //   sessionStorage.setItem(this.state.counter, (`${route}, ${url}`));
  //   let storageCount = this.state.counter + 1;
  //   this.setState({ counter: storageCount });
  //   console.log(url, route);
  //   try{
      
  //     let raw = await superagent(route, url);
  //     let results = raw.body.results;
  //     // let results = await response.json();
  //     console.log(results);
  //     // let entries = data.results;
  //     // let results = Object.entries(entries);
  //     let count = results.count;
  //     setTimeout(() => {
  //       this.props.handler(count, results, url, route, body);
  //       this.props.toggleLoading();
  //     }, 1000);
  //     } catch (e) {
  //       setTimeout(() => {
  //       this.props.toggleLoading();
  //       this.props.handler(e);
  //     }, 1000);
  //   }

  // }

  render() {

    return (

      <div className="input-section">
        <h3 className="select-header">Enter your URL and Route</h3>

        <select onChange={(e) => this.props.handleRoute(e.target.value)}> 
          <option ></option>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <form onSubmit={this.props.handleClick}>
          <input className="input-field" type='text' placeholder='Add URL Here' onChange={(e) => this.props.handleUrl(e.target.value)}></input><br/>
          <When 
          condition={this.props.route === "POST" || this.props.route === "PUT"} onChange={(e) => this.props.handleBody(e.target.value)}>
              <input placeholder="Enter Body Here"></input>
          </When><br/>
          <Button type="submit" size="sm" className="submit-btn bg-danger text-light" variant="secondary" >{this.props.prompt}</Button>
        </form >
      
      </div>
    )
  }
}

export default Form;
