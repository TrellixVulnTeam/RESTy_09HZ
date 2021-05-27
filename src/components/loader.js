import React from 'react';
import './loader.scss';

class Loader extends React.Component{
  render() {
    return(
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}

export default Loader;
