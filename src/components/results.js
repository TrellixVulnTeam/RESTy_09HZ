import React from 'react';
import ReactJson from 'react-json-view'
import './results.scss';

const Results = (props) => {
  return (
    <section className="results">
      <ReactJson src={props.results} />
    </section>
  )

}

export default Results;
