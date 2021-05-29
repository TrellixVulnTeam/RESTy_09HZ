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
      request: false,
      route: '',
      url: '',
      body: ''
    }

  }
  toggleview = (e) => {
    this.setState({request:!this.state.request});
  }
  getValues = (e) => {
    let request = e.target.innerHTML;
    request = request.split(', ');
    this.toggleview();
    console.log(request);
    if (request.length > 2) {
      this.setState({ route: request[0], url: request[1], body: request[2] });
    } else {
      this.setState({ route: request[0], url: request[1] });
    }
    this.props.handleUrl(this.state.url);
    this.props.handleRoute(this.state.route);
    this.props.handleBody(this.state.body);
    // this.props.handleHistory(this.state.request);
    this.props.handleClick(e);
    this.setState({ route:'', url:'', body:''})
  }

  sendValues = (e) => {
  }

  render() {

    return (
      <div>
        <section className="history-list">
          {Object.keys(sessionStorage).map((i, val) => {
            return (
              <ol>
                <li key={i} onClick={this.getValues} value={sessionStorage.getItem(i, val)}>{sessionStorage.getItem(i, val)}
                </li>
              </ol>
            );
          })}

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
