import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import History from './history.js';
import Main from './main.js'
import { BrowserRouter } from 'react-router-dom';
// import './form.scss';
import './_reset.scss';

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <Header />
        <Main />
        {/* <History /> */}
        <Footer />

      </BrowserRouter>
    )
  }
}

export default App;
