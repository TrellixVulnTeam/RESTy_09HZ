import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Selector from './selector.js';
import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>

        <Header />
        <Selector />
        <Footer />

      </div>
    )
  }
}

export default App;
