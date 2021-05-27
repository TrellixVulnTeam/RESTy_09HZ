import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Result from './results.js';
import Loader from './loader.js';
import History from './history.js';
import { If, Then, When, Unless } from 'react-if';
import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: [],
      history: [],
      url: '',
      route: ''
    }
  }
  
  handleForm = (count, results, url, route) => {
    this.setState({ count, results, url, route });
    console.log(`inside handleForm ${results}, ${route}, ${url}`);
  }
  handleHistory = (url, route) => {
    this.setState({ url, route});
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  render() {
    return(
      <div>
        <Header />
        <If condition={this.state.loading}>
          <Then>
            <Loader/>
          </Then>
        </If>
        <Form prompt="SEND" toggleLoading={this.toggleLoading} handler={this.handleForm}/>
         {this.state.count !== 0 ?
         <>
         <Result results={this.state.results}/>
         <History history={this.state.history} handler={this.handleHistory}></History>
          </>
          : '' }
        <Footer />

      </div>
    )
  }
}

export default App;
