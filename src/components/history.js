import React from 'react';
import Button from 'react-bootstrap/Button';
import { Switch, Case, Default } from 'react-if';
import './history.scss';


class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: window.location.pathname
    }

  }

  getValues = (e) => {
    let request = e.target.innerHTML;
    request = request.split(', ');
    console.log(request);
    this.props.handleUrl(request[1]);
    this.props.handleRoute(request[0]);
    this.props.handleBody(request[2]);
    // this.props.handleHistory(request);
    this.props.handleClick(e);
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
      </div>
    )
  }
}

export default History;
