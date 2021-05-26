import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Result from './results.js';
import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: []
    }
  }
  
  handleForm = (count, results) => {
    this.setState({ count, results });
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  render() {
    return(
      <div>

        <Header />
        <Form prompt="SEND" toggleLoading={this.toggleLoading} handler={this.handleForm}/>
        {this.state.loading ?
          <Result results={this.state.results}/>
         : '' }
        <Footer />

      </div>
    )
  }
}

export default App;
