import React from 'react';
import Results from './results.js';
import Button from 'react-bootstrap/Button';
import { If, Then, When, Unless } from 'react-if';

import './history.scss';
import request from 'superagent';


class HistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: false
    }

  }

  toggleview = (e) => {
    this.setState({request: true});
  }

  getValues = (e) => {
    console.log(e.target.innerHTML);
    let request = e.target.innerHTML;
    request = request.split(', ');
    this.toggleview();
    console.log(request);
    if (request.length > 2) {
      this.props.handleUrl(request[1]);
      this.props.handleRoute(request[0]);
      this.props.handleBody(request[2]);
    } else {
      this.props.handleUrl(request[1]);
      this.props.handleRoute(request[0]);
    }
    this.props.handleClick(e);

  }


  render() {

    return (
      <div>
        <section className="history-list">
          <ol>
          {Object.keys(sessionStorage).map((i, val) => {
            return (
                <li key={i} onClick={this.getValues} value={sessionStorage.getItem(i, val)}>{sessionStorage.getItem(i, val)}
                </li>
            );
          })}
          </ol>

        </section>
        <If condition={this.state.request}>
          <>
            <h3>Results</h3>
            <Results results={this.props.results}></Results>
          </>
        </If>
      </div>
    )
  }
}

export default HistoryPage;
