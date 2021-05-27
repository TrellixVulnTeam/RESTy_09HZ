import React from 'react';
import './history.scss';


const History = (props) => {
  const getValues = (e) => {
    let request = e.target.innerHTML;
    request = request.split(' ');
    let url = request[1];
    let route = request[0];
    this.props.handleHistory(route, url)
  }
  return (
    <div>
      <h3>History</h3>
      <section className="history">
        <ul>
        {Object.keys(sessionStorage).map((i, val) => {
          return (
            <li key={i} onClick={getValues}>{sessionStorage.getItem(i, val)} 
            </li>
          );
        })}
        </ul>
      </section>
    </div>
  )
}

export default History;
